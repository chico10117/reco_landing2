// Estructura de datos para los posts del blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  categories: string[];
  language: 'es' | 'en';
  url: string;
}

// Datos de los posts para el blog
export const blogPosts: BlogPost[] = [
  {
    id: "pdf-menus",
    title: "Why PDF Menus Are Costing You Money",
    slug: "pdf-menus-are-costing-you-money",
    date: "Abril 28, 2025",
    excerpt: "Let's be honest: if your digital menu is still a PDF, you're not offering a better experience. You're offering a printout on a screen.",
    imageUrl: "/img/Background.svg",
    categories: ["Experiencia del Cliente", "Optimización del Servicio"],
    language: "en",
    url: "https://archive.reco.chat/pdf-menus-are-costing-you-money/"
  },
  {
    id: "menus-hosts",
    title: "Menus Are the New Hosts: Why First Impressions Start Here",
    slug: "menus-are-the-new-hosts",
    date: "Mayo 6, 2025",
    excerpt: "Before the first smile from a server, your guest meets the menu. It's the very first touchpoint in the modern dining experience. And more often than not, it happens through a QR code.",
    imageUrl: "/img/Background.svg",
    categories: ["Optimización del Servicio"],
    language: "en",
    url: "https://archive.reco.chat/menus-are-the-new-hosts/"
  },
  {
    id: "guests-decisions",
    title: "Guests Want Decisions, Not Options",
    slug: "guests-want-decisions",
    date: "Mayo 2, 2025",
    excerpt: "Cuando los clientes escanean el código QR, lo que realmente quieren es tomar decisiones informadas, no solo ver una lista de opciones sin contexto.",
    imageUrl: "/img/lastbksvg.svg",
    categories: ["Experiencia del Cliente"],
    language: "en",
    url: "https://archive.reco.chat/guests-want-decisions/"
  },
  {
    id: "reco-restaurants",
    title: "RECO for Restaurants: Smart Menu, Smarter Business",
    slug: "reco-for-restaurants",
    date: "Abril 15, 2025",
    excerpt: "Descubre cómo RECO transforma la experiencia de tus clientes y mejora la rentabilidad de tu negocio con su tecnología de menús inteligentes.",
    imageUrl: "/img/Background.svg",
    categories: ["Soluciones RECO"],
    language: "en",
    url: "https://archive.reco.chat/reco-for-restaurants/"
  },
  {
    id: "fidelizacion",
    title: "La importancia de la fidelización en la industria de hostelería",
    slug: "la-importancia-de-la-fidelizacion-en-la-industria-de-hosteleria",
    date: "Enero 29, 2025",
    excerpt: "En la industria de hostelería, fidelizar a tus clientes no solo es importante, es esencial. Los clientes recurrentes son los que realmente impulsan el crecimiento de tu negocio.",
    imageUrl: "/img/lastbksvg.svg",
    categories: ["Experiencia del Cliente"],
    language: "es",
    url: "https://archive.reco.chat/la-importancia-de-la-fidelizacion-en-la-industria-de-hosteleria/"
  },
  {
    id: "behind-menu",
    title: "Behind the Menu: The Psychology of Restaurant Ordering",
    slug: "behind-the-menu",
    date: "Febrero 12, 2025",
    excerpt: "Explore the psychology behind menu design and how it influences customer ordering behavior in restaurants.",
    imageUrl: "/img/Background.svg",
    categories: ["Psicología del Consumidor", "Diseño de Menús"],
    language: "en",
    url: "https://archive.reco.chat/behind-the-menu/"
  },
  {
    id: "rotacion-mesas",
    title: "Cómo optimizar la rotación de mesas en tu restaurante",
    slug: "como-optimizar-la-rotacion-de-mesas-en-tu-restaurante",
    date: "Diciembre 15, 2024",
    excerpt: "Descubre estrategias efectivas para mejorar la rotación de mesas en tu restaurante sin sacrificar la calidad del servicio ni la experiencia del cliente.",
    imageUrl: "/img/lastbksvg.svg",
    categories: ["Optimización del Servicio", "Gestión de Restaurantes"],
    language: "es",
    url: "https://archive.reco.chat/como-optimizar-la-rotacion-de-mesas-en-tu-restaurante/"
  },
  {
    id: "menu-visual",
    title: "La importancia de un menú visualmente atractivo en la era digital",
    slug: "la-importancia-de-un-menu-visualmente-atractivo-en-la-era-digital",
    date: "Noviembre 30, 2024",
    excerpt: "En la actualidad, un menú visualmente atractivo puede marcar la diferencia entre captar la atención del cliente o perderla en segundos.",
    imageUrl: "/img/Background.svg",
    categories: ["Diseño de Menús", "Marketing Digital"],
    language: "es",
    url: "http://archive.reco.chat/la-importancia-de-un-menu-visualmente-atractivo-en-la-era-digital/"
  },
  {
    id: "cartas-digitales",
    title: "Las cartas digitales típicas son obsoletas: Descubre por qué RECO es la evolución",
    slug: "las-cartas-digitales-tipicas-son-obsoletas-descubre-por-que-reco-es-la-evolucion",
    date: "Noviembre 15, 2024",
    excerpt: "Las cartas digitales tradicionales se han quedado anticuadas. Descubre cómo RECO evoluciona el concepto hacia un modelo interactivo y personalizado.",
    imageUrl: "/img/lastbksvg.svg",
    categories: ["Innovación", "Soluciones RECO"],
    language: "es",
    url: "https://archive.reco.chat/las-cartas-digitales-tipicas-son-obsoletas-descubre-por-que-reco-es-la-evolucion/"
  },
  {
    id: "clientes-regresen",
    title: "Cómo hacer que los clientes regresen a tu restaurante",
    slug: "como-hacer-que-los-clientes-regresen-a-tu-restaurante",
    date: "Octubre 22, 2024",
    excerpt: "Estrategias efectivas para fidelizar clientes y asegurar que vuelvan a elegir tu restaurante una y otra vez.",
    imageUrl: "/img/Background.svg",
    categories: ["Fidelización", "Experiencia del Cliente"],
    language: "es",
    url: "https://archive.reco.chat/como-hacer-que-los-clientes-regresen-a-tu-restaurante/"
  },
  {
    id: "espera-clientes",
    title: "Por qué los clientes odian esperar y cómo solucionarlo",
    slug: "por-que-los-clientes-odian-esperar-y-como-solucionarlo",
    date: "Septiembre 18, 2024",
    excerpt: "El tiempo de espera es uno de los mayores puntos de fricción en la experiencia del cliente. Descubre cómo RECO puede ayudarte a minimizarlo.",
    imageUrl: "/img/lastbksvg.svg",
    categories: ["Experiencia del Cliente", "Optimización del Servicio"],
    language: "es",
    url: "https://archive.reco.chat/por-que-los-clientes-odian-esperar-y-como-solucionarlo/"
  },
  {
    id: "aumentar-ticket",
    title: "5 estrategias para aumentar el ticket promedio en tu restaurante",
    slug: "5-estrategias-para-aumentar-el-ticket-promedio-en-tu-restaurante",
    date: "Septiembre 5, 2024",
    excerpt: "Incrementar el ticket promedio es clave para la rentabilidad de tu negocio. Conoce estas 5 estrategias infalibles para lograrlo.",
    imageUrl: "/img/Background.svg",
    categories: ["Estrategias de Ventas", "Rentabilidad"],
    language: "es",
    url: "https://archive.reco.chat/5-estrategias-para-aumentar-el-ticket-promedio-en-tu-restaurante/"
  },
  {
    id: "ia-restaurantes",
    title: "Inteligencia Artificial en restaurantes: el futuro está aquí",
    slug: "inteligencia-artificial-en-restaurantes-el-futuro-esta-aqui",
    date: "Agosto 20, 2024",
    excerpt: "La inteligencia artificial está revolucionando la industria gastronómica. Descubre cómo implementarla en tu restaurante para estar a la vanguardia.",
    imageUrl: "/img/lastbksvg.svg",
    categories: ["Innovación", "Tecnología"],
    language: "es",
    url: "https://archive.reco.chat/inteligencia-artificial-en-restaurantes-el-futuro-esta-aqui/"
  },
  {
    id: "digitalizar-carta",
    title: "Por qué digitalizar tu carta: los beneficios que nadie te contó",
    slug: "por-que-digitalizar-tu-carta-los-beneficios-que-nadie-te-conto",
    date: "Agosto 8, 2024",
    excerpt: "Digitalizar el menú de tu restaurante va más allá de seguir una tendencia. Conoce los beneficios ocultos que transformarán tu negocio.",
    imageUrl: "/img/Background.svg",
    categories: ["Transformación Digital", "Innovación"],
    language: "es",
    url: "http://archive.reco.chat/por-que-digitalizar-tu-carta-los-beneficios-que-nadie-te-conto/"
  }
];