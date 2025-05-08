<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div class="text-2xl font-bold text-blue-400 mb-4">Reco</div>
        <p class="text-gray-400 text-sm">
          Transformando la experiencia gastronómica con inteligencia artificial.
        </p>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-4">Empresa</h3>
        <ul class="space-y-2">
          <li><a href="/about" class="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
          <li><a href="/partners" class="text-gray-400 hover:text-white transition-colors">Partners</a></li>
          <li><a href="/blog" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-4">Legal</h3>
        <ul class="space-y-2">
          <li><a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Política de privacidad</a></li>
          <li><a href="/terms" class="text-gray-400 hover:text-white transition-colors">Términos de servicio</a></li>
          <li><a href="/cookies" class="text-gray-400 hover:text-white transition-colors">Política de cookies</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-4">Contacto</h3>
        <ul class="space-y-2">
          <li>
            <a href="mailto:info@reco.chat" class="text-gray-400 hover:text-white transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@reco.chat
            </a>
          </li>
          <li>
            <a href="https://twitter.com/recochat" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              @recochat
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/recochat" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-12 pt-8">
      <p class="text-center text-gray-500 text-sm">
        &copy; {currentYear} Reco AI Solutions. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer> 