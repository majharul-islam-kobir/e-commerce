import { AuthContext } from '../context'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';

function AuthProvider({children}) {


 const createUser = (email , password) => {
    return createUserWithEmailAndPassword(auth, email, password)
 };

 const signIn = (email , password )  => {
    return signInWithEmailAndPassword (auth , email , password)
 }

  const name = "jacam";

    const authInfo = {
        name,
        createUser,
        signIn,

    }
  

  return  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
  
}

export default AuthProvider
