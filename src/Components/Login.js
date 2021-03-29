import React from 'react'
import { useDataUpdate } from '../DataContext'

export default function Login() {
    const updateDataContext = useDataUpdate()

    const isEmailValid = (emailAddress) => {
        if (emailAddress<1) return false
        const re = /\S+@\S+\.\S+/
        const isValid = re.test(emailAddress)===true

        if(!isValid){
            return false
        }
        return true
    }

    const submitEmail = (e) => {
        e.preventDefault()
        const email = e.target[0].value
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
                    <form onSubmit={submitEmail}>
                        <input className="customInputField" placeholder="username@example.com" type="email" />
                        <button style={{ marginTop: 10 }} className="customButton">Start Quiz!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
