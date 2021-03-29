import React, { useContext, useState } from 'react'

const questions = [
{
    id: "Q1",
    question: "Is JavaScript a case-sensitive language?",
    correctAnswer: 0,
    options: ["true", "false"]
},
{
    id: "Q2",
    question: "Which of the following is true about cookie handling in JavaScript?",
    correctAnswer: 2,
    options: ["JavaScript can manipulate cookies using the cookie property of the Document object.",
        "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
        "Both of the above.",
        "None of the above."
    ]
},
{
    id: "Q3",
    question: "Which of the following type of variable takes precedence over other if names are same?",
    correctAnswer: 1,
    options: ["global variable",
        "local variable",
        "Both of the above.",
        "None of the above."
    ]
},
{
    id: "Q4",
    question: "Which built-in method sorts the elements of an array?",
    correctAnswer: 2,
    options: ["changeOrder(order)",
        "order()",
        "sort()",
        "None of the above."
    ]
},
{
    id: "Q5",
    question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
    correctAnswer: 0,
    options: ["toSource()",
        "valueOf()",
        "toString()",
        "None of the above."
    ]
},
{
    id: "Q6",
    question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
    correctAnswer: 1,
    options: ["A - slice()",
        "B - split()",
        "C - replace()",
        "D - search()",
    ]
},
{
    id: "Q7",
    question: "Which of the following function of String object returns the calling string value converted to lower case?",
    correctAnswer: 1,
    options: ["toLocaleLowerCase()",
        "toLowerCase()",
        "toString()",
        "substring()"
    ]
},
{
    id: "Q8",
    question: "Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
    correctAnswer: 2,
    options: ["fixed()",
        "fontcolor()",
        "fontsize()",
        "bold()"
    ]
}
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
    const [answers, setAnswers] = useState({})

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
