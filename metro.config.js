const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = {
    assets: ['./node_modules/react-native-vector-icons/Fonts'],
  };

  module.exports = {
    resolver: {
      assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg']
    }
  };
  