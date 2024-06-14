// next.config.mjs
const nextConfig = {
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=2592000', // 30 days
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  