import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Login");


  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h3>{currentState}</h3>
            </div>
            <div className="login-popup-inputs">
                
                {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}<br/>
                <input type="email" placeholder='Your Email' required /><br/>
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currentState==="Sign Up"?"Creat Account":"Login"}</button>
            <div className="login-popup-condition">
                <p><input type="checkbox" required /> I agree with the terms of use & privacy policy.</p>
            </div>
            {currentState==="Login"?<p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>:
                                    <p>Already have an account. <span onClick={() => setCurrentState("Login")}>Login  here</span></p>}
            <button onClick={() => setShowLogin(false)}>Close</button>
            
        </form>
        
    </div>
  )
}

export default LoginPopup