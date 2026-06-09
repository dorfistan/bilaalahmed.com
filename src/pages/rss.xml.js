import rss from "@astrojs/rss";

const posts = [
  {
    title: "Hello World",
    description: "First post on the new site.",
    pubDate: new Date("2026-06-09"),
    link: "/blog/hello-world/",
  },
];

export const GET = () =>
  rss({
    title: "Bilaal Ahmed",
    description: "Product strategy, systems thinking, and building things.",
    site: "https://bilaalahmed.com",
    items: posts,
    customData: `<language>en-us</language>`,
  });