import firebase from 'firebase'
// import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBlWBUg_qp66UMeQC1qBzxe6_1MgZMgEXk",
    authDomain: "data-warga-b8625.firebaseapp.com",
    databaseURL: "https://data-warga-b8625.firebaseio.com",
    projectId: "data-warga-b8625",
    storageBucket: "data-warga-b8625.appspot.com",
    messagingSenderId: "1040772955208",
    appId: "1:1040772955208:web:88d75ad6eab7cd88f2ec7d"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampInSnapshots: true })

// export
export default firebaseApp.firestore()
