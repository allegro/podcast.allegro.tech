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

export const config = {
    unstable_runtimeJS: false
  };

function Podcast({ podcast }) {


    return (
        <div className="desk">
            <section className="content">
                <Head>
                   <meta property="og:site_name" content="allegro.tech" />
                    <meta property="og:title" content={podcast.title} />
                    <meta property="og:url" content={`https://podcast.allegro.tech/${podcast.slug}`} />
                    <meta property="og:type" content="video.episode" />
                    <meta property="og:image" content="https://podcast.allegro.tech/img/podcast/podcast.png" />
                    <meta name="twitter:creator" content="@allegrotech" />
                    <meta property="og:description" content={podcast.toc.join(' ')} />
                    
                    <meta property="article:author" content="https://www.facebook.com/allegro.tech" />
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
                    <Author authorData={podcast.hostData} />
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