import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useData } from '../DataContext'

const ResultHeaderItem = (props) => {
    return (
        <Col sm={4}>
            <div className="resultHeaderItem">
                <h3>{ props.title }</h3>
                <h1>{ props.value }</h1>
            </div>
        </Col>
    )
}

export default function Result() {
    const dataContext = useData()

    const answerStats = function () {
        let rightAnswers = 0;
        let wrongAnswers = 0;
        
        dataContext.questions.forEach((question, index) => {
            if(question.correctAnswer===dataContext.answers[question.id]){
                rightAnswers++;
                return
            }
            wrongAnswers++;
        })

        return {
            rightAnswers,
            wrongAnswers,
            totalAnswers: rightAnswers + wrongAnswers,
            marks: Math.round((rightAnswers/(rightAnswers+wrongAnswers))*100)
        }
    }()
    
    return (
        <div>
            <div className="resultHeader">
                <h1>Exam Result</h1>
                <b>for {dataContext.userEmail}</b>
            </div>

            <div></div>

            <Container style={{ marginTop: "20px", marginBottom: "20px"}}>
                <Row>
                    <ResultHeaderItem title="Right Answers" value={ answerStats.rightAnswers } />
                    <ResultHeaderItem title="Wrong Answers" value={ answerStats.wrongAnswers } />
                    <ResultHeaderItem title="Total Questions" value={ answerStats.totalAnswers } />
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col sm={2}>
                        <CircularProgressbar className={`resultCircularProgressBar ${ answerStats.marks<dataContext.passingMarks ? "errorColor" : "successColor" }`} maxValue={answerStats.totalAnswers} value={answerStats.rightAnswers} text={`${answerStats.marks}%`} />
                    </Col>
                    <Col sm={4} style={{ display: "flex", alignItems: "center" }}>
                        <div>
                        {
                            answerStats.marks<dataContext.passingMarks ? (<h2>You Failed!</h2>) : (<h2> You Passed!</h2>)
                        }
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <br />
                <h2>Questions Overview</h2>
                <br />
            </Container>

            <Container>
            { 
                dataContext.questions.map(question => (
                    <div className="resultReviewQuestion" key={question.id}>
                        <h4>{`${question.id}) ${question.question}`}</h4>
                        <h5 className={`resultReviewQuestionGivenAnswer ${question.correctAnswer===dataContext.answers[question.id] ? "correctAnswer" : "wrongAnswer"}`}>Given Answer: {question.options[dataContext.answers[question.id]]}</h5>
                        <h5>Right Answer: {question.options[question.correctAnswer]}</h5>
                    </div>
                ))
            }
            </Container>
        </div>
    )
}
