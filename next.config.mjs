/** @type {import('next').NextConfig} */
const nextConfig = {
  // Formatos modernos para cuando lleguen las fotos reales (WebP/AVIF).
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
