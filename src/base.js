import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'


 const config = {
    apiKey: "AIzaSyBC-_SQ16bFt4dwPRzRK_hoCj4W9xriNbE",
    authDomain: "chattering-9b1b6.firebaseapp.com",
    databaseURL: "https://chattering-9b1b6.firebaseio.com",
    projectId: "chattering-9b1b6",
    storageBucket: "chattering-9b1b6.appspot.com",
    messagingSenderId: "1009749403585"
  };
  
const app = firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base 

