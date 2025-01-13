import {useEffect, useRef, useState} from 'react'

import {useAudioPlayer} from '@/components/AudioProvider'
import {ForwardButton} from '@/components/player/ForwardButton'
import {MuteButton} from '@/components/player/MuteButton'
import {PlaybackRateButton} from '@/components/player/PlaybackRateButton'
import {PlayButton} from '@/components/player/PlayButton'
import {RewindButton} from '@/components/player/RewindButton'
import {Slider} from '@/components/player/Slider'

export function parseTime(seconds: number): [number, number, number] {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)
    seconds = seconds - hours * 3600 - minutes * 60
    return [hours, minutes, seconds]
}

function formatHumanTime(seconds: number): string {
    const [h, m, s] = parseTime(seconds)
    return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${m === 1 ? '' : 's'}, ${s} second${s === 1 ? '' : 's'}`
}

export function AudioPlayer() {
    const player = useAudioPlayer()

    const wasPlayingRef = useRef(false)

    const [currentTime, setCurrentTime] = useState<number | null>(player.currentTime)

    useEffect(() => {
        setCurrentTime(null)
    }, [player.currentTime])

    if (!player.meta) {
        return null
    }

    return (
        <div
            className="flex items-center gap-6 bg-white/90 dark:bg-slate-900 px-4 py-4 shadow shadow-slate-200/80 dark:shadow-slate-700/80 ring-1 ring-slate-900/5 dark:ring-slate-700/5 backdrop-blur-sm md:px-6">
            <div className="hidden md:block">
                <PlayButton player={player} size="medium"/>
            </div>
            <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
                <p className="truncate text-center text-sm font-bold leading-6 dark:text-white md:text-left">
                    {player.meta.title}
                </p>
                <div className="flex justify-between gap-6">
                    <div className="flex items-center md:hidden">
                        <MuteButton player={player}/>
                    </div>
                    <div className="flex flex-none items-center gap-4">
                        <RewindButton player={player}/>
                        <div className="md:hidden">
                            <PlayButton player={player} size="small"/>
                        </div>
                        <ForwardButton player={player}/>
                    </div>
                    <Slider
                        label="Current time"
                        maxValue={player.duration}
                        step={1}
                        value={[currentTime ?? player.currentTime]}
                        onChange={([v]) => setCurrentTime(v)}
                        onChangeEnd={([value]: number[]) => {
                            player.seek(value)
                            if (wasPlayingRef.current) {
                                player.play()
                            }
                        }}
                        numberFormatter={{format: formatHumanTime} as Intl.NumberFormat}
                        onChangeStart={() => {
                            wasPlayingRef.current = player.playing
                            player.pause()
                        }}
                    />
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <PlaybackRateButton player={player}/>
                        </div>
                        <div className="hidden items-center md:flex">
                            <MuteButton player={player}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}