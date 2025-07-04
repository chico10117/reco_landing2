<script lang="ts">
	import { languageStore } from '$lib/stores/language.svelte';
	import { Globe } from 'lucide-svelte';

	// Reactive language using Svelte 5 runes
	const currentLang = $derived(languageStore.currentLanguage);

	function handleToggle() {
		languageStore.toggleLanguage();
	}
</script>

<button
	onclick={handleToggle}
	class="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out group"
	aria-label="Cambiar idioma"
	title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
>
	<!-- Globe icon with subtle animation -->
	<Globe class="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
	
	<!-- Language indicator with smooth transition -->
	<div class="relative overflow-hidden w-6 h-5">
		<span
			class="absolute inset-0 flex items-center justify-center font-medium text-xs text-gray-700 group-hover:text-blue-700 transition-all duration-300 {currentLang === 'es' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}"
		>
			ES
		</span>
		<span
			class="absolute inset-0 flex items-center justify-center font-medium text-xs text-gray-700 group-hover:text-blue-700 transition-all duration-300 {currentLang === 'en' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}"
		>
			EN
		</span>
	</div>
	
	<!-- Subtle background animation on hover -->
	<div class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
</button>

<style>
	button {
		backdrop-filter: blur(8px);
	}
</style> 