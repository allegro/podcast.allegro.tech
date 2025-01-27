import {Fragment, useMemo} from 'react'
import Head from 'next/head'

import {useAudioPlayer} from '@/components/AudioProvider'
import {Container} from '@/components/Container'
import {FormattedDate} from '@/components/FormattedDate'
import podcasts from '@/data/podcasts.json'
import authors from '@/data/authors.json'
import {PlayButton} from '@/components/player/PlayButton'
import Image from 'next/image';
import {Feed, FeedOptions} from "feed";
import fs from "fs";

function EpisodeEntry({episode}: {
    episode: Episode
}) {
    const date = new Date(episode.published)

    const audioPlayerData: { title: string; audio: { src: string; type: string } } = useMemo(
        () => ({
            title: episode.title + " · " + episode.authors.map(({name}) => name).join(', '),
            audio: episode.audio
        }),
        [episode]
    )
    const player = useAudioPlayer(audioPlayerData)

    return (
        <article
            aria-labelledby={`episode-${episode.id}-title`}
            className="py-10 sm:py-12"
        >
            <Container>
                <div className="flex flex-col items-start">
                    <header className="flex flex-col">
                        <div className="flex items-center gap-6">
                            <PlayButton player={player} size="large"/>
                            <div className="flex flex-col">
                                <a id={episode.id} href={`#${episode.id}`}
                                   className="scroll-mt-20 mt-2 md:text-4xl text-2xl font-bold text-slate-900 dark:text-slate-100 text-balance">
                                    {episode.title}
                                </a>
                                <FormattedDate
                                    date={date}
                                    className="order-first font-mono text-sm leading-7 text-slate-500"
                                />
                                <button
                                    onClick={() => document.querySelector<HTMLDialogElement>(`#modal-${episode.host.replaceAll(".", "-")}`)?.showModal()}
                                    className="text-slate-700 dark:text-slate-300 mt-2 text-left">Host: {authors[episode.host as keyof typeof authors].name}</button>
                            </div>
                        </div>
                    </header>
                    <ul className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300 list-disc pl-5 p-2">
                        {episode.description.map((p) => <li className="mb-2" key={p}>{p}</li>)}
                    </ul>
                    <div className="flex flex-row flex-wrap w-full">
                        {(episode.authors).map(({id, name}) => (
                            <div className="flex items-center gap-4 not-format py-4 px-4" key={id}>
                                <Image className="mx-auto rounded-full ml-0 mr-1"
                                       src={`/authors/${id}.jpg`}
                                       alt={name}
                                       style={{alignSelf: 'flex-start'}}
                                       width={48}
                                       height={48}
                                />
                                <div className="text-center text-left mr-1 sm:w-auto">
                                    <h3 className="text-lg text-gray-900 dark:text-white">
                                        <button rel="author"
                                                onClick={() => document.querySelector<HTMLDialogElement>(`#modal-${id.replaceAll(".", "-")}`)?.showModal()}
                                                className="text-gray-900 dark:text-white">
                                            {name}
                                        </button>
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </article>
    )
}

export default function Home({episodes}: { episodes: Episode[] }) {
    const groupedBySeasons = Object.groupBy(episodes, (episode) => String(episode.season))
    return (
        <>
            <Head>
                <title>
                    allegro.tech podcast
                </title>
                <meta name="description"
                      content="W Allegro Tech uwielbiamy dzielić się wiedzą i robimy to na różne sposoby. Jednym z nich są nasze podcasty technologiczne, które są zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies stosowanych w Allegro. Zapraszamy do słuchania!"/>
                <meta property="og:site_name" content="allegro.tech"/>
                <meta property="og:title" content="allegro.tech podcast"/>
                <meta property="og:url" content="https://podcast.allegro.tech"/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content="https://podcast.allegro.tech/podcast-cover.png"/>
                <meta name="twitter:creator" content="@allegrotech"/>
                <meta property="og:description"
                      content="W Allegro Tech uwielbiamy dzielić się wiedzą i robimy to na różne sposoby. Jednym z nich są nasze podcasty technologiczne, które są zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies stosowanych w Allegro. Zapraszamy do słuchania!"/>
                <meta property="article:author" content=""/>
                <meta property="article:publisher" content="https://www.facebook.com/allegro.tech"/>
                <title itemProp="name">allegro.tech podcast</title>
                <script defer data-domain="podcast.allegro.tech" src="https://plausible.io/js/script.js"></script>
            </Head>
            <div className="pb-12 sm:pb-4 lg:pt-8">
                {Object.keys(groupedBySeasons).reverse().map((season) => {
                    const seasonEpisodes = groupedBySeasons[season];
                    return (
                        <Fragment key={season}>
                            <Container>
                                <a id={`sezon-${season}`} href={`#sezon-${season}`}
                                   className="scroll-mt-4 text-2xl font-bold leading-7 text-slate-900 dark:text-slate-100">
                                    Sezon {season}
                                </a>
                            </Container>
                            <div
                                className="divide-y divide-slate-200 dark:divide-slate-700 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100 dark:border-slate-700">
                                {seasonEpisodes?.map((episode) => <EpisodeEntry key={episode.id} episode={episode}/>)}
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </>
    )
}

export interface PodcastEpisode {
    date: string
    slug: string
    title: string
    authors: {
        id: string
        name: string
    }[]
    toc: string[]
    links?: { [key: string]: unknown }
    spotify: {
        url: string
    }
    season: number
    episode: number
    host: string
}

export interface Episode {
    id: string
    title: string
    published: string
    description: string[]
    audio: { src: string; type: string }
    host: string
    authors: { id: string; name: string }[]
    links?: { [key: string]: unknown }
    season: number
    episode: number
}

export async function getStaticProps(): Promise<{ props: { episodes: Episode[] } }> {
    const episodes: PodcastEpisode[] = podcasts.toReversed();
    const feedOptions: FeedOptions = {
        id: "podcast.allegro.tech",
        title: "allegro.tech podcast",
        description: "W Allegro Tech uwielbiamy dzielić się wiedzą i robimy to na różne sposoby. Jednym z nich są nasze podcasty technologiczne, które są zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies stosowanych w Allegro. Zapraszamy do słuchania!",
        copyright: 'Allegro'
    };
    const feed = new Feed(feedOptions);
    episodes.forEach((episode) => {
        feed.addItem({
            title: episode.title,
            id: episode.slug,
            link: `https://podcast.allegro.tech/#${episode.slug}`,
            description: episode.toc.join(""),
            date: new Date(episode.date),
        });
    });
    fs.writeFileSync('./public/feed.xml', feed.rss2());
    return {
        props: {
            episodes: episodes.map((episode) => ({
                    id: episode.slug,
                    title: episode.title,
                    published: episode.date,
                    description: episode.toc,
                    audio: {
                        src: `/audio/S${String(episode.season).padStart(2, '0')}-E${String(episode.episode).padStart(2, '0')}.mp3`,
                        type: 'audio/mpeg'
                    },
                    host: episode.host,
                    authors: episode.authors,
                    links: episode.links || {},
                    season: episode.season,
                    episode: episode.episode
                })
            ),
        }
    }
}