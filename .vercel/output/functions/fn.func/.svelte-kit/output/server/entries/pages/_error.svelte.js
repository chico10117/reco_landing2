import { I as getContext, J as head, G as escape_html, K as store_get, M as unsubscribe_stores, F as pop, C as push } from "../../chunks/index.js";
import "../../chunks/client.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)} | Reco</title>`;
  });
  $$payload.out += `<div class="flex flex-col items-center justify-center min-h-[70vh] px-4"><h1 class="text-6xl font-bold text-blue-600 mb-4">${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p class="text-xl text-gray-600 mb-8">${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message || "Página no encontrada")}</p> <a href="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">Volver al inicio</a></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
