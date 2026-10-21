import { blogPosts } from "./blogData";
import { toIsoDate } from "./PostSchema";

export function postMetadata(slug, base) {
  const post = blogPosts.find((item) => item.slug === slug);
  const url = `/blog/${slug}/`;
  const image = post && (post.ogImage || post.heroImage);
  const images = image ? [{ url: image, alt: base.title }] : undefined;
  return {
    ...base,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "ASOWin",
      title: base.title,
      description: base.description,
      publishedTime: post ? toIsoDate(post.publishedAt || post.date) : undefined,
      authors: post && post.author ? [post.author] : undefined,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: base.title,
      description: base.description,
      images: image ? [image] : undefined,
      site: "@asowin",
    },
  };
}
