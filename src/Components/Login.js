import React, { useRef } from 'react'
import { useDataUpdate } from '../DataContext'

export default function Login() {
    const updateDataContext = useDataUpdate()

    const emailInputRef = useRef()

    const isEmailValid = (emailAddress) => {
        if (emailAddress<1) return false
        const re = /\S+@\S+\.\S+/
        const isValid = re.test(emailAddress)===true

        if(!isValid){
            return false
        }
        return true
    }

    const submitEmail = () => {
        const email = emailInputRef.current.value
        if(isEmailValid(email)){
            updateDataContext.setSelectedRoute("questions")
            updateDataContext.setUserEmail(email)
        }
    }

    return (
        <div className="loginContainer">
            <div className="loginDialog">
                <div className="loginHeader">
                    Exam Player
                </div>
                <div className="loginBody">
                    All Questions are timed
                    <br /><br />
                    Results will be shown at the end
                    <br /><br />
                    Please Enter your E-mail to Continue

                    <br /><br />
                    <input ref={emailInputRef} className="customInputField" placeholder="username@example.com" type="email" />
                    <button style={{ marginTop: 10 }} onClick={submitEmail} className="customButton">Start Quiz!</button>
                </div>
            </div>
        </div>
    )
}
