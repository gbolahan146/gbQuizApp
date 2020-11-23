import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Questionnaire = ({
  handleAnswer,
  score,
  data: { question, correct_answer, incorrect_answers, category },
}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <>
      <Button color="success" block onClick={toggleModal}>
        Start
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{category}</ModalHeader>
        <ModalBody>
          <Container>
            <Row>
              <Col sm="12" md="12">
                <h4
                  className="quizQuestion"
                  dangerouslySetInnerHTML={{ __html: "Q. " + question }}
                ></h4>
              </Col>
            </Row>
            <Row>
              {shuffledAnswers.map((answer) => (
                <Col sm="6" md="6" className="choiceButton">
                  <Button
                    color="primary"
                    block
                    onClick={() => handleAnswer(answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          <p className="score">Your Score is {score} </p>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Questionnaire;
