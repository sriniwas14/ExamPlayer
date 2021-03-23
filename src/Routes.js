import React from 'react'
import { useData } from './DataContext'

export default function Routes() {
    const dataContext = useData()

    switch(dataContext.selectedRoute){
        case "":
            return (<div>Login</div>)
        case "questions":
            return (<div>Questions</div>)
        case "result":
            return (<div>Answers</div>)
        default:
            return (<div>Invalid Route!</div>)
    }
}
