"use client";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./page.module.css";
import {
  CityData,
  WeatherData,
  WeatherDataFiveDay,
} from "./Services/WeatherFetch";
import TodaysWeatherBox from "./Components/todaysWeatherBox";
import FiveDayBoxes from "./Components/FiveDayBoxes";
import MainFiveDayBox from "./Components/MainFiveDayBox";

export default function Home() {
  const [search, setSearch] = useState("stockton");
  const [weatherType, setWeatherType] = useState("");
  const [currentTemp, setCurrentTemp] = useState(0);
  const [coldestTempToday, setColdestTempToday] = useState(0);
  const [hotestTempToday, setHotestTempToday] = useState(0);
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [weatherDes, setWeatherDes] = useState("");

  const [fiveDayOne, setFiveDayAllDays] = useState<any[]>([]);

  useEffect(() => {
    gettingData(search);
  }, []);

  async function gettingData(search: any) {
    const data = await WeatherData(search);
    const FiveDayForecast = await WeatherDataFiveDay(search);
    setData(data);
    FiveDaySetData(FiveDayForecast);
  }

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
    setSunset(data.sys.sunset);
    setSunrise(data.sys.sunrise);
    setWeatherDes(data.weather[0].main);
  };

  const FiveDaySetData = (fiveDay: any) => {
    const nums: any = [];
    for (let i = 0; i < 40; i++) {
      nums.push(fiveDay.list[i]);
    };
    setFiveDayAllDays(nums);
  };

  const input = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    gettingData(search);
  };

  return (
    <Container fluid className={`${weatherType}`}>
      <Row>
        <Col>
          <input onChange={(e) => input(e)} value={search} />
        </Col>
        <Col>
          <Button onClick={() => handleSearch()}>Search</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <TodaysWeatherBox
            nowTemp={currentTemp}
            coldestTemp={coldestTempToday}
            hotestTemp={hotestTempToday}
            icon={icon}
            city={city}
            country={country}
            sunset={sunset}
            sunrise={sunrise}
            weatherDes={weatherDes}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MainFiveDayBox fiveDay={fiveDayOne} />
        </Col>
      </Row>
    </Container>
  );
}
