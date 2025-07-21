<script lang="ts">
	import { languageStore, type Language } from '$lib/stores/language.svelte';
	import { Globe, ChevronDown } from 'lucide-svelte';
	import { clickOutside } from '$lib/utils/click-outside';

	// Reactive state
	let isOpen = $state(false);
	const currentLang = $derived(languageStore.currentLanguage);

	// Language options with display names
	const languages = [
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'en', name: 'English', flag: '🇬🇧' },
		{ code: 'es-MX', name: 'Español (México)', flag: '🇲🇽' }
	] as const;

	const currentLanguage = $derived(
		languages.find(lang => lang.code === currentLang) || languages[0]
	);

	function selectLanguage(code: Language) {
		languageStore.setLanguage(code);
		isOpen = false;
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleClickOutside() {
		isOpen = false;
	}
</script>

<div class="relative" use:clickOutside={handleClickOutside}>
	<button
		onclick={toggleDropdown}
		class="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out group"
		aria-label="Seleccionar idioma"
		aria-expanded={isOpen}
		aria-haspopup="true"
	>
		<Globe class="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
		
		<div class="flex items-center gap-1.5">
			<span class="text-base">{currentLanguage.flag}</span>
			<span class="font-medium text-xs text-gray-700 group-hover:text-blue-700 transition-colors duration-200">
				{currentLanguage.code.toUpperCase()}
			</span>
		</div>
		
		<ChevronDown class="w-3 h-3 text-gray-500 group-hover:text-blue-600 transition-all duration-200 {isOpen ? 'rotate-180' : ''}" />
		
		<!-- Subtle background animation on hover -->
		<div class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
	</button>

	<!-- Dropdown menu -->
	{#if isOpen}
		<div class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
			{#each languages as language}
				<button
					onclick={() => selectLanguage(language.code)}
					class="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors duration-150 {currentLang === language.code ? 'bg-blue-50' : ''}"
				>
					<span class="text-lg">{language.flag}</span>
					<span class="text-sm font-medium {currentLang === language.code ? 'text-blue-700' : 'text-gray-700'}">
						{language.name}
					</span>
					{#if currentLang === language.code}
						<div class="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	button {
		backdrop-filter: blur(8px);
	}
</style>