import React, { useContext, useState } from 'react'

const questions = [
    { id: "A", question: "What is my name?", options: ["Alan", "Sriniwas", "Raju", "Krishna"] },
    { id: "B", question: "What do you do for a living?", options: ["Pilot", "Postman", "Begger", "Mercenary"] },
    { id: "A", question: "Where do you live?", options: ["China", "Nepal", "India", "Pakistan"] }
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
    const [selectedRoute, setSelectedRoute] = useState("questions")
    const [userEmail, setUserEmail] = useState("")

    return (
        <DataContext.Provider value={
            {
                selectedRoute,
                userEmail,
                questions
            }
        }>
            <DataUpdaterContext.Provider value={
                {
                    setSelectedRoute,
                    setUserEmail
                }
            }>
                { children }
            </DataUpdaterContext.Provider>
        </DataContext.Provider>
    )
}
