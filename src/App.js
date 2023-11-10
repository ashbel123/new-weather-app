import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "./assets/background_images/clouds.jpg";
import Sample from "./sample";
import Ss from "./ss";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // // const backgroundStyle = {
  // //   backgroundImage: `url(${require("./assets/background_images/thunderstorm.jpg")})`,
  // //   backgroundSize: "cover",
  // //   backgroundRepeat: "no-repeat",
    
  // // };

  // const [city, setCity] = useState("");
  // const [data, setData] = useState(null);
  // const [err, setErr] = useState(null);
  // const api = process.env.API;
  // // var icon =
  // //   "<img src='http://openweathermap.org/img/w/" +
  // //   weatherDataIn.weather[0].icon +
  // //   ".png'>";
  // // var newicon = <img  src='../assets/04n_2x-removebg-preview.png' />;


  // const fetchWeather = async () => {
  //   const res = await axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //       setErr(null);
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       setErr(err);
        
  //     });
  // };

  // useEffect(() => {
  //   if (city)
  //   fetchWeather();
  // }, []);

  // const inputHandler = (e) => {
  //   setCity(e.target.value);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(city);
  //   setCity("");
  //   fetchWeather();
  // };

  // return (
  //   <>
  //     <img src={backgroundImage} alt="image" />
  //     <div className="">
  //       <div className="card">
  //         <div className="card-title">
  //           <h2>Welcome to weather app</h2>
  //       </div>
  //         <div className="card-body">
  //           <form onSubmit={submitHandler}>
  //             <input
  //               type="text"
  //               onChange={inputHandler}
  //               name="city"
  //               value={city}
  //             />
  //             <br />
  //             <br />
  //             <input type="submit" />
  //           </form>

  //           {data && !err ? (
  //             <>
  //               <h2>{data.name}</h2>
  //               <p>Temperature: {data.main.temp}°C</p>
  //               <p>Description: {data.weather[0].description}</p>
  //               <p>Feels like : {data.main.feels_like}°C</p>
  //               <p>Humidity : {data.main.humidity}%</p>
  //               <p>Pressure : {data.main.pressure}</p>
  //               <p>Wind Speed : {data.wind.speed}m/s</p>
  //             </>
  //           ) : !err ? (
  //             <h3>Loading weather data.. </h3>
  //           ) : (
  //             <h3>
  //               The city you are requesting is not available in our database.
  //               Try another one
  //             </h3>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
  <>
    <Sample />
    {/* <Ss/> */}
  </>
  );











}

export default App;
