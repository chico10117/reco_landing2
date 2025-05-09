module.exports = (event) => {
  // Solo hacer deploy desde el branch main
  if (event.payload.ref !== 'refs/heads/main') {
    console.log('🔍 No es el branch main, ignorando despliegue');
    return true;
  }

  // Si es un commit que actualiza archivos que no afectan al sitio web, ignorar
  const filesChanged = event.payload.commits.reduce((files, commit) => {
    return [
      ...files,
      ...commit.added,
      ...commit.modified,
      ...commit.removed,
    ];
  }, []);
  
  // Solo desplegar si hay cambios en archivos relevantes
  const relevantChanges = filesChanged.some(file => 
    file.startsWith('src/') || 
    file.startsWith('static/') || 
    [
      'package.json',
      'svelte.config.js',
      'tailwind.config.js',
      'vite.config.ts',
      'vercel.json'
    ].includes(file)
  );

  if (!relevantChanges) {
    console.log('📝 Solo cambios en archivos no-críticos, ignorando despliegue');
    return true;
  }

  console.log('🚀 Iniciando despliegue desde main');
  return false;
}; 