import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAjJ8HCpeI7YBsqnoZY-psXeEOOM3dcY_k",
    authDomain: "coursemanagement-dee62.firebaseapp.com",
    projectId: "coursemanagement-dee62",
    storageBucket: "coursemanagement-dee62.appspot.com",
    messagingSenderId: "63666729826",
    appId: "1:63666729826:web:ff5e0874d63109d45cb23b"
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

  const checkalongrole = async(uid,role) => {
      const query = await db.collection(role).where(firebase.firestore.FieldPath.documentId(), '==', uid).get();
      console.log(query)
      return query;
  }
  export {auth,register,login,checkalongrole} ;
  export default db;