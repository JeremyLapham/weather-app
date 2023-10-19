import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function FiveDayBoxes({ day }: any) {
  return (
    <Container>
      <Row className='fiveDayScroll'>
          {day.map((forDay: any) => {
            return (
              <Col key={forDay.day} className='weatherBox'>
                <div className='text-center'>
                  <h1>Day: {forDay.day}</h1>
                </div>
                <div className='text-center'>
                  <h1>High: {forDay.high}</h1>
                </div>
                <div className='text-center'>
                  <h1>Low:{forDay.low}</h1>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
