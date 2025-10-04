import { getLocalizedData } from "@/app/lib/localization";
// import Image from "next/image"; // Descomentarlo cuando tengas imágenes reales

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { dict } = getLocalizedData(locale);

  // Imágenes de ejemplo para la galería
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder-food-1.jpg",
      alt: "Delicious pasta dish",
      title: "Pasta Artesanal"
    },
    {
      id: 2,
      src: "/placeholder-food-2.jpg",
      alt: "Fresh salad",
      title: "Ensalada Fresca"
    },
    {
      id: 3,
      src: "/placeholder-food-3.jpg",
      alt: "Grilled meat",
      title: "Carne a la Parrilla"
    },
    {
      id: 4,
      src: "/placeholder-food-4.jpg",
      alt: "Dessert",
      title: "Postre Casero"
    },
    {
      id: 5,
      src: "/placeholder-restaurant-1.jpg",
      alt: "Restaurant interior",
      title: "Nuestro Ambiente"
    },
    {
      id: 6,
      src: "/placeholder-restaurant-2.jpg",
      alt: "Restaurant terrace",
      title: "Terraza Exterior"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{dict.gallery.title}</h1>
        <p className="text-xl text-gray-600">{dict.gallery.subtitle}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64 bg-gray-200 flex items-center justify-center">
              {/* Placeholder para las imágenes */}
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm">{image.title}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Imagen: {image.src}
                </p>
              </div>

              {/* Cuando tengas las imágenes reales, puedes usar esto: */}
              {/* 
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              */}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
              <p className="text-gray-600 text-sm">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h2>
        <p className="text-gray-600 mb-6">
          Ven y disfruta de estos deliciosos platos en nuestro acogedor restaurante
        </p>
        <div className="flex justify-center gap-4">
          <a
            href={`/${locale}/menu`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Menú Completo
          </a>
          <a
            href={`/${locale}/contact`}
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Hacer Reserva
          </a>
        </div>
      </section>
    </main>
  );
}