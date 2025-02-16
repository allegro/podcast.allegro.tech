import React from 'react'

interface MuteIconProps extends React.SVGProps<SVGSVGElement> {
    muted: boolean
}

function MuteIcon({muted, ...props}: MuteIconProps) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {muted ? (
                <>
                    <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"/>
                    <path d="M16 10L19 13" fill="none"/>
                    <path d="M19 10L16 13" fill="none"/>
                </>
            ) : (
                <>
                    <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"/>
                    <path d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17" fill="none"/>
                    <path
                        d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5"
                        fill="none"
                    />
                </>
            )}
        </svg>
    )
}

interface MuteButtonProps {
    player: {
        muted: boolean
        toggleMute: () => void
    }
}

export function MuteButton({player}: MuteButtonProps) {
    return (
        <button
            type="button"
            className="group relative rounded-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
            onClick={() => player.toggleMute()}
            aria-label={player.muted ? 'Włącz dźwięk' : 'Wyłącz dźwięk'}
        >
            <div className="absolute -inset-4 md:hidden"/>
            <MuteIcon
                muted={player.muted}
                className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
            />
        </button>
    )
}