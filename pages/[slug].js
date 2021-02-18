import formatDate from '../lib/format-date'
import markdownIt from 'markdown-it';
const md = new markdownIt();
import Player from "../components/player";
import Links from "../components/links";
import PodcastPlatforms from "../components/podcast-platforms"
import PodcastHeader from "../components/podcast-header"
import Author from "../components/author";
import Head from 'next/head';

import { getPodcastBySlug, getAllSlugs } from '../lib/api.js';


const podcastHost = {
    "author": "piotr.betkier",
    "name": "Piotr Betkier",
    "bio": "Software Engineer who loves building useful tools and resilient systems. Works in one of the technical platform teams, where he's responsible for common libraries and service discovery (Service Mesh). Conference speaker, host of Allegro Tech Podcast.",
    "twitter": "piotrbetkier"
}


export const config = {
    unstable_runtimeJS: false
  };

function Podcast({ podcast }) {


    return (
        <div className="desk">
            <section className="content">
                <Head>
                    <meta name="description" content="Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty obok tech bloga są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki będą zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies. Do usłyszenia!." />
                    <meta property="og:site_name" content="allegro.tech" />
                    <meta property="og:title" content={podcast.title} />
                    <meta property="og:url" content="https://podcast.allegro.tech/" />
                    <meta property="og:type" content="video.episode" />
                    <meta property="og:image" content="https://podcast.allegro.tech/img/podcast/podcast.png" />
                    <meta name="twitter:creator" content="@allegrotech" />
                    <meta property="og:description" content={podcast.toc.join(' ')} />
                    
                    <meta property="article:author" content={`${podcast.name} - allegro.tech podcast`} />
                    <meta property="article:publisher" content="https://www.facebook.com/allegro.tech" />
                    <title itemProp="name">{podcast.title} - {podcast.name} - allegro.tech</title>
                </Head>
                <div key={podcast.slug} className="m-card" itemType="http://schema.org/PodcastEpisode">
                    <time className="entry-date" dateTime={podcast.date}><span>{formatDate(podcast.date)}</span>
                    </time>
                    <h2 itemProp="headline"><span itemProp="name">#{podcast.id} - {podcast.title} - {podcast.name}</span></h2>


                    <div className="cover">
                        <Player link={podcast.platforms.buzzsprout} index={0} />
                        <div className="cover-card">
                            <div itemProp="description" className="podcast-description">
                                {podcast.desc}
                                {<ul className="podcast-toc">
                                    {podcast.toc.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>}
                            </div>
                        </div>
                        <PodcastPlatforms items={podcast.platforms} />
                    </div>
                </div>
                <Links items={podcast.links} />
                <section className="post-author" id="autor">
                    <Author authorData={podcast.authorData} />
                    <Author authorData={podcastHost} />
                </section>
            </section>
        </div>
    )
}





export async function getStaticPaths() {
    const slugs = getAllSlugs();
    const paramPaths = slugs.map(slug => {
        return { params: { slug: slug } }
    })
    return {
        paths: paramPaths,
        fallback: false
    };
}


export async function getStaticProps({ params }) {
    const podcast = getPodcastBySlug(params.slug)
    return {
        props: {
            podcast
        },
    }

}




export default Podcast