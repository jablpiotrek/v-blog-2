import firebase from 'firebase/app'
import 'firebase/firestore'

import firebaseConfig from '@/assets/config/firebase-config'
import firestoreSettings from '@/assets/config/firestore-settings'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings(firestoreSettings)
}

const firestore = firebase.firestore()
export default firestore.collection(firebaseConfig.postsCollection)
