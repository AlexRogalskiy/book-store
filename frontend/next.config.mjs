/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_BASE_URL: 'http://localhost:8080'
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
