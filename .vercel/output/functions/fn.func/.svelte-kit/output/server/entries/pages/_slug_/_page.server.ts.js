import { b as blogPosts } from "../../../chunks/blog-posts.js";
import { e as error } from "../../../chunks/index2.js";
const prerender = false;
const load = async ({ params, url }) => {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw error(404, {
      message: "Post no encontrado"
    });
  }
  const relatedPosts = blogPosts.filter((p) => {
    if (p.slug === slug) return false;
    if (p.categories && post.categories) {
      const hasCommonCategory = p.categories.some(
        (cat) => post.categories.includes(cat)
      );
      return hasCommonCategory;
    }
    return true;
  }).slice(0, 2);
  if (relatedPosts.length < 2) {
    const additionalPosts = blogPosts.filter((p) => p.slug !== slug && !relatedPosts.includes(p)).slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }
  return {
    post,
    relatedPosts,
    meta: {
      title: `${post.title.rendered} | Reco Blog`,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
      canonical: `https://reco.chat/${post.slug}`,
      openGraph: {
        title: post.title.rendered,
        description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
        image: post.featured_media_url || "https://reco.chat/img/og-image.jpg",
        url: `https://reco.chat/${post.slug}`,
        type: "article"
      }
    }
  };
};
export {
  load,
  prerender
};
