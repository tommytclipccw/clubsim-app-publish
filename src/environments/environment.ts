// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: 'http://www.tommyltc.com/_/',
  firebase: {
    apiKey: 'AIzaSyD4K_HT0mYdkBsFgtFh9yoNQdJlplFAYwo',
    authDomain: 'clubsim-tools.firebaseapp.com',
    databaseURL: 'https://clubsim-tools.firebaseio.com',
    projectId: 'clubsim-tools',
    storageBucket: 'clubsim-tools.appspot.com',
    messagingSenderId: '995554601137'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
