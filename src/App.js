import React from 'react'

import './App.css';
import Nav from './Components/Nav'
import Input from './Components/Input'
import Home from './Components/Home'

function App() {
  const [city, setCity] = React.useState("")
  const [weather, setWeather] = React.useState([{}])

  const apiKey = "ae1a2af96aab66b3a1e6e912075109cf";
  // const url = "http://openweathermap.org/img/wn/" + `${weather.weather[0].icon}` + ".png";

  function getWeather(){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(
        res => res.json()
      )
      .then(
        data => {
          setWeather(data)
          setCity("")
        }
      )
  }

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = d.getDate();
    let month = months[d.getMonth()];

    return `${month} ${date},`;
  };

  const dayBuilder = (d) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];

    return `${day}`
  };

  return(
    <>
      <Nav/>

      <Input 
        change = {e => setCity(e.target.value)}
        val = {city}
        get = {getWeather}
        name = {"Search"}
      />

      {typeof weather.main != "undefined" ? (
        <Home 
          val = {city} 
          name = {weather.name} 
          day = {dayBuilder(new Date())}
          date = {dateBuilder(new Date())}
          time = {new Date().toLocaleTimeString()}
          // image = {url}
          temp = {weather.main.temp}
          sky = {weather.weather[0].main}
        />
      ) : <div className="search"><h2>No Location Searched</h2></div>}

    </>
  )
}

export default App;