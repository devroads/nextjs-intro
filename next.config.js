/** @type {import('next').NextConfig} */
const nextConfig = {
    // photos host
    images: {
        domains: ['picsum.photos'],
    },
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig
