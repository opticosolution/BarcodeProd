// {
//   "expo": {
//     "name": "DemoBarcode",
//     "slug": "BarcodeScannerApp",
//     "version": "1.0.0",
//     "orientation": "portrait",
//     "icon": "./assets/icon.png",
//     "userInterfaceStyle": "automatic",
//     "splash": {
//       "image": "./assets/logo.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#ffffff"
//     },
//     "updates": {
//       "fallbackToCacheTimeout": 0
//     },
//     "assetBundlePatterns": [
//       "**/*"
//     ],
//     "ios": {
//       "supportsTablet": true,
//       "infoPlist": {
//         "NSCameraUsageDescription": "Allow BarcodeScan to access your camera for barcode scanning."
//       }
//     },
//     "android": {
//       "adaptiveIcon": {
//         "foregroundImage": "./assets/adaptive-icon.png",
//         "backgroundColor": "#ffffff"
//       },
//       "package": "com.example.DemoBarcode",
//       "permissions": [
//         "CAMERA",
//         "INTERNET",
//         "android.permission.CAMERA"
//       ]
//     },
//     "web": {
//       "favicon": "./assets/favicon.png"
//     },
//     "plugins": [
//       [
//         "react-native-vision-camera",
//         {
//           "cameraPermissionText": "Allow BarcodeScan to access your camera for barcode scanning."
//         }
//       ],
//       "expo-notifications",
//       "expo-barcode-scanner"
//     ],
//     "owner": "balmukundoptico",
//     "extra": {
//       "eas": {
//         "projectId": "70d9e600-c54a-435a-b211-5b02ad66722a"
//       }
//     },
//     "newArchEnabled": true
//   }
// }


const withCleartextTraffic = require('./withCleartextTraffic');

module.exports = {
  expo: {
    name: 'ProdBarcodeAws',
    slug: 'BarcodeProdAws',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/logo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSCameraUsageDescription: 'Allow BarcodeScan to access your camera for barcode scanning.',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.expoopticosolutions.prodbarcode',
      permissions: [
        'CAMERA',
        'INTERNET',
        'android.permission.CAMERA',
      ],
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      [
        'react-native-vision-camera',
        {
          cameraPermissionText: 'Allow BarcodeScan to access your camera for barcode scanning.',
        },
      ],
      'expo-notifications',
      'expo-barcode-scanner',
      withCleartextTraffic, // 👈 Your custom plugin
    ],
     "extra": {
      "eas": {
        "projectId": "ecd1111d-d1c1-45e6-9c21-c0f8ff5baeeb"
      }
    },
    newArchEnabled: true,
  },
};
