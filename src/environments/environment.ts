// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  countryFlagUrl: 'https://flagcdn.com/w2560/za.png',
  API_KEY_WEATHER: '529bef30b983a0e311e55beab472b924',
  openWeatherUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
  API_KEY_GOOGLE: 'AIzaSyDp8wiItsPsn93yq58P-OfSb0KUKaeLj40',

  production: false,
  firebase: {
    config: {
      apiKey: 'AIzaSyBTf8H0vI8QM9WX4pLeHniMPISRykD14AM',
      authDomain: 'tennis-4268b.firebaseapp.com',
      projectId: 'tennis-4268b',
      storageBucket: 'tennis-4268b.appspot.com',
      messagingSenderId: '951307223428',
      appId: '1:951307223428:web:44343ad1dbe26e1eb35dd1',
    },
    actionCodeSettings: {
      url: 'http://localhost:60822/static/welcome',
      handleCodeInApp: true,
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
