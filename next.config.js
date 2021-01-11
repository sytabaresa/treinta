const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPWA, {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      register: true,
      scope: '/app',
      sw: 'service-worker.js',
    },
  }],
], {
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack(config, options) {

    // config.plugins.push(new FaviconsWebpackPlugin('./public/assets/logo-small.png') 
    )


    return config
  }
})
