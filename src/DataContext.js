import React, { useContext, useState } from 'react'

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

    return (
        <DataContext.Provider value={
            {
                selectedRoute,
                userEmail
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
