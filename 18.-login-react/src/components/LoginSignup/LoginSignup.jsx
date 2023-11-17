import React from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    return (
        <div>
            <div className="countainer">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
            <div className="input">
                <div className="inputs">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="username" />
                </div>
                </div>
                <div className="inputs">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="email" />
                </div>
                <div className="inputs">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="password" />
                </div>  
                <div className="forgot-password"><span>Lost Password?</span></div>
                <div className="submit-countainer">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
            </div>
        </div>
    )
}

export default LoginSignup