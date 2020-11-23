// eslint-disable-next-line
import React from "react";
import "./Assets/css/App.css";
import { Container, Row, Col } from "reactstrap";
import QuizCard from "./Components/QuizCard";
import cardsData from "./Components/CardsData.js";


const App = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  const createCard = (cardsData) => {
    return (
      <Col sm="12" md="6" className="cardAlignment">
        <QuizCard
          key={cardsData.id}
          title={cardsData.title}
          img={cardsData.imgUrl}
          desc={cardsData.description}
        />
      </Col>
    );
  };
  return (
    <div>
      <Container className="appContainer">
     
        {/* <Questionnaire /> */}
        <Row>
          <Col sm="12" md="6">
            <h1 className="heading">Quiz App</h1>
          </Col>
        </Row>
        <Row>
          {cardsData.map(createCard)}
          <Col sm="12" md="12">
            <p className="aboutApp">Made using ReactJS!</p>
            <p className="aboutApp">Designed and Developed by{" "}
        <a
          className="link"
          href="https://github.com/gbolahan146"
          target="_blank"
          rel="noopener noreferrer"
        >
          gb
        </a>{" "}
        &copy; {getYear()}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
