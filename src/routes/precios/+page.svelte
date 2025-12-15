<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { languageStore } from '$lib/stores/language.svelte';

  // Make language reactive
  import { t } from '$lib/utils/translations';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);
  
  // Pricing toggle state
  let isAnnual = $state(false);
  
  // Reactive pricing based on toggle
  const basicPrice = $derived(isAnnual ? tr('basic_plan_price_annual') : tr('basic_plan_price'));
  const proPrice = $derived(isAnnual ? tr('pro_plan_price_annual') : tr('pro_plan_price'));
  
  // Stripe links based on language and billing period
  const stripeLinks = $derived.by(() => {
    const isMexico = currentLang === 'es-MX';
    
    if (isMexico) {
      return {
        standard: isAnnual
          ? 'https://buy.stripe.com/4gM6oHh0Abetg7J5TE1ck0a' // MX Annual Standard
          : 'https://buy.stripe.com/dRm3cvcKkgyNcVx0zk1ck09', // MX Monthly Standard
        pro: isAnnual 
          ? 'https://buy.stripe.com/eVq6oHfWw6Yd3kX1Do1ck05' // MX Annual Pro
          : 'https://buy.stripe.com/4gM8wP25G82h1cPeqa1ck06'  // MX Monthly Pro
      };
    } else {
      // European customers (ES, EN)
      return {
        standard: 'https://buy.stripe.com/bJedR96lWdmBaNpbdY1ck02', // EU Monthly Standard
        pro: isAnnual
          ? 'https://buy.stripe.com/cNi6oH25G0zP4p181M1ck04' // EU Annual Pro
          : 'https://buy.stripe.com/aFa7sLeSs1DT2gT95Q1ck03'  // EU Monthly Pro
      };
    }
  });
</script>

<svelte:head>
  <title>{tr('pricing_title')} | Reco</title>
  <meta name="description" content="{tr('pricing_subtitle')}" />
  <style>
    .shadow-3xl {
      box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }
    .shadow-4xl {
      box-shadow: 0 45px 80px -15px rgba(0, 0, 0, 0.3), 0 15px 35px -8px rgba(0, 0, 0, 0.15);
    }
  </style>
</svelte:head>

<!-- Hero Section with Blue Gradient -->
 <div class="relative overflow-hidden bg-white"> <!--style="background: radial-gradient(ellipse 60% 40% at 50% 40%, #dbeafe 0%, #e0e7ef 60%, #fff 100%);"> -->
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-black mb-6">
        {tr('pricing_title')}
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {tr('pricing_subtitle')}
      </p>
      <div class="mt-2 flex justify-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
          <span class="text-blue-700 text-sm font-medium">{tr('pricing_no_commitment')}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Pricing Toggle -->
<div class="relative -mt-12 mb-16 z-10">
  <div class="max-w-xs mx-auto">
    <div class="relative bg-white rounded-full p-2 shadow-lg border border-gray-200">
      <div class="grid grid-cols-2 gap-4">
        <button 
          onclick={() => isAnnual = false}
          class="relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 {!isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}"
        >
          {tr('pricing_toggle_monthly')}
        </button>
        <button 
          onclick={() => isAnnual = true}
          class="relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 {isAnnual ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}"
        >
          {tr('pricing_toggle_annual')}
          <span class="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
            {tr('pricing_save_yearly')}
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Pricing Cards Section -->
<div class="relative -mt-6 pb-20">
  <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
    <div class="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center md:items-stretch">
      
      <!-- Plan Básico -->
      <div class="relative group w-72 md:w-full cursor-pointer">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-3xl">
          <div class="px-4 py-6 md:px-8 md:py-12">
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">{tr('basic_plan_title')}</h3>
              <div class="mb-2">
                <span class="text-4xl md:text-6xl font-bold text-green-600">{basicPrice}</span>
                <span class="text-base md:text-xl text-gray-600 ml-1">{tr('basic_plan_period')}</span>
              </div>
              <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-green-50 border border-green-200 mb-4 md:mb-8">
                <span class="text-green-700 text-xs md:text-sm font-medium">{tr('basic_plan_badge')}</span>
              </div>
            </div>
            
            <ul class="space-y-2 md:space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">{tr('basic_feature_digital_menu')}</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">{tr('basic_feature_dishes')}</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">{tr('basic_feature_email_support')}</span>
              </li>
            </ul>
          </div>
          <div class="px-4 pb-4 md:px-8 md:pb-8">
            <a href={stripeLinks.standard} target="_blank" rel="noopener noreferrer" class="block">
              <Button variant="outline" class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold border-2 border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 hover:scale-105 hover:shadow-lg transition-all duration-200">
                {tr('basic_plan_cta')}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <!-- Plan Pro - Featured -->
      <div class="relative group w-72 md:w-full cursor-pointer">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-90 transition-all duration-500"></div>
        <div class="relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold shadow-lg">
              {tr('pro_plan_popular')}
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl overflow-hidden transform scale-105 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-3 group-hover:shadow-4xl">
            <div class="px-4 py-6 md:px-8 md:py-12">
                <div class="text-center">
                 <h3 class="text-xl md:text-2xl font-bold text-white mb-2">{tr('pro_plan_title')}</h3>
                 <div class="mb-2">
                   <span class="text-4xl md:text-6xl font-bold text-white">{proPrice}</span>
                   <span class="text-base md:text-xl text-blue-200 ml-1">{tr('pro_plan_period')}</span>
                 </div>
                <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 md:mb-8">
                  <span class="text-white text-xs md:text-sm font-medium">{tr('pro_plan_badge')}</span>
                </div>
              </div>
              
              <ul class="space-y-2 md:space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">{tr('pro_feature_basic_included')}</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">{tr('pro_feature_ai_recommendations')}</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">{tr('pro_feature_data_analysis')}</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">{tr('pro_feature_priority_support')}</span>
                </li>
              </ul>
            </div>
            <div class="px-4 pb-4 md:px-8 md:pb-8">
              <a href={stripeLinks.pro} target="_blank" rel="noopener noreferrer" class="block">
                <Button class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-xl shadow-lg transition-all duration-200">
                  {tr('pro_plan_cta')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Plan Enterprise -->
      <div class="relative group w-72 md:w-full cursor-pointer">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-3xl">
          <div class="px-4 py-6 md:px-8 md:py-12">
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">{tr('enterprise_plan_title')}</h3>
              <div class="mb-2 px-2">
                <span class="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">{tr('enterprise_plan_price')}</span>
              </div>
              <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 md:mb-8">
                <span class="text-blue-700 text-xs md:text-sm font-medium">{tr('enterprise_plan_badge')}</span>
              </div>
            </div>
            
            <ul class="space-y-2 md:space-y-4 mb-2">
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">{tr('enterprise_feature_pro_included')}</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">{tr('enterprise_feature_custom_integration')}</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">{tr('enterprise_feature_24_7_support')}</span>
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 md:px-8 md:pb-12">
            <a href="https://calendar.app.google/C3yhn8ZD1ZcMSCPC7" target="_blank" rel="noopener noreferrer" class="block">
              <Button variant="outline" class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 hover:shadow-lg transition-all duration-200">
                {tr('enterprise_plan_cta')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>