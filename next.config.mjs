/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plausible.io;
              connect-src 'self' https://plausible.io;
              img-src 'self' blob: data:;
              style-src 'self' 'unsafe-inline';
              font-src 'self';
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self';
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ],
      },
    ];
  },
  basePath: "/portfolioPrototype",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
