import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB6vws6-TNlmyKF4xD6Wv8RQzAGQNWEn7M",
  authDomain: "course-registration-c40c7.firebaseapp.com",
  projectId: "course-registration-c40c7",
  storageBucket: "course-registration-c40c7.appspot.com",
  messagingSenderId: "40236651448",
  appId: "1:40236651448:web:c7df5a594efcf3abfdf54d"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();


  const register = async({email,password}) => {
      const resp = await auth
                    .createUserWithEmailAndPassword(email,password);
     return resp.user;
  }

  const login = async({email,password}) => {
      const resp = await auth
                        .signInWithEmailAndPassword(email, password);
                         return resp.user;
  }

  const logout = (msg = true) => {
    auth.signOut().then(() => {
        if(msg)
        alert("Logged out successfully!")
   }).catch((error) => {
      alert(error.message)
   });
}
 
  export {auth,register,login,logout} ;
  export default db;