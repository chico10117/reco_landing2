import { languageStore } from '$lib/stores/language.svelte';

export type Language = 'es' | 'en' | 'es-MX';

export const translations = {
	es: {
		// Navbar
		restaurants: 'Restaurantes',
		prices: 'Precios',
		blog: 'Blog',
		about: 'Nosotros',
		contact: 'Contáctanos',
		
		// Restaurant types for navbar dropdown
		'fast-casual': 'Cadenas de fast-casual',
		'autor': 'Restaurantes de autor / cocina creativas',
		'independiente': 'Restaurante independiente / familiar',
		'multinacional': 'Cadena multinacional / expansión internacional',
		'turistico': 'Restaurante en zona turística',
		'nuevo': 'Restaurante nuevo / primer emprendimiento sin presencia digital',
		
		// Hero Section
		hero_title_1: 'La mejor experiencia QR',
		hero_subtitle_1: 'Para tus clientes.',
		hero_subtitle_2: 'Para tus camareros.',
		hero_subtitle_3: 'Para tu negocio.',
		hero_description: 'La carta más inteligente que:',
		hero_feature_1: 'Sugiere platos personalizados',
		hero_feature_2: 'Resuelve dudas al instante',
		hero_feature_3: 'Te ayuda a conocer mejor a tus clientes',
		hero_feature_4: 'Todo desde el móvil, sin capacitaciones, sin complicaciones',
		hero_discover_btn: 'Descubre cómo funciona',
		hero_restaurant_btn: '¿Quieres que tu carta trabaje para ti?',
		hero_trust_text: 'Confían en nosotros:',
		hero_demo_btn: 'Crea tu carta demo acá',
		
		// WhatsApp message
		whatsapp_message: 'Hola, me gustaría obtener más información sobre Reco para mi restaurante.',
		
		// How It Works Section
		how_it_works_title_1: 'Para comensales:',
		how_it_works_title_2: 'pedir sin dudas, comer mejor',
		how_it_works_quote: '"Reco me salvó de pedir un plato con mariscos (¡alérgica!)"',
		how_it_works_benefit_1: 'Piden sin miedo a equivocarse',
		how_it_works_benefit_2: 'Pueden preguntar lo que quieran (y Reco responde)',
		how_it_works_benefit_3: 'Reciben sugerencias según su dieta, tiempo y bolsillo',
		
		// Benefits
		menus_in_language_title: 'Menús en tu idioma',
		menus_in_language_desc: 'Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que te sientas como en casa.',
		personalized_recommendations_title: 'Recomendaciones personalizadas',
		personalized_recommendations_desc: 'Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. Como tener un experto gastronómico personal.',
		mobile_ordering_title: 'Pide y paga desde el móvil',
		mobile_ordering_desc: 'Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, sin complicaciones, solo disfruta.',
		
		// Choose Restaurant Type Section
		restaurant_sells_title_1: '¿Tu carta vende',
		restaurant_sells_title_2: 'o solo decora?',
		restaurant_sells_quote: 'Una carta profesional no es solo bonita. Es clara, útil y estratégica.',
		restaurant_sells_benefit_1: 'Sabes qué platos realmente quieren tus clientes',
		restaurant_sells_benefit_2: 'Reco aprende y propone mejoras en tu carta',
		restaurant_sells_benefit_3: 'Vende como un camarero experto',
		restaurant_sells_benefit_4: 'Habla todos los idiomas',
		restaurant_sells_benefit_5: 'Se adapta al perfil de cada cliente',
		restaurant_sells_quote_2: 'No es diseño. Es ingeniería de carta.',
		restaurant_sells_testimonial: '"Reco convirtió mi carta en mi mejor vendedor."',
		restaurant_sells_testimonial_author: '- Andrés, Fonda Muñoz',
		
		// RestauranteSells testimonial
		for_restaurateurs_testimonial: '"Reco no reemplaza a mi equipo. Lo hace mejor."',
		for_restaurateurs_testimonial_author: '- Isabel, Casa Ramos',
		
		// Restaurant benefits for owners
		data_insights_title: 'Datos útiles al instante',
		data_insights_desc: 'Descubre qué platos triunfan, qué falla y cómo mejorar — todo desde la carta.',
		more_revenue_title: 'Más ingresos',
		more_revenue_desc: 'Reco recomienda platos que suben el ticket medio — sin que el staff diga una palabra.',
		less_pressure_title: 'Menos presión para el equipo',
		less_pressure_desc: 'Reco responde dudas frecuentes, sugiere maridajes y libera al personal para lo humano.',
		
		// Restaurant types
		tourist_restaurant_title: 'Restaurante turístico',
		tourist_restaurant_desc: 'Menús multilingües y recomendaciones adaptadas a cada idioma y cultura. Tus clientes se sienten como en casa.',
		gastrobar_title: 'Gastrobar o autor',
		gastrobar_desc: 'Destaca tus platos especiales y maridajes. Reco ayuda a tus clientes a descubrir tu propuesta gastronómica única.',
		fast_casual_title: 'Fast-casual o franquicia',
		fast_casual_desc: 'Agiliza los pedidos y maximiza las ventas. Reco sugiere complementos y optimiza el ticket medio automáticamente.',
		family_restaurant_title: 'Casa de comidas o menú del día',
		family_restaurant_desc: 'Gestiona fácilmente los menús diarios y sugerencias. Reco mantiene tu carta siempre actualizada y atractiva.',
		
		// Restaurante Sells Section  
		for_restaurateurs_title_1: 'Para ti, restaurador:',
		for_restaurateurs_title_2: 'más ventas, menos errores',
		for_restaurateurs_quote: '"Tu staff se enfoca en lo humano. Reco, en todo lo demás."',
		for_restaurateurs_benefit_1: 'Aumenta el ticket medio con recomendaciones inteligentes',
		for_restaurateurs_benefit_2: 'Reduce errores de pedido (Mejor experiencia del cliente = mejores reseñas)',
		for_restaurateurs_benefit_3: 'Funciona con un QR. Sin instalaciones, sin formaciones eternas',
		for_restaurateurs_pricing_link: 'Conoce los precios flexibles de Reco →',
		
		// Contact CTA
		contact_cta_title_1: 'Transforma la experiencia de tus clientes con',
		contact_cta_title_2: 'Reco',
		contact_cta_description: 'Potencia tu restaurante con recomendaciones inteligentes, pagos más rápidos y clientes más satisfechos. Descubre cómo Reco puede ayudarte a crecer.',
		contact_cta_btn: '¡Contáctanos!',
		free_trial_btn: 'Prueba gratis',
		
		// PRICING PAGE
		pricing_title: 'Planes y Precios',
		pricing_subtitle: 'Elige el plan que mejor se adapte a las necesidades de tu restaurante.',
		pricing_no_commitment: '✨ Sin compromisos • Cancela cuando quieras',
		
		// Basic Plan
		basic_plan_title: 'Básico',
		basic_plan_price: 'Gratis',
		basic_plan_badge: '🎉 Plan gratuito',
		basic_feature_digital_menu: 'Menú digital básico',
		basic_feature_dishes: 'Hasta 50 platos',
		basic_feature_email_support: 'Soporte por email',
		basic_plan_cta: 'Empezar ahora',
		
		// Pro Plan
		pro_plan_title: 'Pro',
		pro_plan_price: '249.99€',
		pro_plan_period: '/mes',
		pro_plan_badge: '🚀 Recomendado',
		pro_plan_popular: '⭐ Más Popular',
		pro_feature_basic_included: 'Todo lo del plan Básico',
		pro_feature_ai_recommendations: 'Recomendaciones IA',
		pro_feature_data_analysis: 'Análisis de datos',
		pro_feature_priority_support: 'Soporte prioritario',
		pro_plan_cta: 'Empezar',
		
		// Enterprise Plan
		enterprise_plan_title: 'Enterprise',
		enterprise_plan_price: 'Plan Empresarial',
		enterprise_plan_badge: '💼 Empresas',
		enterprise_feature_pro_included: 'Todo lo del plan Pro',
		enterprise_feature_custom_integration: 'Integración personalizada',
		enterprise_feature_24_7_support: 'Soporte 24/7',
		enterprise_plan_cta: 'Contactar ventas',
		
		// ABOUT PAGE (NOSOTROS)
		about_hero_badge: 'Equipo de clase mundial',
		about_hero_title: 'Conoce al equipo que está revolucionando la industria restaurantera',
		about_hero_description: 'Somos un equipo de expertos en tecnología, producto y negocio, unidos por la misión de transformar la experiencia gastronómica a través de la inteligencia artificial.',
		
		// Team roles
		ceo_cofounder: 'CEO & Co-fundador',
		cto_cofounder: 'CTO & Co-fundador',
		chief_revenue_officer: 'Chief Revenue Officer',
		senior_lead_developer: 'Senior Lead Developer',
		
		// Team bios
		jose_bio: 'Emprendedor y especialista en comunicación con experiencia liderando equipos de marketing para marcas de lujo y proyectos digitales en América Latina.',
		francisco_bio: 'Ingeniero electrónico con una década de experiencia liderando proyectos de hardware en Intel. Arquitecto de nuestra plataforma de IA y visionario de la digitalización del sector restaurantero.',
		fernando_bio: 'Más de 25 años de experiencia en revenue management, marketing y ventas en sectores Telco, Fintech y Hospitality. Experto en transformar desafíos operativos en historias de éxito.',
		abraham_bio: 'Diseñador de producto especializado en experiencia de usuario y estrategia digital. Lidera la evolución del Smart Menu con enfoque en usabilidad y eficiencia.',
		
		// Values section
		values_title: 'Nuestros valores',
		values_description: 'Con más de 45 años de experiencia combinada, nuestro equipo lidera la transformación digital del sector restaurantero con excelencia técnica y servicio incomparable.',
		
		innovation_title: 'Innovación Disruptiva',
		innovation_description: 'Pioneros en IA para restaurantes. Nuestro equipo técnico de élite desarrolla soluciones que revolucionan la industria y posicionan a nuestros clientes a la vanguardia.',
		excellence_title: 'Excelencia Comprobada',
		excellence_description: 'Aplicamos estándares de clase mundial para garantizar resultados excepcionales en cada implementación.',
		service_title: 'Servicio al Cliente',
		service_description: 'El mejor soporte del mercado. Respuesta inmediata, acompañamiento personalizado y un equipo dedicado que garantiza el éxito en cada una de nuestras soluciones.',
		
		// BLOG PAGE
		blog_title: 'Blog de RECO',
		blog_description: 'Descubre consejos, estrategias y análisis sobre cartas digitales, experiencia del cliente y optimización de restaurantes.',
		blog_newsletter_title: 'Quieres mantenerte al día con nuestras novedades?',
		blog_newsletter_description: 'Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre innovación en el sector restaurantero.',
		blog_newsletter_cta: 'Suscribirse ahora',
		
		// Individual blog post page
		post_not_found_title: 'Artículo no encontrado',
		post_not_found_description: 'El artículo que estás buscando no está disponible o ha sido movido.',
		post_back_to_blog: '← Volver al blog',
		post_by_author: 'Por',
		post_related_articles: 'Más artículos',
		post_read_more: 'Leer más',
		post_back_link: 'Volver al blog',
		
		// Blog section
		blog_articles_title: 'Artículos y recursos',
		blog_no_articles: 'No se encontraron artículos',
		blog_try_other_filters: 'Prueba con otros filtros',
		
		// RESTAURANTS PAGE
		restaurants_title: 'Restaurantes',
		restaurants_owner_title: '¿Tienes un restaurante?',
		restaurants_owner_description: 'Descubre cómo Reco puede ayudarte a mejorar la experiencia de tus comensales y aumentar tus ventas.',
		restaurants_feature_smart_menus: 'Menús digitales inteligentes y personalizados',
		restaurants_feature_ai_recommendations: 'Recomendaciones basadas en IA',
		restaurants_feature_data_analysis: 'Análisis de datos y tendencias',
		restaurants_demo_cta: 'Solicitar una demo',
		restaurants_trust_title: 'Restaurantes que confían en Reco',
		
		// FAST CASUAL PAGE
		fastcasual_hero_title_1: 'Convierte tu menú en un motor de ingresos.',
		fastcasual_hero_title_2: 'Sin apps. Sin fricción.',
		fastcasual_hero_subtitle: 'Optimiza cada pedido, cada turno y cada local con Reco.',
		fastcasual_info: 'Reco es la capa inteligente que potencia tus menús QR. Personaliza la experiencia, aumenta el ticket medio y aligera la operación.',
		
		fastcasual_problem_title: 'El problema',
		fastcasual_problem_desc_1: 'Dirigir una cadena fast-casual hoy es una batalla constante entre velocidad, eficiencia y experiencia. Tu equipo rota. Los clientes esperan inmediatez. Los márgenes son estrechos. Y aunque tienes datos... no siempre se convierten en decisiones de menú claras.',
		fastcasual_problem_desc_2: 'El menú es la herramienta que todos tus clientes tocan — pero que aún no te ayuda a vender mejor. Reco lo cambia.',
		
		fastcasual_solution_title: '¿Qué hace Reco?',
		fastcasual_feature_promote: 'Promociona automáticamente platos de alta rentabilidad.',
		fastcasual_feature_adjust: 'Ajusta la experiencia del menú por franja horaria o tipo de cliente.',
		fastcasual_feature_suggest: 'Sugiere cross-selling y up-selling personalizados.',
		fastcasual_feature_alert: 'Te alerta de qué platos están cayendo en ventas.',
		fastcasual_feature_relief: 'Alivia la presión de tus equipos en horas pico.',
		
		fastcasual_benefits_title: 'Beneficios concretos',
		fastcasual_benefit_ticket: '+10-20% en ticket medio gracias a recomendaciones inteligentes.',
		fastcasual_benefit_errors: 'Reducción del error humano en pedidos.',
		fastcasual_benefit_consistency: 'Consistencia en upselling, sin depender del staff.',
		fastcasual_benefit_data: 'Datos accionables sobre preferencias de cliente y desempeño de producto.',
		fastcasual_benefit_integration: 'Integración fluida: no requiere hardware ni app.',
		fastcasual_benefit_deployment: 'Despliegue y control centralizado para toda la cadena.',
		
		fastcasual_howto_title: '¿Cómo funciona?',
		fastcasual_step_upload: 'Subes tu menú a Reco.',
		fastcasual_step_access: 'Tus clientes acceden vía QR.',
		fastcasual_step_personalize: 'Reco personaliza las recomendaciones.',
		fastcasual_step_results: 'Tú ves resultados en un panel simple.',
		fastcasual_step_adjust: 'Ajustas el menú y las promociones.',
		
		fastcasual_cta_title: 'Más ingresos. Menos fricción. Más agilidad en cada local.',
		fastcasual_cta_description: 'Reco convierte tu menú en tu mejor vendedor, 24/7.',
		fastcasual_cta_demo: 'Solicita una demo para tu cadena fast-casual',
		fastcasual_cta_cases: 'Ver casos de éxito con cadenas como la tuya',
		
		// AUTOR RESTAURANT PAGE
		autor_hero_title_1: 'La mejor experiencia QR',
		autor_hero_title_2: 'Para tus camareros',
		autor_hero_subtitle: 'Reco es el camarero digital que apoya a tu equipo.',
		autor_info: 'Reco traduce, recomienda y promociona tu menú sin que tengas que imprimir nada ni entrenar a todo el staff.',
		
		autor_problem_title: 'El problema',
		autor_problem_desc_1: 'Staff que cambia. Turistas que no entienden la carta. Platos que quieres promocionar.',
		autor_problem_desc_2: 'Reco es la ayuda invisible que aligera tu trabajo.',
		
		autor_solution_title: '¿Qué hace Reco?',
		autor_feature_translate: 'Traduce automáticamente tu carta.',
		autor_feature_highlight: 'Resalta los platos que quieres impulsar.',
		autor_feature_answer: 'Responde dudas frecuentes de los clientes.',
		autor_feature_help_staff: 'Ayuda a un staff nuevo a vender como un veterano.',
		autor_feature_analytics: 'Te muestra qué platos están funcionando mejor.',
		
		autor_benefits_title: 'Beneficios concretos',
		autor_benefit_menu_time: 'Ahorra tiempo en actualizaciones de menú.',
		autor_benefit_order_errors: 'Evita errores de pedidos.',
		autor_benefit_tourist_experience: 'Mejora la experiencia de los turistas.',
		autor_benefit_staff_confidence: 'Da tranquilidad a tu staff.',
		autor_benefit_menu_decisions: 'Te ayuda a tomar decisiones sobre el menú.',
		autor_benefit_no_installation: 'No requiere instalación.',
		
		autor_howto_title: '¿Cómo funciona?',
		autor_step_upload: 'Subes tu menú a Reco.',
		autor_step_access: 'Tus clientes acceden por QR.',
		autor_step_show: 'Reco muestra tus platos destacados y responde dudas.',
		autor_step_control: 'Tú controlas qué resaltar cada día.',
		
		autor_cta_title: 'Deja que tus clientes disfruten más.',
		autor_cta_description: 'Deja que tu equipo trabaje mejor.',
		autor_cta_demo: 'Pide una demo para restaurantes de autor',
		autor_cta_cases: 'Ver cómo Reco ayuda a casas como la tuya',
		
		// INDEPENDIENTE RESTAURANT PAGE
		independiente_hero_title_1: 'Conserva el alma de tu restaurante.',
		independiente_hero_title_2: 'Deja que Reco te ayude con el resto.',
		independiente_hero_subtitle: 'Reco is the digital waiter that supports your team.',
		independiente_info: 'Reco translates, recommends and promotes your menu without having to print anything or train all the staff.',
		independiente_problem_title: 'The problem',
		independiente_problem_desc_1: 'Changing staff. Tourists who don\'t understand the menu. Dishes you want to promote.',
		independiente_problem_desc_2: 'Reco is the invisible help that lightens your work.',
		independiente_solution_title: 'What does Reco do?',
		independiente_feature_translate: 'Automatically translates your menu.',
		independiente_feature_highlight: 'Highlights the dishes you want to boost.',
		independiente_feature_answer: 'Answers customers\' frequent questions.',
		independiente_feature_help_staff: 'Helps new staff sell like a veteran.',
		independiente_feature_analytics: 'Shows you which dishes are performing better.',
		independiente_benefits_title: 'Concrete benefits',
		independiente_benefit_menu_time: 'Saves time on menu updates.',
		independiente_benefit_order_errors: 'Prevents order errors.',
		independiente_benefit_tourist_experience: 'Improves tourist experience.',
		independiente_benefit_staff_confidence: 'Gives your staff peace of mind.',
		independiente_benefit_menu_decisions: 'Helps you make menu decisions.',
		independiente_benefit_no_installation: 'No installation required.',
		independiente_howto_title: 'How does it work?',
		independiente_step_upload: 'You upload your menu to Reco.',
		independiente_step_access: 'Your customers access via QR.',
		independiente_step_show: 'Reco shows your featured dishes and answers questions.',
		independiente_step_control: 'You control what to highlight each day.',
		independiente_cta_title: 'Let your customers enjoy more.',
		independiente_cta_description: 'Let your team work better.',
		independiente_cta_demo: 'Request a demo for independent restaurants',
		independiente_cta_cases: 'See how Reco helps restaurants like yours',
		
		// MULTINACIONAL RESTAURANT PAGE
		multinacional_hero_title_1: 'Global consistency, local experience.',
		multinacional_hero_title_2: 'Reco adapts to each market.',
		multinacional_hero_subtitle: 'Reco is the digital waiter that supports your team.',
		multinacional_info: 'Reco translates, recommends and promotes your menu without having to print anything or train all the staff.',
		multinacional_problem_title: 'The problem',
		multinacional_problem_desc_1: 'Operations in multiple countries, rotating teams, customers from around the world.',
		multinacional_problem_desc_2: 'Reco is the invisible help that keeps the experience consistent and local.',
		multinacional_solution_title: 'What does Reco do?',
		multinacional_feature_translate: 'Automatically translates your menu.',
		multinacional_feature_highlight: 'Highlights the dishes you want to boost.',
		multinacional_feature_answer: 'Answers customers\' frequent questions.',
		multinacional_feature_help_staff: 'Helps new staff sell like a veteran.',
		multinacional_feature_analytics: 'Shows you which dishes are performing better.',
		multinacional_benefits_title: 'Concrete benefits',
		multinacional_benefit_menu_time: 'Saves time on menu updates.',
		multinacional_benefit_order_errors: 'Prevents order errors.',
		multinacional_benefit_tourist_experience: 'Improves tourist experience.',
		multinacional_benefit_staff_confidence: 'Gives your staff peace of mind.',
		multinacional_benefit_menu_decisions: 'Helps you make menu decisions.',
		multinacional_benefit_no_installation: 'No installation required.',
		multinacional_howto_title: 'How does it work?',
		multinacional_step_upload: 'You upload your menu to Reco.',
		multinacional_step_access: 'Your customers access via QR.',
		multinacional_step_show: 'Reco shows your featured dishes and answers questions.',
		multinacional_step_control: 'You control what to highlight each day.',
		multinacional_cta_title: 'Let your customers enjoy more.',
		multinacional_cta_description: 'Let your team work better.',
		multinacional_cta_demo: 'Request a demo for multinational restaurants',
		multinacional_cta_cases: 'See how Reco helps restaurants like yours',
		
		// TURISTICO RESTAURANT PAGE
		turistico_hero_title_1: 'Reco hace que cada turista entienda, aprecie…',
		turistico_hero_title_2: 'y recomiende tu cocina.',
		turistico_hero_subtitle: 'Sin que tú pierdas tu tiempo ni la esencia de tu restaurante.',
		turistico_info: 'Cuando el 75% de tus clientes son turistas, la experiencia empieza por un menú que se entiende.',
		
		turistico_problem_desc_1: 'Cada día recibes clientes de todo el mundo. Muchos no entienden bien la carta. A veces se frustran.',
		turistico_problem_desc_2: 'Reco hace que tu menú hable el idioma de tus clientes.',
		
		turistico_benefit_misunderstandings: 'Menos malentendidos.',
		turistico_benefit_high_margin: 'Aumento de venta en platos de margen alto.',
		turistico_benefit_reviews: 'Mejores reseñas online.',
		turistico_benefit_confident_staff: 'Staff más confiado.',
		turistico_benefit_simple_setup: 'Setup sencillo.',
		
		turistico_step_upload: 'Subimos tu carta a Reco.',
		turistico_step_access: 'Los clientes acceden vía QR.',
		turistico_step_suggest: 'Reco responde dudas y sugiere los platos.',
		turistico_step_change: 'Tú puedes cambiar lo que quieras.',
		
		turistico_cta_title: 'Haz que cada turista entienda el valor de tu cocina.',
		turistico_cta_description: 'Haz que tu equipo trabaje con más confianza.',
		turistico_cta_demo: 'Ver demo para restaurantes en zonas turísticas',
		turistico_cta_free: 'Empieza gratis y mide el impacto en tus reseñas',
		
		// NUEVO RESTAURANT PAGE
		nuevo_hero_title_1: 'Lanza tu restaurante con ventaja.',
		nuevo_hero_title_2: 'Reco te ayuda desde el primer día.',
		nuevo_hero_subtitle: 'Reco es el camarero digital que apoya a tu equipo.',
		nuevo_info: 'Reco traduce, recomienda y promociona tu menú sin que tengas que imprimir nada ni entrenar a todo el staff.',
		nuevo_problem_title: 'El problema',
		nuevo_problem_desc_1: 'Arrancar con equipo nuevo, carta nueva y clientes que no te conocen.',
		nuevo_problem_desc_2: 'Reco es la ayuda invisible que te da confianza y control desde el inicio.',
		nuevo_solution_title: '¿Qué hace Reco?',
		nuevo_feature_translate: 'Traduce automáticamente tu carta.',
		nuevo_feature_highlight: 'Resalta los platos que quieres impulsar.',
		nuevo_feature_answer: 'Responde dudas frecuentes de los clientes.',
		nuevo_feature_help_staff: 'Ayuda a un staff nuevo a vender como un veterano.',
		nuevo_feature_analytics: 'Te muestra qué platos están funcionando mejor.',
		nuevo_benefits_title: 'Beneficios concretos',
		nuevo_benefit_menu_time: 'Ahorra tiempo en actualizaciones de menú.',
		nuevo_benefit_order_errors: 'Evita errores de pedidos.',
		nuevo_benefit_tourist_experience: 'Mejora la experiencia de los turistas.',
		nuevo_benefit_staff_confidence: 'Da tranquilidad a tu staff.',
		nuevo_benefit_menu_decisions: 'Te ayuda a tomar decisiones sobre el menú.',
		nuevo_benefit_no_installation: 'No requiere instalación.',
		nuevo_howto_title: '¿Cómo funciona?',
		nuevo_step_upload: 'Subes tu menú a Reco.',
		nuevo_step_access: 'Tus clientes acceden por QR.',
		nuevo_step_show: 'Reco muestra tus platos destacados y responde dudas.',
		nuevo_step_control: 'Tú controlas qué resaltar cada día.',
		nuevo_cta_title: 'Deja que tus clientes disfruten más.',
		nuevo_cta_description: 'Deja que tu equipo trabaje mejor.',
		nuevo_cta_demo: 'Pide una demo para restaurantes nuevos',
		nuevo_cta_cases: 'Ver cómo Reco ayuda a casas como la tuya',
		
		// Page meta
		page_title: 'Reco: Carta Inteligente',
		page_description: 'Descubre Reco, la carta inteligente con IA que revoluciona la experiencia en restaurantes. Ayuda a tus clientes a pedir mejor y disfrutar más!',
		
		// Footer
		footer_description: 'Transformando la experiencia gastronómica con inteligencia artificial.',
		footer_company: 'Empresa',
		footer_products: 'Productos',
		footer_legal: 'Legal',
		footer_privacy: 'Privacidad',
		footer_terms: 'Términos',
		footer_cookies: 'Cookies',
		footer_rights: 'Todos los derechos reservados.',
		partners_trust_text: 'Empresas que confían en Reco',
		
		// Common
		menu: 'Menú',
		close: 'Cerrar',
		open: 'Abrir',
		remote: 'Remoto',
		view_linkedin: 'Ver perfil de LinkedIn de',
		
		// Contact page
		contact_title: 'Contact',
		contact_redirecting: 'Redirecting to Calendly to schedule a meeting...',
		contact_schedule_meeting: 'Schedule a meeting',
		contact_auto_redirect: 'If you are not redirected automatically, click the button above.',
		
		// Privacy page
		privacy_title: 'Privacy Policy',
		
		// Terms page
		terms_title: 'Terms of Service',
		
		// Cookies page
		cookies_title: 'Política de Cookies',
		cookies_meta_description: 'Gestiona tus preferencias de cookies para el sitio web de Reco',
		cookies_settings_title: 'Configuración de Cookies',
		cookies_settings_subtitle: 'Gestiona tus preferencias de cookies y privacidad para reco.chat',
		cookies_current_status: 'Estado actual:',
		cookies_consent_granted: 'Consentimiento otorgado el',
		cookies_no_preferences: 'No has configurado tus preferencias de cookies aún.',
		cookies_configure_below: 'Configúralas a continuación para mejorar tu experiencia.',
		cookies_essential_name: 'Cookies Esenciales',
		cookies_essential_description: 'Estas cookies son necesarias para el funcionamiento básico del sitio web.',
		cookies_essential_examples: 'Preferencias de cookies, estado de sesión, seguridad',
		cookies_analytics_name: 'Cookies de Análisis',
		cookies_analytics_description: 'Nos ayudan a entender cómo interactúas con nuestro sitio web.',
		cookies_analytics_examples: 'Google Analytics, análisis de rendimiento',
		cookies_marketing_name: 'Cookies de Marketing',
		cookies_marketing_description: 'Se utilizan para mostrar anuncios relevantes y campañas de marketing.',
		cookies_marketing_examples: 'Cookies de publicidad, seguimiento de conversiones',
		cookies_required_label: 'Obligatorias',
		cookies_examples_label: 'Ejemplos:',
		cookies_save_preferences: 'Guardar Preferencias',
		cookies_reset: 'Restablecer',
		cookies_delete_all: 'Eliminar Todas las Preferencias',
		cookies_preferences_saved: 'Preferencias guardadas correctamente',
		cookies_confirm_delete: '¿Estás seguro de que quieres eliminar todas las preferencias de cookies? Esto requerirá que vuelvas a dar tu consentimiento.',
		cookies_additional_info: 'Información Adicional',
		cookies_what_are_title: '¿Qué son las cookies?',
		cookies_what_are_description: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia de navegación.',
		cookies_how_use_title: '¿Cómo utilizamos tus datos?',
		cookies_how_use_description: 'Solo utilizamos datos agregados y anónimos para mejorar nuestro sitio web. Nunca compartimos información personal con terceros sin tu consentimiento explícito.',
		cookies_your_rights_title: 'Tus derechos',
		cookies_your_rights_description: 'Puedes cambiar tus preferencias en cualquier momento visitando esta página. También puedes eliminar todas las cookies desde la configuración de tu navegador.',
		cookies_more_info: 'Para más información, consulta nuestra',
		cookies_and: ' y nuestros ',
		
		// BLOG POST TRANSLATIONS
		blog_post_1423_title: '¿Cómo vender con tu carta sin mover un dedo?',
		blog_post_1423_excerpt: 'En la mayoría de los restaurantes, la carta solo hace una cosa: enumera los platos. No sugiere. No ofrece más ventas. No ayuda a los clientes a decidir.',
		blog_post_1412_title: 'Las cartas son las nuevas anfitriones: Por qué las primeras impresiones empiezan aquí',
		blog_post_1412_excerpt: 'Antes de la primera sonrisa del camarero, antes del pedido de bebidas, antes de que el agua llegue a la mesa, su invitado conoce la carta.',
		blog_post_1408_title: 'Los huéspedes no quieren datos. Quieren decisiones.',
		blog_post_1408_excerpt: 'Pedir comida a domicilio debería ser fácil. Pero la mayoría de las cartas parecen hojas de cálculo. Listas interminables.',
		blog_post_1397_title: '¿Por qué las cartas PDF te cuestan dinero?',
		blog_post_1397_excerpt: 'Si tu carta digital todavía está en formato PDF, no está ofreciendo una mejor experiencia. Estás ofreciendo una impresión en una pantalla.',
		blog_post_1411_title: 'Que hace Reco para los dueños de restaurantes',
		blog_post_1411_excerpt: 'Reco no es solo una carta digital. Es una herramienta que ayuda a los dueños de restaurantes a vender más y mejor.',
		blog_post_1421_title: 'De los antojos a las conversaciones: cómo la carta de Reco se creó para hablar',
		blog_post_1421_excerpt: 'La carta de Reco fue diseñada para entender lo que quieres y guiarte hacia la mejor decisión.',
		blog_post_1350_title: 'La importancia de la fidelización en la industria de hostelería',
		blog_post_1350_excerpt: 'La fidelización de clientes es clave para el éxito de cualquier restaurante. Descubre cómo lograrlo.',
		blog_post_1365_title: '¿Cómo optimizar la rotación de mesas en tu restaurante?',
		blog_post_1365_excerpt: 'La rotación de mesas es fundamental para maximizar los ingresos de tu restaurante.',
		blog_post_1319_title: 'La importancia de un menú visualmente atractivo en la era digital',
		blog_post_1319_excerpt: 'En la era digital, la presentación visual de tu menú es más importante que nunca.',
		blog_post_1422_title: 'Las cartas digitales típicas son obsoletas',
		blog_post_1422_excerpt: 'Las cartas digitales tradicionales ya no son suficientes para satisfacer las expectativas de los clientes.',
		blog_post_895_title: '¿Cómo hacer que los clientes regresen a tu restaurante?',
		blog_post_895_excerpt: 'La retención de clientes es crucial para el éxito a largo plazo de tu restaurante.',
		blog_post_961_title: '¿Por qué los clientes odian esperar y cómo solucionarlo?',
		blog_post_961_excerpt: 'Los tiempos de espera largos pueden arruinar la experiencia del cliente en tu restaurante.',
		blog_post_893_title: '5 estrategias para aumentar el ticket promedio en tu restaurante',
		blog_post_893_excerpt: 'Aumentar el ticket promedio es una de las formas más efectivas de incrementar tus ingresos.',
		blog_post_1145_title: 'Inteligencia Artificial en restaurantes: El futuro está aquí',
		blog_post_1145_excerpt: 'La IA está transformando la industria restaurantera de maneras que antes parecían imposibles.',
		blog_post_1146_title: '¿Por qué usar una Carta Inteligente? Los beneficios que nadie te contó',
		blog_post_1146_excerpt: 'Descubre las ventajas ocultas de implementar una carta inteligente en tu restaurante.',
		blog_post_890_title: 'La importancia de un menú visualmente atractivo en la era digital',
		blog_post_890_excerpt: 'El diseño de un menú es más que simplemente listar los platos y precios. En la era digital, tu menú es una herramienta clave.',
		blog_post_962_title: 'Las cartas digitales típicas son obsoletas',
		blog_post_962_excerpt: 'Las cartas digitales tradicionales ya no son suficientes para satisfacer las expectativas de los clientes.',
		blog_post_888_title: '¿Cómo hacer que los clientes regresen a tu restaurante?',
		blog_post_888_excerpt: 'La retención de clientes es crucial para el éxito a largo plazo de tu restaurante.',
		blog_post_994_title: 'Inteligencia Artificial en restaurantes: El futuro está aquí',
		blog_post_994_excerpt: 'La IA está transformando la industria restaurantera de maneras que antes parecían imposibles.',
		blog_post_886_title: '¿Por qué usar una Carta Inteligente? Los beneficios que nadie te contó',
		blog_post_886_excerpt: 'Descubre las ventajas ocultas de implementar una carta inteligente en tu restaurante.',
		blog_post_884_title: 'La importancia de la fidelización en la industria de hostelería',
		blog_post_884_excerpt: 'La fidelización de clientes es clave para el éxito de cualquier restaurante.',
		blog_post_882_title: '¿Cómo optimizar la rotación de mesas en tu restaurante?',
		blog_post_882_excerpt: 'La rotación de mesas es fundamental para maximizar los ingresos de tu restaurante.',
		blog_post_871_title: '5 estrategias para aumentar el ticket promedio en tu restaurante',
		blog_post_871_excerpt: 'Aumentar el ticket promedio es una de las formas más efectivas de incrementar tus ingresos.',
		blog_post_869_title: 'La importancia de un menú visualmente atractivo en la era digital',
		blog_post_869_excerpt: 'En la era digital, la presentación visual de tu menú es más importante que nunca.',
		blog_post_940_title: '¿Por qué los clientes odian esperar y cómo solucionarlo?',
		blog_post_940_excerpt: 'Los tiempos de espera largos pueden arruinar la experiencia del cliente en tu restaurante.',
		blog_post_944_title: 'Las cartas digitales típicas son obsoletas',
		blog_post_944_excerpt: 'Las cartas digitales tradicionales ya no son suficientes para satisfacer las expectativas de los clientes.',
		blog_post_945_title: '¿Cómo hacer que los clientes regresen a tu restaurante?',
		blog_post_945_excerpt: 'La retención de clientes es crucial para el éxito a largo plazo de tu restaurante.',
		blog_post_947_title: 'Inteligencia Artificial en restaurantes: El futuro está aquí',
		blog_post_947_excerpt: 'La IA está transformando la industria restaurantera de maneras que antes parecían imposibles.'
	},
	en: {
		// Navbar
		restaurants: 'Restaurants',
		prices: 'Pricing',
		blog: 'Blog',
		about: 'About Us',
		contact: 'Contact Us',
		
		// Restaurant types for navbar dropdown
		'fast-casual': 'Fast-casual chains',
		'autor': 'Fine dining / creative cuisine restaurants',
		'independiente': 'Independent / family restaurants',
		'multinacional': 'Multinational chain / international expansion',
		'turistico': 'Tourist area restaurants',
		'nuevo': 'New restaurant / first venture without digital presence',
		
		// Hero Section
		hero_title_1: 'The best QR experience',
		hero_subtitle_1: 'For your customers.',
		hero_subtitle_2: 'For your waiters.',
		hero_subtitle_3: 'For your business.',
		hero_description: 'The smartest menu that:',
		hero_feature_1: 'Suggests personalized dishes',
		hero_feature_2: 'Resolves doubts instantly',
		hero_feature_3: 'Helps you know your customers better',
		hero_feature_4: 'Everything from mobile, no training, no complications',
		hero_discover_btn: 'Discover how it works',
		hero_restaurant_btn: 'Want your menu to work for you?',
		hero_trust_text: 'They trust us:',
		hero_demo_btn: 'Create your demo menu here',
		
		// WhatsApp message
		whatsapp_message: 'Hello, I would like to get more information about Reco for my restaurant.',
		
		// How It Works Section
		how_it_works_title_1: 'For diners:',
		how_it_works_title_2: 'order without doubts, eat better',
		how_it_works_quote: '"Reco saved me from ordering a seafood dish (allergic!)"',
		how_it_works_benefit_1: 'They order without fear of making mistakes',
		how_it_works_benefit_2: 'They can ask whatever they want (and Reco responds)',
		how_it_works_benefit_3: 'They receive suggestions based on their diet, time and budget',
		
		// Benefits
		menus_in_language_title: 'Menus in your language',
		menus_in_language_desc: 'View the menu in your preferred language, without complications. Automatically adapted so you feel at home.',
		personalized_recommendations_title: 'Personalized recommendations',
		personalized_recommendations_desc: 'Get intelligent recommendations based on your preferences, diet, and budget. Like having a personal gastronomic expert.',
		mobile_ordering_title: 'Order and pay from mobile',
		mobile_ordering_desc: 'Simplify your experience by paying directly from your device. No waiting, no complications, just enjoy.',
		
		// Choose Restaurant Type Section
		restaurant_sells_title_1: 'Does your menu sell',
		restaurant_sells_title_2: 'or just decorate?',
		restaurant_sells_quote: 'A professional menu is not just beautiful. It\'s clear, useful and strategic.',
		restaurant_sells_benefit_1: 'You know what dishes your customers really want',
		restaurant_sells_benefit_2: 'Reco learns and proposes improvements to your menu',
		restaurant_sells_benefit_3: 'Sells like an expert waiter',
		restaurant_sells_benefit_4: 'Speaks all languages',
		restaurant_sells_benefit_5: 'Adapts to each customer\'s profile',
		restaurant_sells_quote_2: 'It\'s not design. It\'s menu engineering.',
		restaurant_sells_testimonial: '"Reco turned my menu into my best salesperson."',
		restaurant_sells_testimonial_author: '- Andrés, Fonda Muñoz',
		
		// RestauranteSells testimonial
		for_restaurateurs_testimonial: '"Reco doesn\'t replace my team. It makes them better."',
		for_restaurateurs_testimonial_author: '- Isabel, Casa Ramos',
		
		// Restaurant benefits for owners
		data_insights_title: 'Useful data instantly',
		data_insights_desc: 'Discover which dishes succeed, what fails and how to improve — all from the menu.',
		more_revenue_title: 'More revenue',
		more_revenue_desc: 'Reco recommends dishes that increase the average ticket — without staff saying a word.',
		less_pressure_title: 'Less pressure for the team',
		less_pressure_desc: 'Reco answers frequent questions, suggests pairings and frees staff for the human side.',
		
		// Restaurant types
		tourist_restaurant_title: 'Tourist restaurant',
		tourist_restaurant_desc: 'Multilingual menus and recommendations adapted to each language and culture. Your customers feel at home.',
		gastrobar_title: 'Gastrobar or fine dining',
		gastrobar_desc: 'Highlight your special dishes and pairings. Reco helps your customers discover your unique gastronomic proposal.',
		fast_casual_title: 'Fast-casual or franchise',
		fast_casual_desc: 'Speed up orders and maximize sales. Reco suggests complements and optimizes average ticket automatically.',
		family_restaurant_title: 'Family restaurant or daily menu',
		family_restaurant_desc: 'Easily manage daily menus and suggestions. Reco keeps your menu always updated and attractive.',
		
		// Restaurante Sells Section
		for_restaurateurs_title_1: 'For you, restaurateur:',
		for_restaurateurs_title_2: 'more sales, fewer errors',
		for_restaurateurs_quote: '"Your staff focuses on the human side. Reco, on everything else."',
		for_restaurateurs_benefit_1: 'Increases average ticket with intelligent recommendations',
		for_restaurateurs_benefit_2: 'Reduces order errors (Better customer experience = better reviews)',
		for_restaurateurs_benefit_3: 'Works with a QR code. No installations, no endless training',
		for_restaurateurs_pricing_link: 'Learn about Reco\'s flexible pricing →',
		
		// Contact CTA
		contact_cta_title_1: 'Transform your customers\' experience with',
		contact_cta_title_2: 'Reco',
		contact_cta_description: 'Power your restaurant with intelligent recommendations, faster payments and more satisfied customers. Discover how Reco can help you grow.',
		contact_cta_btn: 'Contact us!',
		free_trial_btn: 'Try for free',
		
		// PRICING PAGE
		pricing_title: 'Plans & Pricing',
		pricing_subtitle: 'Choose the plan that best fits your restaurant\'s needs.',
		pricing_no_commitment: '✨ No commitments • Cancel anytime',
		
		// Basic Plan
		basic_plan_title: 'Basic',
		basic_plan_price: 'Free',
		basic_plan_badge: '🎉 Free plan',
		basic_feature_digital_menu: 'Basic digital menu',
		basic_feature_dishes: 'Up to 50 dishes',
		basic_feature_email_support: 'Email support',
		basic_plan_cta: 'Start now',
		
		// Pro Plan
		pro_plan_title: 'Pro',
		pro_plan_price: '€249.99',
		pro_plan_period: '/month',
		pro_plan_badge: '🚀 Recommended',
		pro_plan_popular: '⭐ Most Popular',
		pro_feature_basic_included: 'Everything in Basic plan',
		pro_feature_ai_recommendations: 'AI recommendations',
		pro_feature_data_analysis: 'Data analysis',
		pro_feature_priority_support: 'Priority support',
		pro_plan_cta: 'Get started',
		
		// Enterprise Plan
		enterprise_plan_title: 'Enterprise',
		enterprise_plan_price: 'Enterprise Plan',
		enterprise_plan_badge: '💼 Business',
		enterprise_feature_pro_included: 'Everything in Pro plan',
		enterprise_feature_custom_integration: 'Custom integration',
		enterprise_feature_24_7_support: '24/7 support',
		enterprise_plan_cta: 'Contact sales',
		
		// ABOUT PAGE (NOSOTROS)
		about_hero_badge: 'World-class team',
		about_hero_title: 'Meet the team that\'s revolutionizing the restaurant industry',
		about_hero_description: 'We are a team of experts in technology, product and business, united by the mission to transform the gastronomic experience through artificial intelligence.',
		
		// Team roles
		ceo_cofounder: 'CEO & Co-founder',
		cto_cofounder: 'CTO & Co-founder',
		chief_revenue_officer: 'Chief Revenue Officer',
		senior_lead_developer: 'Senior Lead Developer',
		
		// Team bios
		jose_bio: 'Entrepreneur and communication specialist with experience leading marketing teams for luxury brands and digital projects in Latin America.',
		francisco_bio: 'Electronic engineer with a decade of experience leading hardware projects at Intel. Architect of our AI platform and visionary of restaurant sector digitalization.',
		fernando_bio: 'Over 25 years of experience in revenue management, marketing and sales in Telco, Fintech and Hospitality sectors. Expert in transforming operational challenges into success stories.',
		abraham_bio: 'Product designer specialized in user experience and digital strategy. Leads the Smart Menu evolution with focus on usability and efficiency.',
		
		// Values section
		values_title: 'Our values',
		values_description: 'With over 45 years of combined experience, our team leads the digital transformation of the restaurant sector with technical excellence and incomparable service.',
		
		innovation_title: 'Disruptive Innovation',
		innovation_description: 'Pioneers in AI for restaurants. Our elite technical team develops solutions that revolutionize the industry and position our clients at the forefront.',
		excellence_title: 'Proven Excellence',
		excellence_description: 'We apply world-class standards to ensure exceptional results in every implementation.',
		service_title: 'Customer Service',
		service_description: 'The best support in the market. Immediate response, personalized support and a dedicated team that guarantees success in each of our solutions.',
		
		// BLOG PAGE
		blog_title: 'RECO Blog',
		blog_description: 'Discover tips, strategies and analysis about digital menus, customer experience and restaurant optimization.',
		blog_newsletter_title: 'Want to stay up to date with our news?',
		blog_newsletter_description: 'Subscribe to our newsletter and receive exclusive content about innovation in the restaurant industry.',
		blog_newsletter_cta: 'Subscribe now',
		
		// Individual blog post page
		post_not_found_title: 'Article not found',
		post_not_found_description: 'The article you are looking for is not available or has been moved.',
		post_back_to_blog: '← Back to blog',
		post_by_author: 'By',
		post_related_articles: 'More articles',
		post_read_more: 'Read more',
		post_back_link: 'Back to blog',
		
		// Blog section
		blog_articles_title: 'Articles and resources',
		blog_no_articles: 'No articles found',
		blog_try_other_filters: 'Try other filters',
		
		// RESTAURANTS PAGE
		restaurants_title: 'Restaurants',
		restaurants_owner_title: 'Do you have a restaurant?',
		restaurants_owner_description: 'Discover how Reco can help you improve your diners\' experience and increase your sales.',
		restaurants_feature_smart_menus: 'Smart and personalized digital menus',
		restaurants_feature_ai_recommendations: 'AI-based recommendations',
		restaurants_feature_data_analysis: 'Data analysis and trends',
		restaurants_demo_cta: 'Request a demo',
		restaurants_trust_title: 'Restaurants that trust Reco',
		
		// FAST CASUAL PAGE
		fastcasual_hero_title_1: 'Turn your menu into a revenue engine.',
		fastcasual_hero_title_2: 'No apps. No friction.',
		fastcasual_hero_subtitle: 'Optimize every order, every shift and every location with Reco.',
		fastcasual_info: 'Reco is the intelligent layer that powers your QR menus. Personalize the experience, increase average ticket and lighten operations.',
		
		fastcasual_problem_title: 'The problem',
		fastcasual_problem_desc_1: 'Running a fast-casual chain today is a constant battle between speed, efficiency and experience. Your team rotates. Customers expect immediacy. Margins are tight. And while you have data... it doesn\'t always translate into clear menu decisions.',
		fastcasual_problem_desc_2: 'The menu is the tool all your customers touch — but it still doesn\'t help you sell better. Reco changes that.',
		
		fastcasual_solution_title: 'What does Reco do?',
		fastcasual_feature_promote: 'Automatically promotes high-profitability dishes.',
		fastcasual_feature_adjust: 'Adjusts menu experience by time slot or customer type.',
		fastcasual_feature_suggest: 'Suggests personalized cross-selling and up-selling.',
		fastcasual_feature_alert: 'Alerts you to which dishes are declining in sales.',
		fastcasual_feature_relief: 'Relieves pressure on your teams during peak hours.',
		
		fastcasual_benefits_title: 'Concrete benefits',
		fastcasual_benefit_ticket: '+10-20% in average ticket thanks to intelligent recommendations.',
		fastcasual_benefit_errors: 'Reduction of human error in orders.',
		fastcasual_benefit_consistency: 'Consistency in upselling, without depending on staff.',
		fastcasual_benefit_data: 'Actionable data on customer preferences and product performance.',
		fastcasual_benefit_integration: 'Seamless integration: requires no hardware or app.',
		fastcasual_benefit_deployment: 'Centralized deployment and control for the entire chain.',
		
		fastcasual_howto_title: 'How does it work?',
		fastcasual_step_upload: 'You upload your menu to Reco.',
		fastcasual_step_access: 'Your customers access via QR.',
		fastcasual_step_personalize: 'Reco personalizes recommendations.',
		fastcasual_step_results: 'You see results in a simple dashboard.',
		fastcasual_step_adjust: 'You adjust the menu and promotions.',
		
		fastcasual_cta_title: 'More revenue. Less friction. More agility in every location.',
		fastcasual_cta_description: 'Reco turns your menu into your best salesperson, 24/7.',
		fastcasual_cta_demo: 'Request a demo for your fast-casual chain',
		fastcasual_cta_cases: 'See success cases with chains like yours',
		
		// AUTOR RESTAURANT PAGE
		autor_hero_title_1: 'The best QR experience',
		autor_hero_title_2: 'For your waiters',
		autor_hero_subtitle: 'Reco is the digital waiter that supports your team.',
		autor_info: 'Reco translates, recommends and promotes your menu without having to print anything or train all the staff.',
		
		autor_problem_title: 'The problem',
		autor_problem_desc_1: 'Changing staff. Tourists who don\'t understand the menu. Dishes you want to promote.',
		autor_problem_desc_2: 'Reco is the invisible help that lightens your work.',
		
		autor_solution_title: 'What does Reco do?',
		autor_feature_translate: 'Automatically translates your menu.',
		autor_feature_highlight: 'Highlights the dishes you want to boost.',
		autor_feature_answer: 'Answers customers\' frequent questions.',
		autor_feature_help_staff: 'Helps new staff sell like a veteran.',
		autor_feature_analytics: 'Shows you which dishes are performing better.',
		
		autor_benefits_title: 'Concrete benefits',
		autor_benefit_menu_time: 'Saves time on menu updates.',
		autor_benefit_order_errors: 'Prevents order errors.',
		autor_benefit_tourist_experience: 'Improves tourist experience.',
		autor_benefit_staff_confidence: 'Gives your staff peace of mind.',
		autor_benefit_menu_decisions: 'Helps you make menu decisions.',
		autor_benefit_no_installation: 'No installation required.',
		
		autor_howto_title: 'How does it work?',
		autor_step_upload: 'You upload your menu to Reco.',
		autor_step_access: 'Your customers access via QR.',
		autor_step_show: 'Reco shows your featured dishes and answers questions.',
		autor_step_control: 'You control what to highlight each day.',
		
		autor_cta_title: 'Let your customers enjoy more.',
		autor_cta_description: 'Let your team work better.',
		autor_cta_demo: 'Request a demo for fine dining restaurants',
		autor_cta_cases: 'See how Reco helps restaurants like yours',
		
		// INDEPENDIENTE RESTAURANT PAGE
		independiente_hero_title_1: 'Stay the soul of your restaurant.',
		independiente_hero_title_2: 'Let Reco help you with the rest.',
		independiente_hero_subtitle: 'Reco is the digital waiter that supports your team.',
		independiente_info: 'Reco translates, recommends and promotes your menu without having to print anything or train all the staff.',
		independiente_problem_title: 'The problem',
		independiente_problem_desc_1: 'Changing staff. Tourists who don\'t understand the menu. Dishes you want to promote.',
		independiente_problem_desc_2: 'Reco is the invisible help that lightens your work.',
		independiente_solution_title: 'What does Reco do?',
		independiente_feature_translate: 'Automatically translates your menu.',
		independiente_feature_highlight: 'Highlights the dishes you want to boost.',
		independiente_feature_answer: 'Answers customers\' frequent questions.',
		independiente_feature_help_staff: 'Helps new staff sell like a veteran.',
		independiente_feature_analytics: 'Shows you which dishes are performing better.',
		independiente_benefits_title: 'Concrete benefits',
		independiente_benefit_menu_time: 'Saves time on menu updates.',
		independiente_benefit_order_errors: 'Prevents order errors.',
		independiente_benefit_tourist_experience: 'Improves tourist experience.',
		independiente_benefit_staff_confidence: 'Gives your staff peace of mind.',
		independiente_benefit_menu_decisions: 'Helps you make menu decisions.',
		independiente_benefit_no_installation: 'No installation required.',
		independiente_howto_title: 'How does it work?',
		independiente_step_upload: 'You upload your menu to Reco.',
		independiente_step_access: 'Your customers access via QR.',
		independiente_step_show: 'Reco shows your featured dishes and answers questions.',
		independiente_step_control: 'You control what to highlight each day.',
		independiente_cta_title: 'Let your customers enjoy more.',
		independiente_cta_description: 'Let your team work better.',
		independiente_cta_demo: 'Request a demo for independent restaurants',
		independiente_cta_cases: 'See how Reco helps restaurants like yours',
		
		// MULTINACIONAL RESTAURANT PAGE
		multinacional_hero_title_1: 'Global consistency, local experience.',
		multinacional_hero_title_2: 'Reco adapts to each market.',
		multinacional_hero_subtitle: 'Reco is the digital waiter that supports your team.',
		multinacional_info: 'Reco translates, recommends and promotes your menu without having to print anything or train all the staff.',
		multinacional_problem_title: 'The problem',
		multinacional_problem_desc_1: 'Operations in multiple countries, rotating teams, customers from around the world.',
		multinacional_problem_desc_2: 'Reco is the invisible help that keeps the experience consistent and local.',
		multinacional_solution_title: 'What does Reco do?',
		multinacional_feature_translate: 'Automatically translates your menu.',
		multinacional_feature_highlight: 'Highlights the dishes you want to boost.',
		multinacional_feature_answer: 'Answers customers\' frequent questions.',
		multinacional_feature_help_staff: 'Helps new staff sell like a veteran.',
		multinacional_feature_analytics: 'Shows you which dishes are performing better.',
		multinacional_benefits_title: 'Concrete benefits',
		multinacional_benefit_menu_time: 'Saves time on menu updates.',
		multinacional_benefit_order_errors: 'Prevents order errors.',
		multinacional_benefit_tourist_experience: 'Improves tourist experience.',
		multinacional_benefit_staff_confidence: 'Gives your staff peace of mind.',
		multinacional_benefit_menu_decisions: 'Helps you make menu decisions.',
		multinacional_benefit_no_installation: 'No installation required.',
		multinacional_howto_title: 'How does it work?',
		multinacional_step_upload: 'You upload your menu to Reco.',
		multinacional_step_access: 'Your customers access via QR.',
		multinacional_step_show: 'Reco shows your featured dishes and answers questions.',
		multinacional_step_control: 'You control what to highlight each day.',
		multinacional_cta_title: 'Let your customers enjoy more.',
		multinacional_cta_description: 'Let your team work better.',
		multinacional_cta_demo: 'Request a demo for multinational restaurants',
		multinacional_cta_cases: 'See how Reco helps restaurants like yours',
		
		// TURISTICO RESTAURANT PAGE
		turistico_hero_title_1: 'Reco makes every tourist understand, appreciate…',
		turistico_hero_title_2: 'and recommend your cuisine.',
		turistico_hero_subtitle: 'Without you losing your time or the essence of your restaurant.',
		turistico_info: 'When 75% of your customers are tourists, the experience starts with a menu that is understood.',
		
		turistico_problem_desc_1: 'Every day you receive customers from around the world. Many don\'t understand the menu well. Sometimes they get frustrated.',
		turistico_problem_desc_2: 'Reco makes your menu speak your customers\' language.',
		
		turistico_benefit_misunderstandings: 'Fewer misunderstandings.',
		turistico_benefit_high_margin: 'Increased sales in high-margin dishes.',
		turistico_benefit_reviews: 'Better online reviews.',
		turistico_benefit_confident_staff: 'More confident staff.',
		turistico_benefit_simple_setup: 'Simple setup.',
		
		turistico_step_upload: 'We upload your menu to Reco.',
		turistico_step_access: 'Customers access via QR.',
		turistico_step_suggest: 'Reco answers questions and suggests dishes.',
		turistico_step_change: 'You can change whatever you want.',
		
		turistico_cta_title: 'Make every tourist understand the value of your cuisine.',
		turistico_cta_description: 'Make your team work with more confidence.',
		turistico_cta_demo: 'See demo for restaurants in tourist areas',
		turistico_cta_free: 'Start free and measure the impact on your reviews',
		
		// NUEVO RESTAURANT PAGE
		nuevo_hero_title_1: 'Launch your restaurant with an advantage.',
		nuevo_hero_title_2: 'Reco helps you from day one.',
		nuevo_hero_subtitle: 'Reco is the digital waiter that supports your team.',
		nuevo_info: 'Reco translates, recommends and promotes your menu without having to print anything or train all the staff.',
		nuevo_problem_title: 'The problem',
		nuevo_problem_desc_1: 'Starting with new team, new menu and customers who don\'t know you.',
		nuevo_problem_desc_2: 'Reco is the invisible help that gives you confidence and control from the start.',
		nuevo_solution_title: 'What does Reco do?',
		nuevo_feature_translate: 'Automatically translates your menu.',
		nuevo_feature_highlight: 'Highlights the dishes you want to boost.',
		nuevo_feature_answer: 'Answers customers\' frequent questions.',
		nuevo_feature_help_staff: 'Helps new staff sell like a veteran.',
		nuevo_feature_analytics: 'Shows you which dishes are performing better.',
		nuevo_benefits_title: 'Concrete benefits',
		nuevo_benefit_menu_time: 'Saves time on menu updates.',
		nuevo_benefit_order_errors: 'Prevents order errors.',
		nuevo_benefit_tourist_experience: 'Improves tourist experience.',
		nuevo_benefit_staff_confidence: 'Gives your staff peace of mind.',
		nuevo_benefit_menu_decisions: 'Helps you make menu decisions.',
		nuevo_benefit_no_installation: 'No installation required.',
		nuevo_howto_title: 'How does it work?',
		nuevo_step_upload: 'You upload your menu to Reco.',
		nuevo_step_access: 'Your customers access via QR.',
		nuevo_step_show: 'Reco shows your featured dishes and answers questions.',
		nuevo_step_control: 'You control what to highlight each day.',
		nuevo_cta_title: 'Let your customers enjoy more.',
		nuevo_cta_description: 'Let your team work better.',
		nuevo_cta_demo: 'Request a demo for new restaurants',
		nuevo_cta_cases: 'See how Reco helps restaurants like yours',
		
		// Page meta
		page_title: 'Reco: Smart Menu',
		page_description: 'Discover Reco, the smart AI-powered menu that revolutionizes the restaurant experience. Help your customers order better and enjoy more!',
		
		// Footer
		footer_description: 'Transforming the gastronomic experience with artificial intelligence.',
		footer_company: 'Company',
		footer_products: 'Products',
		footer_legal: 'Legal',
		footer_privacy: 'Privacy',
		footer_terms: 'Terms',
		footer_cookies: 'Cookies',
		footer_rights: 'All rights reserved.',
		partners_trust_text: 'Companies that trust Reco',
		
		// Common
		menu: 'Menu',
		close: 'Close',
		open: 'Open',
		remote: 'Remote',
		view_linkedin: 'View LinkedIn profile of',
		
		// Contact page
		contact_title: 'Contact',
		contact_redirecting: 'Redirecting to Calendly to schedule a meeting...',
		contact_schedule_meeting: 'Schedule a meeting',
		contact_auto_redirect: 'If you are not redirected automatically, click the button above.',
		
		// Privacy page
		privacy_title: 'Privacy Policy',
		
		// Terms page
		terms_title: 'Terms of Service',
		
		// Cookies page
		cookies_title: 'Cookie Policy',
		cookies_meta_description: 'Manage your cookie preferences for the Reco website',
		cookies_settings_title: 'Cookie Settings',
		cookies_settings_subtitle: 'Manage your cookie and privacy preferences for reco.chat',
		cookies_current_status: 'Current status:',
		cookies_consent_granted: 'Consent granted on',
		cookies_no_preferences: 'You haven\'t configured your cookie preferences yet.',
		cookies_configure_below: 'Configure them below to improve your experience.',
		cookies_essential_name: 'Essential Cookies',
		cookies_essential_description: 'These cookies are necessary for the basic functioning of the website.',
		cookies_essential_examples: 'Cookie preferences, session state, security',
		cookies_analytics_name: 'Analytics Cookies',
		cookies_analytics_description: 'Help us understand how you interact with our website.',
		cookies_analytics_examples: 'Google Analytics, performance analysis',
		cookies_marketing_name: 'Marketing Cookies',
		cookies_marketing_description: 'Used to show relevant ads and marketing campaigns.',
		cookies_marketing_examples: 'Advertising cookies, conversion tracking',
		cookies_required_label: 'Required',
		cookies_examples_label: 'Examples:',
		cookies_save_preferences: 'Save Preferences',
		cookies_reset: 'Reset',
		cookies_delete_all: 'Delete All Preferences',
		cookies_preferences_saved: 'Preferences saved successfully',
		cookies_confirm_delete: 'Are you sure you want to delete all cookie preferences? This will require you to consent again.',
		cookies_additional_info: 'Additional Information',
		cookies_what_are_title: 'What are cookies?',
		cookies_what_are_description: 'Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.',
		cookies_how_use_title: 'How do we use your data?',
		cookies_how_use_description: 'We only use aggregated and anonymous data to improve our website. We never share personal information with third parties without your explicit consent.',
		cookies_your_rights_title: 'Your rights',
		cookies_your_rights_description: 'You can change your preferences at any time by visiting this page. You can also delete all cookies from your browser settings.',
		cookies_more_info: 'For more information, see our',
		cookies_and: ' and our ',
		
		// BLOG POST TRANSLATIONS
		blog_post_1423_title: 'How to Make Your Menu Sell (Without Lifting a Finger)',
		blog_post_1423_excerpt: 'Most menus just sit there. Reco turns yours into a smart, friendly assistant that drives sales and improves guest experience automatically.',
		blog_post_1412_title: 'Menus Are the New Hosts: Why First Impressions Start Here',
		blog_post_1412_excerpt: 'Guests meet your menu before your staff. Here\'s why that moment matters and how Reco makes it work harder.',
		blog_post_1408_title: 'Guests Don\'t Want Data. They Want Decisions.',
		blog_post_1408_excerpt: 'Ordering food should be easy. But most menus look like spreadsheets. Endless lists that overwhelm instead of helping customers choose.',
		blog_post_1397_title: 'Why PDF Menus Hurt Your Restaurant\'s Revenue',
		blog_post_1397_excerpt: 'If your digital menu is still in PDF format, you\'re not offering a better experience. You\'re offering a printout on a screen.',
		blog_post_1411_title: 'What Reco Does for Restaurant Owners',
		blog_post_1411_excerpt: 'Reco isn\'t just a digital menu. It\'s a tool that helps restaurant owners sell more and better.',
		blog_post_1421_title: 'From Cravings to Conversations: How Reco\'s Menu Was Built to Talk',
		blog_post_1421_excerpt: 'Reco\'s menu was designed to understand what you want and guide you to the best decision.',
		blog_post_1350_title: 'The Importance of Customer Loyalty in the Hospitality Industry',
		blog_post_1350_excerpt: 'Customer loyalty is key to the success of any restaurant. Discover how to achieve it.',
		blog_post_1365_title: 'How to Optimize Table Turnover in Your Restaurant',
		blog_post_1365_excerpt: 'Table turnover is fundamental to maximizing your restaurant\'s revenue.',
		blog_post_1319_title: 'The Importance of a Visually Attractive Menu in the Digital Age',
		blog_post_1319_excerpt: 'In the digital age, the visual presentation of your menu is more important than ever.',
		blog_post_1422_title: 'Typical Digital Menus Are Obsolete',
		blog_post_1422_excerpt: 'Traditional digital menus are no longer sufficient to meet customer expectations.',
		blog_post_895_title: 'How to Make Customers Return to Your Restaurant',
		blog_post_895_excerpt: 'Customer retention is crucial for the long-term success of your restaurant.',
		blog_post_961_title: 'Why Customers Hate Waiting and How to Fix It',
		blog_post_961_excerpt: 'Long wait times can ruin the customer experience at your restaurant.',
		blog_post_893_title: '5 Strategies to Increase Average Ticket in Your Restaurant',
		blog_post_893_excerpt: 'Increasing average ticket is one of the most effective ways to boost your revenue.',
		blog_post_1145_title: 'Artificial Intelligence in Restaurants: The Future Is Here',
		blog_post_1145_excerpt: 'AI is transforming the restaurant industry in ways that previously seemed impossible.',
		blog_post_1146_title: 'Why Use a Smart Menu? The Benefits Nobody Told You',
		blog_post_1146_excerpt: 'Discover the hidden advantages of implementing a smart menu in your restaurant.',
		blog_post_890_title: 'The Importance of a Visually Attractive Menu in the Digital Age',
		blog_post_890_excerpt: 'Menu design is more than simply listing dishes and prices. In the digital age, your menu is a key tool.',
		blog_post_962_title: 'Typical Digital Menus Are Obsolete',
		blog_post_962_excerpt: 'Traditional digital menus are no longer sufficient to meet customer expectations.',
		blog_post_888_title: 'How to Make Customers Return to Your Restaurant',
		blog_post_888_excerpt: 'Customer retention is crucial for the long-term success of your restaurant.',
		blog_post_994_title: 'Artificial Intelligence in Restaurants: The Future Is Here',
		blog_post_994_excerpt: 'AI is transforming the restaurant industry in ways that previously seemed impossible.',
		blog_post_886_title: 'Why Use a Smart Menu? The Benefits Nobody Told You',
		blog_post_886_excerpt: 'Discover the hidden advantages of implementing a smart menu in your restaurant.',
		blog_post_884_title: 'The Importance of Customer Loyalty in the Hospitality Industry',
		blog_post_884_excerpt: 'Customer loyalty is key to the success of any restaurant.',
		blog_post_882_title: 'How to Optimize Table Turnover in Your Restaurant',
		blog_post_882_excerpt: 'Table turnover is fundamental to maximizing your restaurant\'s revenue.',
		blog_post_871_title: '5 Strategies to Increase Average Ticket in Your Restaurant',
		blog_post_871_excerpt: 'Increasing average ticket is one of the most effective ways to boost your revenue.',
		blog_post_869_title: 'The Importance of a Visually Attractive Menu in the Digital Age',
		blog_post_869_excerpt: 'In the digital age, the visual presentation of your menu is more important than ever.',
		blog_post_940_title: 'Why Customers Hate Waiting and How to Fix It',
		blog_post_940_excerpt: 'Long wait times can ruin the customer experience at your restaurant.',
		blog_post_944_title: 'Typical Digital Menus Are Obsolete',
		blog_post_944_excerpt: 'Traditional digital menus are no longer sufficient to meet customer expectations.',
		blog_post_945_title: 'How to Make Customers Return to Your Restaurant',
		blog_post_945_excerpt: 'Customer retention is crucial for the long-term success of your restaurant.',
		blog_post_947_title: 'Artificial Intelligence in Restaurants: The Future Is Here',
		blog_post_947_excerpt: 'AI is transforming the restaurant industry in ways that previously seemed impossible.'
	},
	'es-MX': {
		// Navbar
		restaurants: 'Restaurantes',
		prices: 'Precios',
		blog: 'Blog',
		about: 'Nosotros',
		contact: 'Contáctanos',
		
		// Restaurant types for navbar dropdown
		'fast-casual': 'Cadenas de comida rápida',
		'autor': 'Restaurantes de autor / cocina creativa',
		'independiente': 'Restaurante independiente / familiar',
		'multinacional': 'Cadena multinacional / expansión internacional',
		'turistico': 'Restaurante en zona turística',
		'nuevo': 'Restaurante nuevo / primer emprendimiento sin presencia digital',
		
		// Hero Section
		hero_title_1: 'La mejor experiencia QR',
		hero_subtitle_1: 'Para tus comensales.',
		hero_subtitle_2: 'Para tus meseros.',
		hero_subtitle_3: 'Para tu negocio.',
		hero_description: 'El menú más inteligente que:',
		hero_feature_1: 'Sugiere platillos personalizados',
		hero_feature_2: 'Resuelve dudas al instante',
		hero_feature_3: 'Te ayuda a conocer mejor a tus comensales',
		hero_feature_4: 'Todo desde el celular, sin capacitaciones, sin complicaciones',
		hero_discover_btn: 'Descubre cómo funciona',
		hero_restaurant_btn: '¿Quieres que tu menú trabaje para ti?',
		hero_trust_text: 'Confían en nosotros:',
		hero_demo_btn: 'Crea tu menú demo aquí',
		
		// WhatsApp message
		whatsapp_message: 'Hola, me gustaría obtener más información sobre Reco para mi restaurante.',
		
		// How It Works Section
		how_it_works_title_1: 'Para comensales:',
		how_it_works_title_2: 'ordenar sin dudas, comer mejor',
		how_it_works_quote: '"Reco me salvó de ordenar un platillo con mariscos (¡alérgica!)"',
		how_it_works_benefit_1: 'Ordenan sin miedo a equivocarse',
		how_it_works_benefit_2: 'Pueden preguntar lo que quieran (y Reco responde)',
		how_it_works_benefit_3: 'Reciben sugerencias según su dieta, tiempo y presupuesto',
		
		// Benefits
		menus_in_language_title: 'Menús en tu idioma',
		menus_in_language_desc: 'Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que te sientas como en casa.',
		personalized_recommendations_title: 'Recomendaciones personalizadas',
		personalized_recommendations_desc: 'Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. Como tener un experto gastronómico personal.',
		mobile_ordering_title: 'Ordena y paga desde el celular',
		mobile_ordering_desc: 'Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, sin complicaciones, solo disfruta.',
		
		// Choose Restaurant Type Section
		restaurant_sells_title_1: '¿Tu menú vende',
		restaurant_sells_title_2: 'o solo decora?',
		restaurant_sells_quote: 'Un menú profesional no es solo bonito. Es claro, útil y estratégico.',
		restaurant_sells_benefit_1: 'Sabes qué platillos realmente quieren tus comensales',
		restaurant_sells_benefit_2: 'Reco aprende y propone mejoras en tu menú',
		restaurant_sells_benefit_3: 'Vende como un mesero experto',
		restaurant_sells_benefit_4: 'Habla todos los idiomas',
		restaurant_sells_benefit_5: 'Se adapta al perfil de cada comensal',
		restaurant_sells_quote_2: 'No es diseño. Es ingeniería de menú.',
		restaurant_sells_testimonial: '"Reco convirtió mi menú en mi mejor vendedor."',
		restaurant_sells_testimonial_author: '- Carlos, La Casa de Toño',
		
		// RestauranteSells testimonial
		for_restaurateurs_testimonial: '"Reco no reemplaza a mi equipo. Lo hace mejor."',
		for_restaurateurs_testimonial_author: '- María, Los Panchos',
		
		// Restaurant benefits for owners
		data_insights_title: 'Datos útiles al instante',
		data_insights_desc: 'Descubre qué platillos triunfan, qué falla y cómo mejorar — todo desde el menú.',
		more_revenue_title: 'Más ingresos',
		more_revenue_desc: 'Reco recomienda platillos que suben el ticket promedio — sin que el personal diga una palabra.',
		less_pressure_title: 'Menos presión para el equipo',
		less_pressure_desc: 'Reco responde dudas frecuentes, sugiere maridajes y libera al personal para lo humano.',
		
		// Restaurant types
		tourist_restaurant_title: 'Restaurante turístico',
		tourist_restaurant_desc: 'Menús multilingües y recomendaciones adaptadas a cada idioma y cultura. Tus comensales se sienten como en casa.',
		gastrobar_title: 'Gastrobar o autor',
		gastrobar_desc: 'Destaca tus platillos especiales y maridajes. Reco ayuda a tus comensales a descubrir tu propuesta gastronómica única.',
		fast_casual_title: 'Comida rápida o franquicia',
		fast_casual_desc: 'Agiliza las órdenes y maximiza las ventas. Reco sugiere complementos y optimiza el ticket promedio automáticamente.',
		family_restaurant_title: 'Fonda o menú del día',
		family_restaurant_desc: 'Gestiona fácilmente los menús diarios y sugerencias. Reco mantiene tu menú siempre actualizado y atractivo.',
		
		// Restaurante Sells Section  
		for_restaurateurs_title_1: 'Para ti, restaurantero:',
		for_restaurateurs_title_2: 'más ventas, menos errores',
		for_restaurateurs_quote: '"Tu personal se enfoca en lo humano. Reco, en todo lo demás."',
		for_restaurateurs_benefit_1: 'Aumenta el ticket promedio con recomendaciones inteligentes',
		for_restaurateurs_benefit_2: 'Reduce errores de orden (Mejor experiencia del comensal = mejores reseñas)',
		for_restaurateurs_benefit_3: 'Funciona con un QR. Sin instalaciones, sin capacitaciones eternas',
		for_restaurateurs_pricing_link: 'Conoce los precios flexibles de Reco →',
		
		// Contact CTA
		contact_cta_title_1: 'Transforma la experiencia de tus comensales con',
		contact_cta_title_2: 'Reco',
		contact_cta_description: 'Potencia tu restaurante con recomendaciones inteligentes, pagos más rápidos y comensales más satisfechos. Descubre cómo Reco puede ayudarte a crecer.',
		contact_cta_btn: '¡Contáctanos!',
		free_trial_btn: 'Prueba gratis',
		
		// PRICING PAGE
		pricing_title: 'Planes y Precios',
		pricing_subtitle: 'Elige el plan que mejor se adapte a las necesidades de tu restaurante.',
		pricing_no_commitment: '✨ Sin compromisos • Cancela cuando quieras',
		
		// Basic Plan
		basic_plan_title: 'Básico',
		basic_plan_price: 'Gratis',
		basic_plan_badge: '🎉 Plan gratuito',
		basic_feature_digital_menu: 'Menú digital básico',
		basic_feature_dishes: 'Hasta 50 platillos',
		basic_feature_email_support: 'Soporte por email',
		basic_plan_cta: 'Empezar ahora',
		
		// Pro Plan
		pro_plan_title: 'Pro',
		pro_plan_price: '$4,999 MXN',
		pro_plan_period: '/mes',
		pro_plan_badge: '🚀 Recomendado',
		pro_plan_popular: '⭐ Más Popular',
		pro_feature_basic_included: 'Todo lo del plan Básico',
		pro_feature_ai_recommendations: 'Recomendaciones IA',
		pro_feature_data_analysis: 'Análisis de datos',
		pro_feature_priority_support: 'Soporte prioritario',
		pro_plan_cta: 'Empezar',
		
		// Enterprise Plan
		enterprise_plan_title: 'Enterprise',
		enterprise_plan_price: 'Plan Empresarial',
		enterprise_plan_badge: '💼 Empresas',
		enterprise_feature_pro_included: 'Todo lo del plan Pro',
		enterprise_feature_custom_integration: 'Integración personalizada',
		enterprise_feature_24_7_support: 'Soporte 24/7',
		enterprise_plan_cta: 'Contactar ventas',
		
		// ABOUT PAGE (NOSOTROS)
		about_hero_badge: 'Equipo de clase mundial',
		about_hero_title: 'Conoce al equipo que está revolucionando la industria restaurantera',
		about_hero_description: 'Somos un equipo de expertos en tecnología, producto y negocio, unidos por la misión de transformar la experiencia gastronómica a través de la inteligencia artificial.',
		
		// Team roles
		ceo_cofounder: 'CEO & Co-fundador',
		cto_cofounder: 'CTO & Co-fundador',
		chief_revenue_officer: 'Chief Revenue Officer',
		senior_lead_developer: 'Senior Lead Developer',
		
		// Team bios
		jose_bio: 'Emprendedor y especialista en comunicación con experiencia liderando equipos de marketing para marcas de lujo y proyectos digitales en América Latina.',
		francisco_bio: 'Ingeniero electrónico con una década de experiencia liderando proyectos de hardware en Intel. Arquitecto de nuestra plataforma de IA y visionario de la digitalización del sector restaurantero.',
		fernando_bio: 'Más de 25 años de experiencia en revenue management, marketing y ventas en sectores Telco, Fintech y Hospitality. Experto en transformar desafíos operativos en historias de éxito.',
		abraham_bio: 'Diseñador de producto especializado en experiencia de usuario y estrategia digital. Lidera la evolución del Smart Menu con enfoque en usabilidad y eficiencia.',
		
		// Values section
		values_title: 'Nuestros valores',
		values_description: 'Con más de 45 años de experiencia combinada, nuestro equipo lidera la transformación digital del sector restaurantero con excelencia técnica y servicio incomparable.',
		
		innovation_title: 'Innovación Disruptiva',
		innovation_description: 'Pioneros en IA para restaurantes. Nuestro equipo técnico de élite desarrolla soluciones que revolucionan la industria y posicionan a nuestros clientes a la vanguardia.',
		excellence_title: 'Excelencia Comprobada',
		excellence_description: 'Aplicamos estándares de clase mundial para garantizar resultados excepcionales en cada implementación.',
		service_title: 'Servicio al Cliente',
		service_description: 'El mejor soporte del mercado. Respuesta inmediata, acompañamiento personalizado y un equipo dedicado que garantiza el éxito en cada una de nuestras soluciones.',
		
		// BLOG PAGE
		blog_title: 'Blog de RECO',
		blog_description: 'Descubre consejos, estrategias y análisis sobre menús digitales, experiencia del comensal y optimización de restaurantes.',
		blog_newsletter_title: '¿Quieres mantenerte al día con nuestras novedades?',
		blog_newsletter_description: 'Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre innovación en el sector restaurantero.',
		blog_newsletter_cta: 'Suscribirse ahora',
		
		// Individual blog post page
		post_not_found_title: 'Artículo no encontrado',
		post_not_found_description: 'El artículo que estás buscando no está disponible o ha sido movido.',
		post_back_to_blog: '← Volver al blog',
		post_by_author: 'Por',
		post_related_articles: 'Más artículos',
		post_read_more: 'Leer más',
		post_back_link: 'Volver al blog',
		
		// Blog section
		blog_articles_title: 'Artículos y recursos',
		blog_no_articles: 'No se encontraron artículos',
		blog_try_other_filters: 'Prueba con otros filtros',
		
		// RESTAURANTS PAGE
		restaurants_title: 'Restaurantes',
		restaurants_owner_title: '¿Tienes un restaurante?',
		restaurants_owner_description: 'Descubre cómo Reco puede ayudarte a mejorar la experiencia de tus comensales y aumentar tus ventas.',
		restaurants_feature_smart_menus: 'Menús digitales inteligentes y personalizados',
		restaurants_feature_ai_recommendations: 'Recomendaciones basadas en IA',
		restaurants_feature_data_analysis: 'Análisis de datos y tendencias',
		restaurants_demo_cta: 'Solicitar una demo',
		restaurants_trust_title: 'Restaurantes que confían en Reco',
		restaurants_trust_description: 'Únete a los cientos de restaurantes que ya están transformando su experiencia gastronómica con Reco.',
		
		// Restaurant types selection
		restaurants_select_title: 'Selecciona tu tipo de restaurante',
		restaurants_select_description: 'Soluciones personalizadas para cada tipo de negocio gastronómico.',
		
		// FAST-CASUAL PAGE
		fast_casual_hero_title: 'Menú Digital Inteligente para Cadenas de Comida Rápida',
		fast_casual_hero_subtitle: 'Optimiza tus operaciones, aumenta el ticket promedio y mejora la experiencia del comensal con IA.',
		
		// Fast-casual features
		fast_casual_feature_1_title: 'Órdenes Más Rápidas',
		fast_casual_feature_1_desc: 'Reduce el tiempo de orden en un 40% con sugerencias inteligentes y navegación optimizada.',
		fast_casual_feature_2_title: 'Mayor Ticket Promedio',
		fast_casual_feature_2_desc: 'Incrementa tus ventas hasta un 25% con recomendaciones personalizadas de complementos.',
		fast_casual_feature_3_title: 'Menos Errores',
		fast_casual_feature_3_desc: 'Elimina malentendidos y reduce devoluciones con descripciones claras y confirmaciones visuales.',
		
		// Fast-casual benefits
		fast_casual_benefit_operations: 'Operaciones Optimizadas',
		fast_casual_benefit_operations_desc: 'Sistema diseñado para alto volumen: gestión de rush hours, integración con cocina y actualizaciones en tiempo real de disponibilidad.',
		fast_casual_benefit_analytics: 'Análisis en Tiempo Real',
		fast_casual_benefit_analytics_desc: 'Dashboard completo con métricas clave: productos más vendidos, horarios pico, preferencias por sucursal y tendencias de consumo.',
		fast_casual_benefit_brand: 'Consistencia de Marca',
		fast_casual_benefit_brand_desc: 'Mantén la identidad de tu marca en todas las sucursales con plantillas personalizables y control centralizado.',
		
		// Fast-casual CTA
		fast_casual_cta_title: '¿Listo para revolucionar tu cadena de comida rápida?',
		fast_casual_cta_subtitle: 'Únete a las principales cadenas que ya confían en Reco',
		fast_casual_cta_button: 'Agendar Demo Personalizada',
		fast_casual_cta_whatsapp: 'Hablar por WhatsApp',
		
		// Footer
		footer_product_title: 'Producto',
		footer_features: 'Características',
		footer_pricing: 'Precios',
		footer_restaurants: 'Restaurantes',
		footer_blog: 'Blog',
		
		footer_company_title: 'Empresa',
		footer_about: 'Nosotros',
		footer_contact: 'Contacto',
		footer_privacy: 'Privacidad',
		footer_terms: 'Términos',
		
		footer_social_title: 'Síguenos',
		footer_copyright: '© 2024 Reco. Todos los derechos reservados.',
		
		// Cookie consent
		cookie_consent_title: 'Usamos cookies',
		cookie_consent_description: 'Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.',
		cookie_consent_accept: 'Aceptar',
		cookie_consent_decline: 'Rechazar',
		cookie_consent_manage: 'Gestionar preferencias',
		
		// Cookies page
		cookies_page_title: 'Política de Cookies',
		cookies_page_description: 'En Reco utilizamos cookies para mejorar tu experiencia de navegación.',
		cookies_essential_title: 'Cookies Esenciales',
		cookies_essential_desc: 'Necesarias para el funcionamiento básico del sitio.',
		cookies_analytics_title: 'Cookies Analíticas',
		cookies_analytics_desc: 'Nos ayudan a entender cómo interactúas con nuestro sitio.',
		cookies_marketing_title: 'Cookies de Marketing',
		cookies_marketing_desc: 'Usadas para mostrarte contenido relevante.',
		cookies_save_preferences: 'Guardar preferencias',
		
		// Additional Mexican-specific content
		fast_casual_testimonial: '"Reco aumentó nuestras ventas en 30% en solo 2 meses"',
		fast_casual_testimonial_author: '- Roberto, Tacos El Güero',
		
		// Blog posts - keeping same as Spanish for now
		blog_post_886_title: '¿Por qué usar un Menú Inteligente? Los beneficios que nadie te contó',
		blog_post_886_excerpt: 'Descubre las ventajas ocultas de implementar un menú inteligente en tu restaurante.',
		blog_post_884_title: 'La importancia de la fidelización en la industria de hostelería',
		blog_post_884_excerpt: 'La fidelización de clientes es clave para el éxito de cualquier restaurante.',
		blog_post_882_title: '¿Cómo optimizar la rotación de mesas en tu restaurante?',
		blog_post_882_excerpt: 'La rotación de mesas es fundamental para maximizar los ingresos de tu restaurante.',
		blog_post_871_title: '5 estrategias para aumentar el ticket promedio en tu restaurante',
		blog_post_871_excerpt: 'Aumentar el ticket promedio es una de las formas más efectivas de incrementar tus ingresos.',
		blog_post_869_title: 'La importancia de un menú visualmente atractivo en la era digital',
		blog_post_869_excerpt: 'En la era digital, la presentación visual de tu menú es más importante que nunca.',
		blog_post_940_title: '¿Por qué los clientes odian esperar y cómo solucionarlo?',
		blog_post_940_excerpt: 'Los tiempos de espera largos pueden arruinar la experiencia del cliente en tu restaurante.',
		blog_post_944_title: 'Los menús digitales típicos son obsoletos',
		blog_post_944_excerpt: 'Los menús digitales tradicionales ya no son suficientes para satisfacer las expectativas de los clientes.',
		blog_post_945_title: '¿Cómo hacer que los clientes regresen a tu restaurante?',
		blog_post_945_excerpt: 'La retención de clientes es crucial para el éxito a largo plazo de tu restaurante.',
		blog_post_947_title: 'Inteligencia Artificial en restaurantes: El futuro está aquí',
		blog_post_947_excerpt: 'La IA está transformando la industria restaurantera de maneras que antes parecían imposibles.'
	}
} as const;

export function t(key: keyof typeof translations['es'], language?: Language): string {
	// Get the current language reactively
	const lang = language || languageStore.currentLanguage;
	// Return the translation for the current language, falling back to Spanish if not found
	return translations[lang][key] || translations['es'][key];
} 