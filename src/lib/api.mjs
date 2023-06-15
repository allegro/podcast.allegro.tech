import podcastsData from '../_data/podcasts.json';
import authors from '../_data/authors.json';

export const podcasts = podcastsData.map(entry => ({
  ...entry,
  hostData: {
    ...authors[entry.host],
    author: entry.host
  },
  authorsData: entry.authors.map((singleAuthor) => {
    const authorData = authors[singleAuthor.author]
    authorData.author = singleAuthor.author
    return authorData
  })
})).sort((a, b) => b.date.localeCompare(a.date));

function displayEpisode(podcast) {
  return `S${(podcast.season + "").padStart(2, '0')}E${(podcast.episode + "").padStart(2, '0')}`
}

function getPodcastImage(podcast) {
  return podcast.season > 2 ? "/img/podcast-player/podcast.png" : "/img/podcast-player/podcast-old.png"
}

function getPodcastCovers(authors) {
  return authors.map(({ author, _ }) => {
    return "/img/authors/" + author + ".jpg"
  }
  )
}

function getGuestNames(authors) {
  return authors.map(({ _, name }) => { return name }).join(", ")
}


export function getPodcastBySlug(slug) {
  return podcasts.filter(item => item.slug === slug)[0]
}

export function getAllSlugs() {
  return podcasts.map(item => item.slug)
}