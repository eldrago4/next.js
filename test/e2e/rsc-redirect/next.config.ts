import type { NextConfig } from 'next'

const config: NextConfig = {
  async redirects() {
    return [
      {
        source: '/next-config-redirect',
        destination: '/about',
        permanent: false,
      },
    ]
  },

  experimental: {
    // TODO: remove it to test flag auto enabled for all tests
    validateRSCRequestHeaders: true,
  },
}

export default config
