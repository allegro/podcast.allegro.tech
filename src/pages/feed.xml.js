import rss from "@astrojs/rss";
import { podcasts } from "../lib/api.mjs";

export function get(){
  return rss({
    title: "allegro.tech podcast",
    description:
      "Misją Allegro Tech jest dzielenie się wiedzą oraz dobrymi praktykami. Podcasty obok tech bloga są naszym sposobem aby opowiadać o tym jakie wyznajemy wartości oraz w jakim kierunku zmierzamy. Kolejne odcinki będą zbiorem angażujących historii, dobrych praktyk i inspirujących case-studies. Do usłyszenia!.",
    site: import.meta.env.SITE,
    items: podcasts.map((item) => ({
      title: item.title,
      description: item.toc.join(" "),
      link: "/" + item.slug,
      pubDate: item.date,
    })),
  });
}
