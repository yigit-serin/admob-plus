module.exports = {
  docs: {
    Cordova: [
      'cordova/installation',
      {
        'Ad Formats': [
          'cordova/ads/banner',
          'cordova/ads/interstitial',
          'cordova/ads/rewarded',
        ],
        'Advanced Topics': ['cordova/volume-control'],
        API: require('./sidebar/typedoc-cordova.js'),
      },
      'cordova/faq',
      {
        type: 'link',
        label: 'CHANGELOG',
        href:
          'https://github.com/admob-plus/admob-plus/blob/master/packages/cordova/CHANGELOG.md',
      },
    ],
    Ionic: [
      'ionic/installation',
      {
        'Ad Formats': [
          'ionic/ads/banner',
          'ionic/ads/interstitial',
          'ionic/ads/rewarded',
        ],
      },
      {
        type: 'link',
        label: 'CHANGELOG',
        href:
          'https://github.com/admob-plus/admob-plus/blob/master/packages/ionic/CHANGELOG.md',
      },
    ],
  },
}
