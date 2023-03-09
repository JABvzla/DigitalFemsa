const path = require('path');
const watchFolders = [path.resolve(`${__dirname}/../../`)];
const extraNodeModules = {
  root: path.resolve(`${__dirname}/../../`),
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
  projectRoot: path.resolve(__dirname),
};
