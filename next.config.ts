/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // مهم‌ترین خط — سایت استاتیک می‌شه
  trailingSlash: true,        // برای لینک‌ها بهتر کار کنه
  images: {
    unoptimized: true         // GitHub Pages از بهینه‌سازی تصویر Next.js پشتیبانی نمی‌کنه
  },
};

export default nextConfig;