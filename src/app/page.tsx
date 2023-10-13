"use client";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./page.module.css";
import { CityData, WeatherData } from "./Services/WeatherFetch";
import TodaysWeatherBox from "./Components/todaysWeatherBox";

export default function Home() {
  const [search, setSearch] = useState("stockton");
  const [weatherType, setWeatherType] = useState("");
  const [currentTemp, setCurrentTemp] = useState(0);
  const [coldestTempToday, setColdestTempToday] = useState(0);
  const [hotestTempToday, setHotestTempToday] = useState(0);
  const [icon, setIcon] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // const [options, setOptions] = useState<any>([]);
  // useEffect(() => {
  //   const SetData = async () => {
  //     let options: any = [];
  //     const data = await CityData(search);
  //     data.map((option: any) => {
  //       options.push(option);
  //     });
  //     setOptions(options);
  //   };
  //   SetData();
  // }, [search]);

  const setData = (data: any) => {
    setWeatherType(data.weather[0].main);
    setCurrentTemp(Math.round(data.main.temp));
    setColdestTempToday(Math.round(data.main.temp_min));
    setHotestTempToday(Math.round(data.main.temp_max));
    setIcon(data.weather[0].icon);
    setCity(data.name);
    setCountry(data.sys.country);
    console.log(data);
  };

  useEffect(() => {
    const settingData = async () => {
      const data = await WeatherData(search);
      setData(data);
    };
    settingData();
  }, []);

  const handleSearch = () => {
    WeatherData(search);
  };
  // <Row>
  //       <Col>
  //         <input
  //           onChange={(e: any) => setSearch(e.target.value)}
  //           value={search}
  //         />
  //       </Col>
  //       <Col>
  //         <Button onClick={() => handleSearch()}>Search</Button>
  //       </Col>
  //     </Row>
  return (
    <Container fluid className={`${weatherType}`}>
      <Row>
        <Col>
          <TodaysWeatherBox
            nowTemp={currentTemp}
            coldestTemp={coldestTempToday}
            hotestTemp={hotestTempToday}
            icon={icon}
            city={city}
            country={country}
          />
        </Col>
      </Row>
    </Container>
  );
}
