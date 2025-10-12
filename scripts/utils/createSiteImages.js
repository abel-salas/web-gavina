// Script para crear la configuración inicial de imágenes del sitio
const { writeClient } = require('../sanity/client');

async function createSiteImagesConfig() {
  try {
    // Configurar SSL
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    
    const siteImagesConfig = {
      _type: 'siteConfig',
      configType: 'site-images',
      title: 'Configuración de Imágenes del Sitio',
      heroImageUrl: 'http://www.banyslagavina.cat/wp-content/uploads/2010/10/Vistesweb.jpg'
    };

    const result = await writeClient.create(siteImagesConfig);
    console.log('✅ Configuración de imágenes creada:', result._id);
    return result;
  } catch (error) {
    console.error('❌ Error creando configuración de imágenes:', error);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  createSiteImagesConfig();
}

module.exports = { createSiteImagesConfig };