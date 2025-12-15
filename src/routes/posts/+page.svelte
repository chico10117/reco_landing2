<script lang="ts">
  import BlogList from '$lib/components/blog/blog-list.svelte';
  import { languageStore } from '$lib/stores/language.svelte';

  // Create reactive translations using Svelte 5 runes
  import { t } from '$lib/utils/translations';
  
  const currentLang = $derived(languageStore.currentLanguage);
  
  // Reactive function using $derived
  const tr = $derived.by(() => {
    return (key: string) => t(key as any, currentLang);
  });
  
  const { posts } = $props<{ posts: any[] }>();
</script>

<svelte:head>
  <title>{tr('blog')} | Reco</title>
  <meta name="description" content="{tr('blog_description')}" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <div class="mb-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{tr('blog_title')}</h1>
    <p class="text-lg text-gray-600">
      {tr('blog_description')}
    </p>
  </div>

  <BlogList />

  <div class="mt-24 bg-gray-50 py-12 px-6 rounded-xl text-center shadow-inner">
    <h3 class="text-2xl font-bold text-gray-900 mb-3">{tr('blog_newsletter_title')}</h3>
    <p class="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
      {tr('blog_newsletter_description')}
    </p>
    <a 
      href="https://calendar.app.google/C3yhn8ZD1ZcMSCPC7" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
    >
      {tr('blog_newsletter_cta')}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>