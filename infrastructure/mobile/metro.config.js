const path = require('path');

const watchFolders = [
  path.resolve(`${__dirname}/../../infrastructure`),
  path.resolve(`${__dirname}/../../application`),
  path.resolve(`${__dirname}/../../domain`),
];

const extraNodeModules = {
  infrastructure: path.resolve(`${__dirname}/../../infrastructure`),
  application: path.resolve(`${__dirname}/../../application`),
  domain: path.resolve(`${__dirname}/../../domain`),
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
