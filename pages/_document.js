import Document, { Html, Head, Main, NextScript } from 'next/document';
import Tracking from '../components/tracking';
export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="allegro.tech podcast feed"
            href="https://podcast.allegro.tech/feed.xml"
          />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/metrum.css" />
          <link rel="stylesheet" href="/css/blog.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto:400,300,100,700&amp;subset=latin-ext&amp;display=swap" rel="stylesheet" />
        </Head>
        <body>

          <header className="site-header">
            <div className="back-link">
              <a href="https://allegro.tech">
                <span>Back to </span>
                <img src="/img/allegro-tech.svg" alt="allegro.tech home" />
              </a>
            </div>
            <h1 className="logo">
              <a href="/"><img src="/img/allegro-tech-podcast.svg" alt="allegro.tech podcast" /></a>
            </h1>
            <nav className="site-nav">
              <ul className="site-navlist social-icons">
                <li>
                  <a className="social icon-link" href="https://facebook.com/allegro.tech" title="Facebook">
                    <img src="/img/social/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a className="social icon-link" href="https://twitter.com/allegrotech" title="Twitter">
                    <img src="/img/social/twitter.svg" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a className="social icon-link" href="http://meetup.com/allegrotech" title="Meetup Group">
                    <img src="/img/social/meetup.svg" alt="Meetup" />
                  </a>
                </li>
                <li>
                  <a className="social icon-link" href="/blog/feed.xml" title="RSS Feed">
                    <img src="/img/social/rss.svg" alt="RSS" />
                  </a>
                </li>
                <li>
                  <a className="social icon-link" href="https://github.com/allegro" title="Github">
                    <img src="/img/social/github.svg" alt="Github" />
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <Main />
          <footer className="site-footer">
            <div className="content" itemScope itemType="http://schema.org/Organization">
              <link itemProp="url" href="https://allegro.tech" />
              <link itemProp="logo" href="/img/logo-allegro-tech.png" />
              <div className="site-title">
                <span>Proudly built by <img src="/img/allegro-tech.svg" alt="allegro.tech" />
                  <a href="/authors/"> engineers</a>
                </span>
              </div>
            </div>
          </footer>

          <NextScript />
          <Tracking />
        </body>
      </Html>
    );
  }
}
