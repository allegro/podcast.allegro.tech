import fs from 'fs'
import generateRss from '../lib/rss';
import formatDate from '../lib/format-date'

import Head from 'next/head'
import Player from "../components/player";

import PodcastPlatforms from "../components/podcast-platforms"
import PodcastHeader from "../components/podcast-header"

import {getAllPodcasts} from '../lib/api.js';



function Feed({ podcastsEnriched }) {
  return (
    <div>
      <Head>
      <meta name="description" content="Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty obok tech bloga są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki będą zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies. Do usłyszenia!." />
                <meta property="og:site_name" content="allegro.tech" />
                <meta property="og:title" content="podcast" />
                <meta property="og:url" content="https://podcast.allegro.tech/" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://allegro.tech/img/allegro-tech.png" />

                <meta name="twitter:creator" content="@allegrotech" />
                <meta property="og:description" content="" />
                <meta property="article:author" content="" />
                <meta property="article:publisher" content="https://www.facebook.com/allegro.tech" />
          <title itemProp="name">allegro.tech podcast</title>
      </Head>
      <PodcastHeader />
      <div className="desk">
        {podcastsEnriched.map((podcast, index, arr) => (
          <section className="content" key={index}>
            <div key={podcast.slug} className="m-card" itemType="http://schema.org/PodcastEpisode">
              <time className="entry-date" dateTime={podcast.date}><span>{formatDate(podcast.date)}</span>
              </time>
              <h2 itemProp="headline">
                <a itemProp="name" href={`${podcast.slug}`} className="post-link">#{podcast.id} - {podcast.title} - {podcast.name}</a>
             </h2>


              <div className="cover">
                <Player link={podcast.platforms.buzzsprout} index={index}/>
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
          </section>

        ))
        }
      </div>
    </div>
  )

}


export async function getStaticProps() {
  const podcastsEnriched = getAllPodcasts()
  fs.writeFileSync('./public/feed.xml', generateRss(podcastsEnriched));
  return {
    props: {
      podcastsEnriched
    },
  }

}



export default Feed
