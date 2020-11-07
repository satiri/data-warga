import firebase from 'firebase'

// update this from local firebaseConfig.js
const firebaseConfig = {
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampInSnapshots: true })

// export
export default firebaseApp.firestore()
