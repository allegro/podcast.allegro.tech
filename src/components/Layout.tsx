import React, {Fragment, ReactElement, useId} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {AudioPlayer} from '@/components/player/AudioPlayer'
import posterImage from '@/images/cover.svg'
import authors from "@/data/authors.json";

function randomBetween(min: number, max: number, seed = 1) {
    return () => {
        let rand = Math.sin(seed++) * 10000
        rand = rand - Math.floor(rand)
        return Math.floor(rand * (max - min + 1) + min)
    }
}

function Waveform(props: React.SVGProps<SVGSVGElement> & { className: string }) {
    const id = useId()
    const bars = {
        total: 100,
        width: 2,
        gap: 2,
        minHeight: 40,
        maxHeight: 100,
    }

    const barHeights = Array.from(
        {length: bars.total},
        randomBetween(bars.minHeight, bars.maxHeight)
    )

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="40%" stopColor="white"/>
                    <stop offset="100%" stopColor="black"/>
                </linearGradient>
                <linearGradient id={`${id}-gradient`}>
                    <stop offset="0%" stopColor="#FF5A00"/>
                    <stop offset="50%" stopColor="#FF7A33"/>
                    <stop offset="100%" stopColor="#FF9A66"/>
                </linearGradient>
                <mask id={`${id}-mask`}>
                    <rect width="100%" height="100%" fill={`url(#${id}-pattern)`}/>
                </mask>
                <pattern
                    id={`${id}-pattern`}
                    width={bars.total * bars.width + bars.total * bars.gap}
                    height="100%"
                    patternUnits="userSpaceOnUse"
                >
                    {Array.from({length: bars.total}, (_, index) => (
                        <rect
                            key={index}
                            width={bars.width}
                            height={`${barHeights[index]}%`}
                            x={bars.gap * (index + 1) + bars.width * index}
                            fill={`url(#${id}-fade)`}
                        />
                    ))}
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                fill={`url(#${id}-gradient)`}
                mask={`url(#${id}-mask)`}
                opacity="0.25"
            />
        </svg>
    )
}

function TinyWaveFormIcon({colors = [], ...props}: { colors?: string[], className: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
            <path
                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                className={colors[0]}
            />
            <path
                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                className={colors[1]}
            />
        </svg>
    )
}

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
            <path
                d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06"/>
        </svg>
    )
}

function ApplePodcastIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
            />
        </svg>
    )
}

function RSSIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
            />
        </svg>
    )
}

function AboutSection(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <section {...props}>
            <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900 dark:text-slate-100">
                <TinyWaveFormIcon
                    colors={['fill-violet-300', 'fill-orange-300']}
                    className="h-2.5 w-2.5"
                />
                <span className="ml-2.5">O nas</span>
            </h2>
            <p
                className='mt-2 text-base leading-7 text-slate-700 dark:text-slate-300'
            >
                W Allegro Tech uwielbiamy dzielić się wiedzą i robimy to na różne sposoby. 
                Jednym z nich są nasze podcasty technologiczne, które są zbiorem angażujących historii, 
                dobrych praktyk i inspirujących case-studies stosowanych w Allegro. 
                Zapraszamy do słuchania!
            </p>
        </section>
    )
}

export function Layout({children}: { children: ReactElement }) {
    return (
        <>
            <header
                className="bg-slate-50 dark:bg-slate-900 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
                <div
                    className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 dark:lg:border-slate-700 lg:px-8 lg:py-12 xl:px-12">
                    <Link
                        href="/"
                        className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 shadow-xl shadow-slate-200 dark:shadow-slate-800 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
                        aria-label="Strona główna"
                    >
                        <Image
                            className="w-full"
                            src={posterImage}
                            alt=""
                            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                            priority
                            width={382}
                            height={382}
                        />
                        <div
                            className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10 sm:rounded-xl lg:rounded-2xl"/>
                    </Link>
                    <AboutSection className="mt-12 hidden lg:block"/>
                    <section className="mt-10 lg:mt-12">
                        <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 dark:text-slate-100 lg:not-sr-only">
                            <TinyWaveFormIcon
                                colors={['fill-indigo-300', 'fill-blue-300']}
                                className="h-2.5 w-2.5"
                            />
                            <span className="ml-2.5">Słuchaj nas na</span>
                        </h2>
                        <div
                            className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 dark:from-slate-700/0 dark:via-slate-700 dark:to-slate-700/0 lg:hidden"/>
                        <ul
                            role="list"
                            className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 dark:text-slate-300 sm:gap-8 lg:flex-col lg:gap-4"
                        >
                            {[
                                {
                                    label: 'Spotify',
                                    Icon: SpotifyIcon,
                                    link: 'https://open.spotify.com/show/2rlbFoVg4eEVbrurrOkPHB'
                                },
                                {label: 'Apple Podcast', Icon: ApplePodcastIcon, link: 'https://podcasts.apple.com'},
                                {label: 'RSS Feed', Icon: RSSIcon, link: '/feed.xml'},
                            ].map(({label, Icon, link}) => (
                                <li key={label} className="flex">
                                    <Link
                                        href={link}
                                        className="group flex items-center"
                                        aria-label={label}
                                    >
                                        <Icon
                                            className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600 dark:fill-slate-500 dark:group-hover:fill-slate-400"/>
                                        <span className="hidden sm:ml-3 sm:block">{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </header>
            <main
                className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 lg:relative lg:pb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
                <Waveform className="left-0 top-0 h-20 w-full sticky"/>
                <div className="relative">{children}</div>
            </main>
            <footer
                className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
                    <AboutSection/>
                </div>
            </footer>
            <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120 dark:bg-orange-500">
                <AudioPlayer/>
            </div>
            {Object.entries(authors).map(([id, author]) => (
                <dialog id={`modal-${id.replaceAll(".", "-")}`} key={id}
                        className="overscroll-contain lg:max-w-lg p-6 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
                    <div className="flex flex-col">
                        <div className="flex justify-center p-2">
                            <Image className="mx-auto rounded-full sm:ml-0 sm:mr-1"
                                   src={`/authors/${id}.jpg`}
                                   alt={author.name}
                                   style={{width: 128, height: 128}}
                                   width={128}
                                   height={128}
                            />
                        </div>
                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{author.name}</p>

                    </div>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                        {author.bio}
                    </p>
                    <form method="dialog" className="mt-4 flex justify-end">
                        <button
                            style={{backgroundColor: '#FF5A00'}}
                            className="px-4 py-2 text-white rounded-md">Zamknij
                        </button>
                    </form>
                </dialog>
            ))}
        </>
    )
}
