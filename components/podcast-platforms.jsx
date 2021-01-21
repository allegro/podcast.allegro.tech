const PodcastPlatforms = ({ items = {} }) => {
    const dict = {
        "spotify": "Spotify",
        "applepodcasts": "Apple Podcasts",
        "googlepodcasts": "Google Podcasts",
        "soundcloud": "Soundcloud"
    };

    delete items.buzzsprout;  // used in embeded player

    return (
        <ul className="podcast-icons">
            {Object.entries(items).map((item, i) => (
                <li key={i}  className={`podcast-icon podcast-${item[0]}`} itemProp="url">
                    <a href={item[1]}>
                        <img alt={item[0]} src={`/podcast/img/podcast/icons/${item[0]}.svg`} />
                        {dict[item[0]]}         
                    </a>
                </li>
            ))}
        </ul>

    )

};


export default PodcastPlatforms