export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1133.webp","1381.jpg","1382.png","1383.jpg","1384.jpg","1385.jpg","1387.jpg","1388.jpg","1389.jpg","1390.jpg","1391.jpg","1392.jpg","1434.jpg","1435.jpg","Andres.webp","Basque.png","Gratis1.jpg","HonestGreens.png","Isabel.webp","Marta.jpg","RecoImage.svg","RecoNombre.png","VIPS.png","Yelmo.svg","cinepolis.png","favicon.png","img/Background.svg","img/Basic.png","img/Emp.png","img/Emp2.png","img/Gratis2.png","img/RECOIMAGE.svg","img/emp1.png","img/hero.png","img/lastbksvg.svg","img/logo-foodbox.svg","img/logo-honest-greens.svg","img/logo-tgb.svg","img/logo-vips.svg","img/logo-yelmo.svg","img/og-image.jpg","img/og-image.svg","img/phone-mockup.png","img/phone-mockup.svg","img/phone-mockup.webp","img/placeholder.txt","img/reco-logo-clean.svg","img/reco-logo-new.svg","img/reco-logo.svg","img/team/abraham.jpeg","img/team/ana.jpg","img/team/carlos.jpg","img/team/favicon.png","img/team/fernando.jpeg","img/team/francisco.jpeg","img/team/jose.jpeg","img/team/laura.jpg","nosotros.html","precios/img/Gratis1.jpg","robots.txt","sitemap.xml"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".jpeg":"image/jpeg",".html":"text/html",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DjVj9fAf.js",app:"_app/immutable/entry/app.Bwavjl4P.js",imports:["_app/immutable/entry/start.DjVj9fAf.js","_app/immutable/chunks/Bq-07yf4.js","_app/immutable/chunks/UlTn_8lR.js","_app/immutable/chunks/QF1L1msK.js","_app/immutable/chunks/DfX-xxun.js","_app/immutable/entry/app.Bwavjl4P.js","_app/immutable/chunks/QF1L1msK.js","_app/immutable/chunks/ChcLEQ0r.js","_app/immutable/chunks/BhYac13y.js","_app/immutable/chunks/C7KQB0s1.js","_app/immutable/chunks/UlTn_8lR.js","_app/immutable/chunks/DewEHAxx.js","_app/immutable/chunks/CsZhiXzH.js","_app/immutable/chunks/D9sVT-gj.js","_app/immutable/chunks/Cw8EETGK.js","_app/immutable/chunks/D9oJOz2-.js","_app/immutable/chunks/DfX-xxun.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/__data.json","/contact","/cookies","/nosotros","/nosotros/__data.json","/posts","/posts/__data.json","/precios","/precios/__data.json","/privacy","/restaurantes","/restaurantes/__data.json","/restaurantes/autor","/restaurantes/fast-casual","/restaurantes/independiente","/restaurantes/multinacional","/restaurantes/nuevo","/restaurantes/restaurant-turist","/restaurantes/turistico","/terms"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
