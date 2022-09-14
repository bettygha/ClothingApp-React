import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    return (
        <div>
            <h1>
                Sign in page
                </h1>
                <button onClick={logGoogleUser}> Sign-In with Google Popoup </button>
         
        </div>
    )
}
export default SignIn ;