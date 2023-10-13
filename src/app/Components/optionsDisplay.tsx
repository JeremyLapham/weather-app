import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

export default function OptionsDisplay(options: any) {
    {options.map((option: any, idx: number) => {
        return (
          <Row key={idx}>
            <Col>
            <h4>{`${option.city}, ${option.state_code}, ${option.country}`}</h4>
            </Col>
          </Row>
        );
      })}
}
