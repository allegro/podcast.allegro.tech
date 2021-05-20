import fs from 'fs';
import path from 'path';



function getData() {
    const dataDirectory = path.join(process.cwd(), '_data');
    const podcastData = path.join(dataDirectory, 'podcasts.json')
    const authorsData = path.join(dataDirectory, 'authors.json')

    const podcasts = JSON.parse(fs.readFileSync(podcastData, 'utf8'));
    const authors = JSON.parse(fs.readFileSync(authorsData, 'utf8'));

    return podcasts.map(podcast => {
        let authorData = authors[podcast.author];
        authorData.author = podcast.author;
        let hostData = authors[podcast.host];
        hostData.author = podcast.host;
        podcast.authorData = authorData;
        podcast.hostData = hostData;
        return podcast
    }).sort((a, b) => b.date.localeCompare(a.date))
}

const podcasts = getAllPodcasts();

export function getPodcastBySlug(slug) {
    return podcasts.filter(item => item.slug === slug)[0]
}

export function getAllSlugs() {
    return podcasts.map(item => item.slug)
}




export function getAllPodcasts() {
    return getData();
}