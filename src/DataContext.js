import React, { useContext, useState } from 'react'

const questions = [
    { id: "A", question: "What is my name?", correctAnswer: 1, options: ["Alan", "Sriniwas", "Raju", "Krishna"] },
    { id: "B", question: "What do you do for a living?", correctAnswer: 3, options: ["Pilot", "Postman", "Begger", "Mercenary"] },
    { id: "C", question: "Where do you live?", correctAnswer: 2, options: ["China", "Nepal", "India", "Pakistan"] }
]

const DataContext = React.createContext()
const DataUpdaterContext = React.createContext()

export function useData() {
    return useContext(DataContext)
}

export function useDataUpdate() {
    return useContext(DataUpdaterContext)
}

export function DataProvider({ children }) {
    const [selectedRoute, setSelectedRoute] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [answers, setAnswers] = useState("")

    const setAnswerKey = (newAnswer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            ...newAnswer
        }))
    }

    return (
        <DataContext.Provider value={
            {
                selectedRoute,
                userEmail,
                questions,
                answers,
                passingMarks: 60
            }
        }>
            <DataUpdaterContext.Provider value={
                {
                    setSelectedRoute,
                    setUserEmail,
                    setAnswerKey
                }
            }>
                { children }
            </DataUpdaterContext.Provider>
        </DataContext.Provider>
    )
}
