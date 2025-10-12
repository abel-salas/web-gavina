// Configuración de certificados SSL para desarrollo
// Este archivo se usa solo en desarrollo local

if (typeof window === 'undefined' && process.env.NODE_ENV === 'development') {
  // Solo en servidor durante desarrollo
  try {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
    console.log('🔓 SSL verification disabled for local development');
  } catch (error) {
    console.warn('⚠️  Could not configure SSL for development:', error);
  }
}

export {}; // Make this a module