import { blogPosts } from "./blogData";

const SITE_URL = "https://www.asowin.com";

export const toIsoDate = (value) => {
  if (!value) return undefined;
  const date = new Date(/^\d{4}-\d{2}-\d{2}/.test(value) ? value : `${value} UTC`);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
};

export default function PostSchema({ slug }) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  const url = `${SITE_URL}/blog/${slug}/`;
  const published = toIsoDate(post.publishedAt || post.date);
  const modified = toIsoDate(post.updatedAt) || published;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.heroImage ? `${SITE_URL}${post.heroImage}` : undefined,
      datePublished: published,
      dateModified: modified,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: post.author
        ? { "@type": "Person", name: post.author }
        : { "@type": "Organization", name: "ASOWin" },
      publisher: {
        "@type": "Organization",
        name: "ASOWin",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/ASOWin.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
  return (
    <>
      {schema.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
