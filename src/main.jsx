import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp';
import { app } from './config';
import firebase from 'firebase/compat/app';

const App = () => {

  firebase.initializeApp(app);
  return (
    <React.Fragment>
      <SignUp auth={firebase.auth()} />
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
