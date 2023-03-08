const path = require('path');

const watchFolders = [
  path.resolve(__dirname + '/../application'),
  path.resolve(__dirname + '/../domain'),
];

const extraNodeModules = {
  application: path.resolve(__dirname + '/../application'),
  domain: path.resolve(__dirname + '/../domain'),
};

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
