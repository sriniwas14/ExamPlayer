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
        setTimeout(() => updateDataContext.setSelectedRoute("result"), 1000)
        
    }

    const handleLogOut = () => {
        updateDataContext.setSelectedRoute("")
        updateDataContext.setAnswers({})
        updateDataContext.setUserEmail("")
    }

    const nextQuestion = (delay) => {
        if(currentQuestionIndex>=dataContext.questions.length-1){
            if (delay) handleFinish()
            return
        }

        const timeoutDuration = delay===true ? 800 : 0

        setTimeout(()=> {
            setCurrentQuestionIndex(val => val+1) 
        }, timeoutDuration)
    }

    const previousQuestion = async () => {
        if(currentQuestionIndex<=0) return
        setCurrentQuestionIndex(val => val-1)
    }

    return (
        <div className="questionsContainer">
            <div className="questionsHeader">
                <div>Exam Player</div>
                <Button onClick={handleLogOut} variant="light">Log Out</Button>
            </div>

            <div className="questionsArea">
                <Question nextQuestion={() => nextQuestion(true)} question={dataContext.questions[currentQuestionIndex]} />
            </div>

            <div className="questionsFooter">
                <Row>
                    <Col sm={4}>
                        <ButtonGroup>
                            <Button onClick={() => previousQuestion()} disabled={ currentQuestionIndex===0 ? true : false } variant="primary">Previous</Button>
                            <Button onClick={() => nextQuestion(false)} disabled={ currentQuestionIndex===numberOfQuestions-1 ? true : false } variant="primary">Next</Button>
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
