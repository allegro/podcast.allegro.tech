import React, {createContext, ReactNode, useContext, useMemo, useReducer, useRef} from 'react'

interface AudioPlayerState {
    playing: boolean
    muted: boolean
    duration: number
    currentTime: number
    meta: { title: string, audio: { src: string } } | null
    audio: { src: string; type: string }
    title: string
}

interface AudioPlayerActions {
    play: (data?: { title: string, audio: { src: string, type: string } }) => void
    pause: () => void
    toggle: (data?: { title: string, audio: { src: string, type: string } }) => void
    seekBy: (amount: number) => void
    seek: (time: number) => void
    playbackRate: (rate: number) => void
    toggleMute: () => void
    isPlaying: (data?: { title: string, audio: { src: string, type: string } }) => boolean
}

export type AudioPlayerContextType = AudioPlayerState & AudioPlayerActions

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined)

type Action =
    | { type: 'SET_META'; payload: object }
    | { type: 'PLAY', payload?: never }
    | { type: 'PAUSE', payload?: never }
    | { type: 'TOGGLE_MUTE', payload?: never }
    | { type: 'SET_CURRENT_TIME'; payload: number }
    | { type: 'SET_DURATION'; payload: number }

const reducers = {
    SET_META(state: AudioPlayerState, action: Action) {
        return {...state, meta: action.payload}
    },
    PLAY(state: AudioPlayerState) {
        return {...state, playing: true}
    },
    PAUSE(state: AudioPlayerState) {
        return {...state, playing: false}
    },
    TOGGLE_MUTE(state: AudioPlayerState) {
        return {...state, muted: !state.muted}
    },
    SET_CURRENT_TIME(state: AudioPlayerState, action: Action) {
        return {...state, currentTime: action.payload}
    },
    SET_DURATION(state: AudioPlayerState, action: Action) {
        return {...state, duration: action.payload}
    },
}

function audioReducer(state: AudioPlayerState, action: Action): AudioPlayerState {
    return reducers[action.type](state, action) as AudioPlayerState
}

interface AudioProviderProps {
    children: ReactNode
}

export function AudioProvider({children}: AudioProviderProps) {
    const [state, dispatch] = useReducer(audioReducer, {
        playing: false,
        muted: false,
        duration: 0,
        currentTime: 0,
        meta: null,
        audio: {src: '', type: ''},
        title: ''
    })
    const playerRef = useRef<HTMLAudioElement>(null)

    const actions = useMemo(() => {
        return {
            play(data?: {
                audio: { src: string; type: string } | undefined,
                title: string
            }, src?: string, currentTime?: number) {
                if (data) {
                    dispatch({type: 'SET_META', payload: data})

                    if (playerRef.current && playerRef.current.currentSrc !== data.audio!.src) {
                        const playbackRate = playerRef.current.playbackRate
                        playerRef.current.src = data.audio!.src
                        playerRef.current.load()
                        playerRef.current.pause()
                        playerRef.current.playbackRate = playbackRate
                        if (src && src.endsWith(data.audio!.src)) {
                            playerRef.current.currentTime = currentTime || 0;
                        } else {
                            playerRef.current.currentTime = 0
                        }
                    }
                }

                playerRef.current?.play()
            },
            pause() {
                playerRef.current?.pause()
            },
            toggle(data?: { audio: { src: string; type: string } | undefined, title: string }) {
                if (this.isPlaying(data)) {
                    actions.pause()
                } else {
                    actions.play(data, state?.meta?.audio?.src, state.currentTime)
                }
            },
            seekBy(amount: number) {
                if (playerRef.current) {
                    playerRef.current.currentTime += amount
                }
            },
            seek(time: number) {
                if (playerRef.current) {
                    playerRef.current.currentTime = time
                }
            },
            playbackRate(rate: number) {
                if (playerRef.current) {
                    playerRef.current.playbackRate = rate
                }
            },
            toggleMute() {
                dispatch({type: 'TOGGLE_MUTE'})
            },
            isPlaying(data?: { audio: { src: string; type: string } | undefined, title: string }) {
                if (!data?.audio || !playerRef.current) return state.playing
                if (playerRef.current.src.endsWith(data.audio.src)) return state.playing
                return false
            },
        }
    }, [state.currentTime, state?.meta?.audio?.src, state.playing])

    const api = useMemo(() => ({...state, ...actions}), [state, actions])

    return (
        <>
            <AudioPlayerContext.Provider value={api}>
                {children}
            </AudioPlayerContext.Provider>
            <audio
                ref={playerRef}
                onPlay={() => dispatch({type: 'PLAY'})}
                onPause={() => dispatch({type: 'PAUSE'})}
                onTimeUpdate={(event) => {
                    dispatch({
                        type: 'SET_CURRENT_TIME',
                        payload: Math.floor(event.currentTarget.currentTime),
                    })
                }}
                onDurationChange={(event) => {
                    dispatch({
                        type: 'SET_DURATION',
                        payload: Math.floor(event.currentTarget.duration),
                    })
                }}
                muted={state.muted}
            />
        </>
    )
}

export function useAudioPlayer(data?: { title: string, audio: { src: string, type: string } }): AudioPlayerContextType {
    const player = useContext(AudioPlayerContext)
    if (!player) {
        throw new Error('useAudioPlayer must be used within an AudioProvider')
    }

    return useMemo(
        () => ({
            ...player,
            play() {
                player.play()
            },
            toggle() {
                player.toggle(data)
            },
            get playing() {
                return player.isPlaying(data)
            },
        }),
        [player, data]
    )
}