import React from 'react'
import { Container } from 'react-bootstrap'
import { useData, useDataUpdate } from '../../DataContext'

export default function Question(props) {
    const dataContext = useData()
    const updateDataContext = useDataUpdate()

    const handleRadioClick = (e) => {
        updateDataContext.setAnswerKey({ [props.question.id]: parseInt(e.target.value) })
        props.nextQuestion()
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
                            props.question.options.map((option, index) => <div className="questionOption" key={option}><input type="radio" checked={dataContext.answers[props.question.id]===index} onChange={handleRadioClick} name="answer" value={index} />{option}</div>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
