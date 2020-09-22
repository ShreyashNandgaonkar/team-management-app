import React, {useState, useEffect} from 'react';
import App from './App';
import fire from './fire';
import Login from './Login';

const Main=()=> {
    const  [user, setUser] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [emailError, setEmailError] = useState('');
    const  [passwordError, setPasswordError] = useState('');
    const  [hasAccount, setHasAccount] = useState(false);

    // To clear inputs
    const clearInput=()=>{
        setEmail('');
        setPassword('');
    }


    // To clear errors
    const clearError=()=>{
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin=()=>{
        clearError();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);

            }
        })
    }

    const handleSignUp =()=>{
        clearError();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);

            }
        })
    }

    const handleLogOut=()=>{
        fire.auth().signOut();
    }

    const authListener=()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                clearInput();
                setUser(user);
            }
            else{
                setUser('');
            }
        })
    }
   
    useEffect(()=>{
        authListener();
    },[])

    return (
        <div>
        {user? <App handleLogOut={handleLogOut}/> : 
            
            <Login 
            email={email}
            setEmail={setEmail}
            emailError={emailError}
            password={password}
            setPassword={setPassword}
            passwordError={passwordError}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            />}
        </div>
    )
}

export default Main
