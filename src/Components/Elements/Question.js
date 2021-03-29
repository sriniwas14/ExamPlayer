import React from 'react'
import { Container } from 'react-bootstrap'
import { useData, useDataUpdate } from '../../DataContext'

export default function Question(props) {
    const dataContext = useData()
    const updateDataContext = useDataUpdate()

    const handleRadioClick = (e) => {
        const questionContainer = document.querySelector(".questionContainer")
        questionContainer.classList.add("fadeOut")
        updateDataContext.setAnswerKey({ [props.question.id]: parseInt(e.target.value) })

        setTimeout(()=> { 
            props.nextQuestion()

            const lastQuestion = dataContext.questions[dataContext.questions.length - 1]
            if(lastQuestion.id===props.question.id) return
            questionContainer.classList.remove("fadeOut")
        }, 400)

    }
    return (
        <div>
            <Container>
                <div className="questionContainer">
                    <div className="questionIdContainer">
                        <h5>{props.question.id})</h5>
                    </div>
                    <div className="questionBody">
                        <h5>{props.question.question}</h5>
                        <br/><br/>
                        {
                            props.question.options.map((option, index) => <div className="questionOption" key={option}><input type="radio" id={index} checked={dataContext.answers[props.question.id]===index} onChange={handleRadioClick} name="answer" value={index} /><label htmlFor={index} >{option}</label></div>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
