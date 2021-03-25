import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import { useData, useDataUpdate } from '../DataContext'
import Question from './Elements/Question'

export default function Questions() {
    const dataContext = useData()
    const updateDataContext = useDataUpdate()
    const numberOfQuestions = dataContext.questions.length;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const handleFinish = () => {
        updateDataContext.setSelectedRoute("result")
    }

    return (
        <div className="questionsContainer">
            <div className="questionsHeader">
                <div>Exam Player</div>
                <Button variant="light">Log Out</Button>
            </div>

            <div className="questionsArea">
                <Question question={dataContext.questions[currentQuestionIndex]} />
            </div>

            <div className="questionsFooter">
                <Row>
                    <Col sm={4}>
                        <ButtonGroup>
                            <Button onClick={() => setCurrentQuestionIndex(val => val-1)} disabled={ currentQuestionIndex===0 ? true : false } variant="primary">Previous</Button>
                            <Button onClick={() => setCurrentQuestionIndex(val => val+1)} disabled={ currentQuestionIndex===numberOfQuestions-1 ? true : false } variant="primary">Next</Button>
                        </ButtonGroup>
                    </Col>
                    <Col style={{ textAlign: "center", fontSize: 17, padding: 6, color: "#353535" }} sm={4}>
                        Question {currentQuestionIndex+1} of {numberOfQuestions}
                    </Col>
                    <Col style={{ textAlign: "right" }} sm={4}>
                        <Button style={{ marginLeft: "auto" }} onClick={handleFinish} variant="success">Finish</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
