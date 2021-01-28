require.extensions['.css'] = () => {
  return;
};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))


    config.plugins.push(new webpack.ProvidePlugin({
      "React": "react",
    }),)

    // Important: return the modified config
    return config
  },

  images: {
    domains: ['localhost'],
  },
}
