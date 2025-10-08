import React from 'react';
import { getDictionary } from '../../lib/getDictionary';
import { CONTACT_INFO } from '../../lib/contact-info';
import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  
  return {
    title: `Aviso Legal - ${dict.seo.siteName}`,
    description: 'Aviso legal del sitio web del Restaurante Banys La Gavina',
  };
}

export default async function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Aviso Legal
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Información General</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
              de la Información y de Comercio Electrónico, se informa de los siguientes aspectos 
              legales:
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Datos del Titular</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Denominación:</strong> Banys La Gavina</p>
              <p><strong>Dirección:</strong> {CONTACT_INFO.address}</p>
              <p><strong>Teléfono:</strong> {CONTACT_INFO.phone}</p>
              <p><strong>Email:</strong> {CONTACT_INFO.email}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Objeto</h2>
            <p>
              El presente sitio web tiene por objeto la presentación de información sobre el 
              restaurante Banys La Gavina, sus servicios gastronómicos, ubicación, horarios 
              y facilitar el contacto con nuestros clientes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Condiciones de Uso</h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación expresa y sin reservas 
              de todas las condiciones de uso aquí establecidas. Si no está de acuerdo con 
              alguna de estas condiciones, no utilice este sitio web.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
              <li>El uso del sitio web es gratuito, salvo en lo relativo al coste de la conexión</li>
              <li>Se prohíbe el uso indebido del sitio web y de sus contenidos</li>
              <li>Está prohibida la reproducción total o parcial sin autorización expresa</li>
              <li>No se permite el uso comercial de la información contenida en el sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Responsabilidad</h2>
            <p>
              El titular del sitio web no se hace responsable de:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
              <li>Los daños que puedan derivarse del uso indebido del sitio web</li>
              <li>La interrupción, suspensión o cancelación del acceso al sitio web</li>
              <li>Los contenidos de sitios web de terceros enlazados desde este sitio</li>
              <li>Los errores, inexactitudes u omisiones en los contenidos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, marcas, logotipos, etc.) 
              están protegidos por derechos de propiedad intelectual e industrial del titular 
              o de terceros que han autorizado su uso.
            </p>
            <p className="mt-4">
              Queda prohibida la reproducción, distribución, comunicación pública, transformación 
              o cualquier otra actividad que se pueda realizar con los contenidos sin la 
              autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Enlaces Externos</h2>
            <p>
              Este sitio web puede contener enlaces a páginas web de terceros. El titular 
              no se responsabiliza del contenido de dichas páginas ni de las condiciones 
              de uso que establezcan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Modificaciones</h2>
            <p>
              El titular se reserva el derecho a modificar en cualquier momento las condiciones 
              de uso del sitio web, así como eliminar, limitar o impedir el acceso cuando 
              lo considere oportuno.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Legislación Aplicable</h2>
            <p>
              Las presentes condiciones se regirán por la legislación española. Para cualquier 
              controversia que pudiera derivarse del acceso o uso del sitio web, las partes 
              se someterán a la jurisdicción de los tribunales competentes de Barcelona.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">10. Información sobre Cookies</h2>
            <p className="text-blue-800">
              <strong>Este sitio web NO utiliza cookies.</strong> No se instalan cookies 
              en el dispositivo del usuario ni se realiza seguimiento de la actividad de 
              navegación. Por tanto, no es necesario el consentimiento para el uso de cookies.
            </p>
          </section>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Última actualización:</strong> 8 de octubre de 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}