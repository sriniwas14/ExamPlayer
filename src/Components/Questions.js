import React, { useState } from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { useData, useDataUpdate } from '../DataContext'
import Question from './Elements/Question'
import { AiOutlinePoweroff, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";

export default function Questions() {
    const dataContext = useData()
    const updateDataContext = useDataUpdate()
    const numberOfQuestions = dataContext.questions.length;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const animPropsAboutMe = useSpring({ to:{opacity: 1, transform: 'rotateX(0deg)'}, from: { opacity: 0, transform: 'rotateX(90deg)' }});

    const handleFinish = () => {
        setTimeout(() => updateDataContext.setSelectedRoute("result"), 450)
        
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

        setCurrentQuestionIndex(val => val+1)
    }

    const previousQuestion = async () => {
        if(currentQuestionIndex<=0) return
        setCurrentQuestionIndex(val => val-1)
    }

    return (
        <div className="questionsContainer">
            <animated.div style={ animPropsAboutMe } className="questionsHeader">
                <div>Exam Player</div>
                <Button onClick={handleLogOut} variant="light"><AiOutlinePoweroff size="18" /> Log Out</Button>
            </animated.div>

            <animated.div style={ animPropsAboutMe } className="questionsArea">
                <Question nextQuestion={() => nextQuestion(true)} question={dataContext.questions[currentQuestionIndex]} />
            </animated.div>

            <animated.div style={ animPropsAboutMe } className="questionsFooter">
                <Row>
                    <Col sm={4}>
                        <ButtonGroup>
                            <Button onClick={() => previousQuestion()} disabled={ currentQuestionIndex===0 ? true : false } variant="primary"><AiOutlineArrowLeft size="24" /> Previous</Button>
                            <Button onClick={() => nextQuestion(false)} disabled={ currentQuestionIndex===numberOfQuestions-1 ? true : false } style={{ marginLeft: 5 }} variant="primary">Next <AiOutlineArrowRight size="24" /></Button>
                        </ButtonGroup>
                    </Col>
                    <Col style={{ textAlign: "center", fontSize: 17, padding: 6, color: "#353535" }} sm={4}>
                        Question {currentQuestionIndex+1} of {numberOfQuestions}
                    </Col>
                    <Col style={{ textAlign: "right" }} sm={4}>
                        <Button style={{ marginLeft: "auto" }} onClick={handleFinish} variant="success"><AiOutlineCheck size="24" /> Finish</Button>
                    </Col>
                </Row>
            </animated.div>
        </div>
    )
}
