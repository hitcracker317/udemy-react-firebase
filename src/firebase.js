import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCMQSp5QhTLOYTeoYANJ1wVLoy7V0BqHyc",
  authDomain: "idobatakaigi-react-ae559.firebaseapp.com",
  databaseURL: "https://idobatakaigi-react-ae559-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-react-ae559",
  storageBucket: "idobatakaigi-react-ae559.appspot.com",
  messagingSenderId: "83999182498",
  appId: "1:83999182498:web:69d34ce331e346412bd1fb"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messageRef = database.ref('messages') //データベースの参照先の指定

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text })
}