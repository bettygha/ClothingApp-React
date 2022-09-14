import { useEffect } from 'react';
import {getRedirectResult} from 'react';

import { auth , signInWithGooglePopup , signInWithGoogleRedirect , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";
import SingUpForm from '../../component/sign-up-form/sign-up-form.component.jsx';

const SignIn = () => {
    // useEffect(async() => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);

    //     }

    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    };
   

    return (
        <div>
            <h1>
                Sign in page
                </h1>
                <button onClick={logGoogleUser}> Sign-In with Google Popoup </button>
                <button onClick={signInWithGoogleRedirect}> Sign-In with Google Redirect </button>
                <SingUpForm/>
        </div>
    )
}
export default SignIn ;