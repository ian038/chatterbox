import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyATxMav8J1xkT106fLKNElrFh-kN7M_NrY",
    authDomain: "chatterbox-f0eee.firebaseapp.com",
    projectId: "chatterbox-f0eee",
    storageBucket: "chatterbox-f0eee.appspot.com",
    messagingSenderId: "28514395475",
    appId: "1:28514395475:web:b916e3fcdd6777b7416da6",
    measurementId: "G-T6W9REW67M"
}).auth()

