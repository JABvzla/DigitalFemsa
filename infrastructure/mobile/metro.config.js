const path = require('path');

const watchFolders = [path.resolve(__dirname + '/../common')];

const extraNodeModules = {
  'common': path.resolve(__dirname + '/../common'),
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
