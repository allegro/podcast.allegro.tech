import markdownIt from 'markdown-it';
const md = new markdownIt();




const SocialItem = ({ service, authorData }) => {
    const socialDict = {
        "twitter": "https://twitter.com/",
        "github": "https://github.com/",
        "linkedin": "https://www.linkedin.com/in/",
    }
    if (authorData[service]) {
        return (
            <a className="username" href={`${socialDict[service]}${authorData[service]}`}>
                <span className="social"><img src={`/img/social/${service}.svg`} alt={service} /></span>
            </a>
        )
    } else {
        return (
            <span></span>
        )
    }
}

const Author = ({ authorData }) => {
    return (
        <div className="m-card">
            <img src={`/img/authors/${authorData.author}.jpg`} alt={authorData.name} className="avatar" />
            <h3> {authorData.name}</h3>
            <SocialItem service="twitter" authorData={authorData} />
            <SocialItem service="github" authorData={authorData} />
            <SocialItem service="linkedin" authorData={authorData} />
            <div dangerouslySetInnerHTML={{ __html: md.render(authorData.bio) }} />
        </div>
    )
};


export default Author