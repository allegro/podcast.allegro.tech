import podcasts from '../_data/podcasts.json';
import authors from '../_data/authors.json';
function displayEpisode(podcast){
    return `S${(podcast.season + "").padStart(2, '0')}E${(podcast.episode + "").padStart(2, '0')}`
  }

function getPodcastImage(podcast){
    return podcast.season > 2 ? "/img/podcast-player/podcast.png" : "/img/podcast-player/podcast-old.png"
  }


function getData() {
    return podcasts.map(podcast => {
        let authorData = authors[podcast.author];
        authorData.author = podcast.author;
        let hostData = authors[podcast.host];
        hostData.author = podcast.host;
        podcast.authorData = authorData;
        podcast.hostData = hostData;
        return Object.assign(podcast, {
            podcastTitle : displayEpisode(podcast)  + " - " + podcast.name   + " - " +  podcast.title,
            audioSource : podcast.platforms.buzzsprout + ".mp3",
            podcastPlatforms : podcast.platforms,
            podcastCover : "/img/authors/" + podcast.author + ".jpg",
            podcastImage : getPodcastImage(podcast)
          })
    }).sort((a, b) => b.date.localeCompare(a.date))
}

const AllPodcasts = getAllPodcasts();

export function getPodcastBySlug(slug) {
    return AllPodcasts.filter(item => item.slug === slug)[0]
}

export function getAllSlugs() {
    return AllPodcasts.map(item => item.slug)
}


export function getAllPodcasts() {
    return getData();
}



