import Image from "next/image";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

interface TodayBox {
  nowTemp: number;
  coldestTemp: number;
  hotestTemp: number;
  icon: string;
  city: string;
  country: string;
}

export default function TodaysWeatherBox({
  nowTemp,
  coldestTemp,
  hotestTemp,
  icon,
  city,
  country
}: TodayBox) {
  return (
    <Container className="todayBox">
      <Row>
        <Col>
          <h2>Current Temp: {nowTemp} °F</h2>
        </Col>
        <Col>
          <h2>Lowest: {coldestTemp} °F</h2>
        </Col>
        <Col>
          <h2>Highest: {hotestTemp} °F</h2>
        </Col>
      </Row>
      <Row>
        <Col>
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt='Weather icon'/>
        </Col>
      </Row>
      <Row>
        <Col>
            <h3>{city}, {country}</h3>
        </Col>
      </Row>
    </Container>
  );
}
