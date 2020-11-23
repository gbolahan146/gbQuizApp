import React, { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Questionnaire from "./Questionnaire";


const API_URL =
  "https://opentdb.com/api.php?amount=30&type=multiple";

const QuizCard = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json(console.log(res.results)))
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      // increase the score
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setQuizEnded(true);
    }
  };
  return quizEnded ? (
    <Card className="quizCard">
      <CardImg
        top
        width="300px"
        height="300px"
        src={props.img}
        alt="Cards Image"
      />
      <CardBody>
        <CardTitle className="cardTitle">{props.title}</CardTitle>
        <CardText className="cardDesc">Thank you for playing.</CardText>
        <p className="score">Your Final Score is {score}/{questions.length}</p>
       { score <=questions.length*0.4 ?
          <p>Quite poor my g</p> : score >=questions.length*0.8 ? <p>Excellent work </p> :  <p>Good  work </p> }
        
      </CardBody>
      
      <p> Refresh page to Try again</p>
               
            
    </Card>
  ) : (
    <>
      <Card className="quizCard">
        <CardImg
          top
          width="300px"
          height="300px"
          src={props.img}
          alt="Cards Image"
        />
        <CardBody>
          <CardTitle className="cardTitle">{props.title}</CardTitle>
          <CardText className="cardDesc">{props.desc}</CardText>
          {questions.length > 0 ? (
            <Questionnaire
              data={questions[currentIndex]}
              handleAnswer={handleAnswer}
              score={score}
            />
          ) : (
            <p>Loading..</p>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default QuizCard;
