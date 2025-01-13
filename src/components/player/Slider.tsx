import {RefObject, useRef} from 'react'
import {mergeProps, useFocusRing, useSlider, useSliderThumb, VisuallyHidden,} from 'react-aria'
import {SliderState, useSliderState} from 'react-stately'
import clsx from 'clsx'
import {parseTime} from './AudioPlayer'
import {SliderStateOptions} from "@react-stately/slider";
import {DOMAttributes} from "@react-types/shared";

function formatTime(seconds: number[], totalSeconds: number[] = seconds): string {
    const totalWithoutLeadingZeroes = totalSeconds.slice(
        totalSeconds.findIndex((x) => x !== 0)
    )
    return seconds
        .slice(seconds.length - totalWithoutLeadingZeroes.length)
        .map((x) => x.toString().padStart(2, '0'))
        .join(':')
}

interface ThumbProps {
    state: SliderState
    trackRef: RefObject<HTMLDivElement | null>
    focusProps: DOMAttributes
    isFocusVisible: boolean
    index: number
    onChangeStart?: () => void
}

function Thumb(props: ThumbProps) {
    const {state, trackRef, focusProps, isFocusVisible, index} = props
    const inputRef = useRef<HTMLInputElement>(null)
    const {thumbProps, inputProps} = useSliderThumb(
        {index, trackRef, inputRef},
        state
    )

    return (
        <div
            className="absolute top-1/2 -translate-x-1/2"
            style={{
                left: `${state.getThumbPercent(index) * 100}%`,
            }}
        >
            <div
                {...thumbProps}
                onMouseDown={(...args) => {
                    thumbProps.onMouseDown?.(...args)
                    props.onChangeStart?.()
                }}
                onPointerDown={(...args) => {
                    thumbProps.onPointerDown?.(...args)
                    props.onChangeStart?.()
                }}
                className={clsx(
                    'h-4 rounded-full',
                    isFocusVisible || state.isThumbDragging(index)
                        ? 'w-1.5 bg-red-900'
                        : 'w-1 bg-slate-700'
                )}
            >
                <VisuallyHidden>
                    <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
                </VisuallyHidden>
            </div>
        </div>
    )
}

export function Slider(props: SliderStateOptions<number[]> & { onChangeStart?: () => void }) {
    const trackRef = useRef<HTMLDivElement>(null)
    const state = useSliderState(props)
    const {groupProps, trackProps, labelProps, outputProps} = useSlider(
        props,
        state,
        trackRef
    )
    const {focusProps, isFocusVisible} = useFocusRing()

    const currentTime = parseTime(state.getThumbValue(0))
    const totalTime = parseTime(state.getThumbMaxValue(0))

    return (
        <div
            {...groupProps}
            className="absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative"
        >
            {props.label && (
                <label className="sr-only" {...labelProps}>
                    {props.label}
                </label>
            )}
            <div
                {...trackProps}
                onMouseDown={(...args) => {
                    trackProps.onMouseDown?.(...args)
                    props.onChangeStart?.()
                }}
                onPointerDown={(...args) => {
                    trackProps.onPointerDown?.(...args)
                    props.onChangeStart?.()
                }}
                ref={trackRef}
                className="relative w-full bg-orange-400 md:rounded-full"
            >
                <div
                    className={clsx(
                        'h-2 md:rounded-l-xl md:rounded-r-md',
                        isFocusVisible || state.isThumbDragging(0)
                            ? 'bg-slate-900'
                            : 'bg-slate-700'
                    )}
                    style={{
                        width:
                            state.getThumbValue(0) === 0
                                ? 0
                                : `calc(${state.getThumbPercent(0) * 100}% - ${
                                    isFocusVisible || state.isThumbDragging(0)
                                        ? '0.3125rem'
                                        : '0.25rem'
                                })`,
                    }}
                />
                <Thumb
                    index={0}
                    state={state}
                    trackRef={trackRef}
                    onChangeStart={props.onChangeStart}
                    focusProps={focusProps}
                    isFocusVisible={isFocusVisible}
                />
            </div>
            <div className="hidden items-center gap-2 md:flex">
                <output
                    {...outputProps}
                    aria-live="off"
                    className={clsx(
                        'hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block',
                        state.getThumbMaxValue(0) === 0 && 'opacity-0',
                        isFocusVisible || state.isThumbDragging(0)
                            ? 'bg-slate-100 text-slate-900'
                            : 'text-slate-500'
                    )}
                >
                    {formatTime(currentTime, totalTime)}
                </output>
                <span className="text-sm leading-6 text-slate-300" aria-hidden="true">
          /
        </span>
                <span
                    className={clsx(
                        'hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block',
                        state.getThumbMaxValue(0) === 0 && 'opacity-0'
                    )}
                >
          {formatTime(totalTime)}
        </span>
            </div>
        </div>
    )
}