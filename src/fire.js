import fire from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7hl1BMv6UqlzwNyI9XRkLXTxn6MIPFi0",
  authDomain: "react-fire-auth-a152e.firebaseapp.com",
  projectId: "react-fire-auth-a152e",
  storageBucket: "react-fire-auth-a152e.appspot.com",
  messagingSenderId: "980604195366",
  appId: "1:980604195366:web:a18c4df79d06e8e2618ce7"
};
export default fire.initializeApp(firebaseConfig)