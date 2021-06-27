// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // base_URL: 'http://localhost:3000/api',
  base_URL: 'https://node-equipos.herokuapp.com/api',
  url: 'http://localhost:5000/prototipo-b6be2/us-central1',
  firebaseConfig: {
    apiKey: 'AIzaSyCAz9Bj2soSp39gMiOQdtfBC5ShHW8ITSQ',
    authDomain: 'prototipo-b6be2.firebaseapp.com',
    projectId: 'prototipo-b6be2',
    storageBucket: 'prototipo-b6be2.appspot.com',
    messagingSenderId: '380587470215',
    appId: '1:380587470215:web:0097bef4966d6acbb07722'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
