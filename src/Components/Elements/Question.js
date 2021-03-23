import React from 'react'
import { Container } from 'react-bootstrap'

export default function Question(props) {
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
                            props.question.options.map((option, index) => <div className="questionOption" key={option}><input type="radio" name="answer" value={index} />{option}</div>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}
