const generateRssItem = (post) => `
  <item>
    <guid isPermaLink="true">https://podcast.allegro.tech/${post.slug}</guid>
    <title><![CDATA[${post.title}]]></title>
    <itunes:title><![CDATA[${post.title}]]></itunes:title>
    <itunes:author>${post.name}</itunes:author>
    <itunes:summary><![CDATA[${post.toc.join(' ')}]]></itunes:summary>
    <itunes:explicit>false</itunes:explicit>
    <enclosure url="${post.platforms.buzzsprout}.mp3" type="audio/mpeg" />
    <author>
    <name>${post.name}</name>
    </author>
    <link>https://podcast.allegro.tech/${post.slug}</link>
    <description><![CDATA[${post.toc.join(' ')}]]></description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts) => `
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:podcast="https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>allegro.tech - podcast</title>
      <link>https://allegro.tech/</link>
      <description>Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty obok tech bloga są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki będą zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies. Do usłyszenia!</description>
      <language>pl</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://allegro.tech/feed.xml" rel="self" type="application/rss+xml"/>
      <podcast:locked owner="hello@wiekszelogo.pl">yes</podcast:locked>
      <itunes:subtitle><![CDATA[Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty, obok bloga, są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki są zbiorem angażujących historii, dobrych prakt...]]></itunes:subtitle>
      <itunes:author>Powered by: Allegro Tech</itunes:author>
      <itunes:summary><![CDATA[Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty, obok bloga, są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki są zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies. Do usłyszenia!]]></itunes:summary>
      <itunes:type>episodic</itunes:type>
      <itunes:explicit>false</itunes:explicit>
      <description><![CDATA[Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty, obok bloga, są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki są zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies. Do usłyszenia!]]></description>
      <itunes:keywords>allegro tech, allegro, tech, technologia</itunes:keywords>
      <itunes:owner>
        <itunes:name>Powered by: Allegro Tech</itunes:name>
        <itunes:email>hello@wiekszelogo.pl</itunes:email>
      </itunes:owner>
      <image>
         <url>https://allegro.tech/img/podcast-cover.jpg</url>
         <title>Allegro Tech Podcast</title>
         <link>https://allegro.tech/</link>
      </image>
      <itunes:image href="https://allegro.tech/img/podcast-cover.jpg" />
      <itunes:category text="Technology" />


      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

export default generateRss;