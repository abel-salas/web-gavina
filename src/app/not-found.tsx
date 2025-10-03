import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Página no encontrada</h2>
        <p className="text-gray-500 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Idiomas disponibles:</p>
          <div className="flex justify-center gap-4">
            <Link href="/es/" className="text-blue-600 hover:underline">🇪🇸 Español</Link>
            <Link href="/en/" className="text-blue-600 hover:underline">🇬🇧 English</Link>
            <Link href="/ca/" className="text-blue-600 hover:underline">🏴󠁥󠁳󠁣󠁴󠁿 Català</Link>
            <Link href="/nl/" className="text-blue-600 hover:underline">🇳🇱 Nederlands</Link>
          </div>
        </div>
      </div>
    </div>
  );
}