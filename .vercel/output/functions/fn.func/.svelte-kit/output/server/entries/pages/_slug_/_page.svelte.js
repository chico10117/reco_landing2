import { J as head, U as ensure_array_like, Q as attr, G as escape_html, T as stringify, F as pop, C as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { h as html } from "../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  const { data } = $$props;
  let post = data.post;
  let relatedPosts = data.relatedPosts;
  head($$payload, ($$payload2) => {
    if (post) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(post.title.rendered)} | Reco Blog</title>`;
      $$payload2.out += `<meta name="description"${attr("content", post.excerpt.rendered.replace(/<[^>]+>/g, ""))}/> <meta property="og:title"${attr("content", post.title.rendered)}/> <meta property="og:description"${attr("content", post.excerpt.rendered.replace(/<[^>]+>/g, ""))}/> <meta property="og:image"${attr("content", post.featured_media_url || post.image?.url || "")}/> <meta property="og:type" content="article"/> <meta property="og:url"${attr("content", `https://reco.chat/${post.slug}`)}/>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.title = `<title>Artículo no encontrado | Reco Blog</title>`;
      $$payload2.out += `<meta name="description" content="El artículo que estás buscando no está disponible o ha sido movido."/>`;
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16"><!---->`;
  {
    if (!post) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="text-center py-12"><h1 class="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1> <p class="text-lg text-gray-600 mb-8">El artículo que estás buscando no está disponible o ha sido movido.</p> <a href="/posts" class="text-blue-600 hover:underline">← Volver al blog</a></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array = ensure_array_like(relatedPosts);
      $$payload.out += `<div class="mb-8 rounded-xl overflow-hidden shadow-lg"><img${attr("src", `/${stringify(post.featured_media || "img/lastbksvg.svg")}`)}${attr("alt", post.title.rendered)} class="w-full h-64 object-cover"/></div> <article class="bg-white rounded-xl shadow-lg p-8"><header class="mb-8 border-b border-gray-200 pb-2"><h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">${html(post.title.rendered)}</h1> <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> <span>Por ${escape_html(post.author)}</span></div> <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <span>${escape_html(new Date(post.date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }))}</span></div> <div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>${escape_html(post.yoast_head_json?.twitter_misc?.["Tiempo de lectura"] || "2 minutos")}</span></div></div></header> <div class="prose lg:prose-xl">${html(post.content.rendered)}</div></article> <div class="mt-12"><h3 class="text-2xl font-bold text-gray-900 mb-6">Más artículos</h3> <div class="grid sm:grid-cols-2 gap-6"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let relatedPost = each_array[$$index];
        $$payload.out += `<a${attr("href", `/${relatedPost.slug}`)} class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"><h4 class="text-lg font-bold text-gray-900 mb-2">${html(relatedPost.title.rendered)}</h4> <p class="text-gray-600 line-clamp-2">${html(relatedPost.excerpt.rendered)}</p> <span class="inline-flex items-center mt-3 text-blue-600 font-medium">Leer más <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></a>`;
      }
      $$payload.out += `<!--]--></div></div> <div class="mt-10 text-center"><a href="/posts" class="inline-flex items-center text-blue-600 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Volver al blog</a></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
