import React from 'react';
import './Login.css'


const Login=(props)=>{

    const {email, setEmail, emailError, password, setPassword, passwordError, handleLogin, handleSignUp, hasAccount, setHasAccount} = props;

    return(

        <section className="login">
        <div>
        <h1 className="Head1">Pro Organizer app</h1>
        <h3 className="Head2">To manage teams, tasks and much more.</h3>
        </div>
        
        <div className="loginContainer">
        <label>Username</label>
        <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)} />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
        {hasAccount ? (
            <div>
            <button className="btnPage" onClick={handleLogin}>Sign In</button>
            <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
            </div>
        ):(
            <div>
            <button className="btnPage" onClick={handleSignUp}> Sign Up</button>
            <p>Already have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span> </p>
            </div>
        )}
        </div>
        </div>
        </section>

    )
}


export default Login;