// Test de conexión con Sanity
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'tkwezd48',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skbZ2eCNxHbl8jWbxgQn4bmHjJjFavrUGKq9PbqsAYfAxt5Aw8XiQETBIJEcYiN5cPrHpVlahlZOXr8DARz4K4Gacw5pSw92RUlFjLhV1gZ4Iod7ZgSyCfgMZRmyapBIDisrooPJThrxI3htVgN0nKBYS51p0H6AY0Jjp9WdVT6yolLm1NpB'
})

async function testSanityConnection() {
  try {
    // Test básico: hacer una consulta simple
    const result = await client.fetch('*[_type == "document"][0..2]')
    console.log('✅ Conexión exitosa con Sanity!')
    console.log('📊 Project ID:', client.config().projectId)
    console.log('🗂️ Dataset:', client.config().dataset)
    console.log('📄 Documentos encontrados:', result.length)
    return true
  } catch (error) {
    console.error('❌ Error conectando con Sanity:', error.message)
    return false
  }
}

// Ejecutar test
testSanityConnection()