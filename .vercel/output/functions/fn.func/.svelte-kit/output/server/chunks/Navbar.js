import { Q as attr, N as attr_class, F as pop, C as push, T as stringify } from "./index.js";
import { B as Button } from "./button.js";
import { t as track } from "./analytics.js";
import "./client.js";
function Navbar($$payload, $$props) {
  push();
  let isRestaurantMenuOpen = false;
  function trackNavClick(label) {
    track("nav_click", { label });
  }
  $$payload.out += `<nav class="fixed w-full top-0 z-50 transition-all duration-300 bg-white svelte-1upyyw6"><div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"><div class="flex items-center justify-between w-full"><div class="flex items-center space-x-24"><a href="/" class="flex items-center"><img src="/RecoImage.svg" alt="Reco" class="h-8 w-auto object-contain" style="aspect-ratio: auto;"/></a> <div class="hidden lg:flex lg:items-center"><div class="flex items-center space-x-12"><div class="relative"><button type="button" class="text-black hover:text-gray-700 flex items-center space-x-2 px-2 text-base font-medium"${attr("aria-expanded", isRestaurantMenuOpen)}><span>Restaurantes</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${attr_class(`h-4 w-4 transition-transform duration-200 ${stringify("")}`)}><polyline points="6 9 12 15 18 9"></polyline></svg></button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <a href="/precios" class="text-black hover:text-gray-700 px-2 text-base font-medium">Precios</a> <a href="/posts" class="text-black hover:text-gray-700 px-2 text-base font-medium">Blog</a> <a href="/nosotros" class="text-black hover:text-gray-700 flex items-center space-x-2 px-2 text-base font-medium"><span>Nosotros</span></a> <a href="https://calendly.com/fernando-lqrb/15min" target="_blank" rel="noopener noreferrer" class="inline-block ml-28">`;
  Button($$payload, {
    variant: "default",
    class: "bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-xl px-5 py-2 whitespace-nowrap text-base",
    onclick: () => {
      trackNavClick("contact_sales");
    },
    children: ($$payload2) => {
      $$payload2.out += `<!---->Contáctanos`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a></div></div></div> <div class="flex items-center"><button class="text-black ml-4 lg:hidden"${attr("aria-label", "Abrir menú")}>`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
  }
  $$payload.out += `<!--]--></button></div></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav> <div class="h-16"></div>`;
  pop();
}
export {
  Navbar as N
};
