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
  sunset: any;
  sunrise: any;
  weatherDes: string;
}

export default function TodaysWeatherBox({
  nowTemp,
  coldestTemp,
  hotestTemp,
  icon,
  city,
  country,
  sunset,
  sunrise,
  weatherDes
}: TodayBox) {
  const convert = (time: any) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const hours12 = hours % 12 || 12;

    return `${hours12.toString().padStart(2)}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };
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
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt="Weather icon"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>
            {city}, {country}
          </h3>
        </Col>
        <Col>
          <h3>
            Sun Rise: {convert(sunrise)}AM, Sun Set {convert(sunset)}PM
          </h3>
        </Col>
        <Col>
          <h3>
            {weatherDes}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
