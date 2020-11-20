/**
 * doc: https://firebase.google.com/docs/firestore/manage-data/add-data
**/

import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampInSnapshots: true })

// export
export default firebaseApp.firestore()
