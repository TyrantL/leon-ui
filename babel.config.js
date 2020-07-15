module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'leon-ui',
        style: true,
      },
    ],
  ],
};
