import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FiveDayBoxes from "./FiveDayBoxes";

export default function MainFiveDayBox({ fiveDay }: any) {

  let daysData: any = {};

  const months: any = {
    1: "Jan",
    2 : "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
  };

  fiveDay.forEach((time: any) => {
    let nextDay = convert(time.dt);
    if (!daysData[nextDay]) {
      daysData[nextDay] = [];
    }
    daysData[nextDay].push(time);
  });

  let daysObject: any[] = [];
  function getFiveDayHighLow() {
    for (let day in daysData) {
        console.log(daysData)
      let dayData = daysData[day];
      if (dayData.length > 0) {
        let highest = Math.max(...dayData.map((data: any) => data.main.temp_max));
        let lowest = Math.min(  ...dayData.map((data: any) => data.main.temp_min));
        daysObject.push({day: day, high: Math.round(highest), low: Math.round(lowest)});
      } else {
        console.log(`Day ${day}: No data available`);
      }
    }
  }
  getFiveDayHighLow();

  function convert(time: any) {
    const date = new Date(time * 1000);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    return `${months[month + 1]} ${day}`;
  }

  return (
    <Container>
      <Row>
        <Col>
          <FiveDayBoxes day={daysObject} />
        </Col>
      </Row>
    </Container>
  );
}
