import React, { useEffect } from "react";
import * as firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';

const SignUp = (props) => {
   useEffect(() => {
      const ui = firebaseui.auth.AuthUI.getInstance || new firebaseui.auth.AuthUI(props.auth)
      ui.start('.sign-up-container', {
         signInOptions: [
            {
               porvider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
               requireDisplayName: false,
            }
         ],
         signSuccessUrl: '/authenticated',
         privacyPolicyUrl: '/'
      }) 
   }, [props.auth]);

   
   return (
      <div className="sign-up-container">
         <h1>Loading...</h1>
      </div>
   );
};

export default SignUp;