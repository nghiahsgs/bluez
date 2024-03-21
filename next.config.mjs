/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/waiting-order',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
