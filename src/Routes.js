import React from 'react'
import Login from './Components/Login'
import Questions from './Components/Questions'
import { useData } from './DataContext'

export default function Routes() {
    const dataContext = useData()

    switch(dataContext.selectedRoute){
        case "":
            return (<Login />)
        case "questions":
            return (<Questions />)
        case "result":
            return (<div>Answers</div>)
        default:
            return (<div>Invalid Route!</div>)
    }
}
