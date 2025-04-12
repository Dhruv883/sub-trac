const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Update the input path here
module.exports = withNativeWind(config, { input: "./app/globals.css" });
