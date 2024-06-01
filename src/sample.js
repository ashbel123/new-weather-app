import "./sample.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  cloud,
  // full_cloud,
  heavy_rain,
  low_rain,
  mist_snow,
  mist,
  snow,
  rainbow,
  thunderstorm,
  clear_sky,
  broken_cloud,
  dust,
  tornado,
  few_clouds,
  shower_snow,
  // def
} from "./import_img";

const changeImg = (props1) => {
  if (props1.data) {
    const curr = props1.data.weather[0].description;
    console.log(curr);

    if (
      curr.includes("scattered") ||
      curr.includes("broken ") ||
      curr.includes("partly")
    ) {
      props1.setBgImg(few_clouds);
    } else if (curr.includes("overcast")) {
      props1.setBgImg(cloud);
    } else if (curr.includes("clouds")) {
      props1.setBgImg(broken_cloud);
    } else if (curr.includes("thunderstorm")) {
      props1.setBgImg(thunderstorm);
    } else if (curr.includes("sleet")) {
      props1.setBgImg(mist_snow);
    } else if (curr.includes("rain") || curr.includes("drizzle")) {
      props1.setBgImg(low_rain);
    } else if (curr.includes("shower")) {
      props1.setBgImg(shower_snow);
    } else if (curr.includes("snow")) {
      props1.setBgImg(snow);
    } else if (
      curr.includes("mist") ||
      curr.includes("haze") ||
      curr.includes("fog") ||
      curr.includes("smoke")
    ) {
      props1.setBgImg(mist);
    } else if (curr.includes("extreme rain")) {
      props1.setBgImg(heavy_rain);
    } else if (curr.includes("clear sky")) {
      props1.setBgImg(clear_sky);
    } else if (curr.includes("dust") || curr.includes("sand")) {
      props1.setBgImg(dust);
    } else if (curr.includes("tornado")) {
      props1.setBgImg(tornado);
    }
  } else {
    props1.setBgImg(rainbow);
  }
};

function Sample() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [bgImg, setBgImg] = useState(rainbow);
  // const [change, setChange] = useState(false);
  const api = process.env.REACT_APP_API_KEY;
  //   console.log(bgImg);
  //   console.log(api);
  const fetchWeather = async () => {
    console.log("in fetchweather");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
      )
      .then((response) => {
        console.log("now executing the fetchweather");
        setData(response.data);
        console.log(response.data);
        setErr(null);
        setCity("");
      })
      .catch((err) => {
        console.error(err);
        setErr(err);
      });

    console.log("End of FetchWeather");
  };

  useEffect(() => {
    // console.log("in useeffect change " + change);
    // console.log("in useEffect only");
    // if (city) fetchWeather();
    if (data) {
      console.log(data.weather[0].description);
      changeImg({ data, setBgImg });
    }

    console.log("End of useEffect");
  }, [data]);

  const inputHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(city);
    // setChange(!change);
    // console.log("in submit handler change " + change);
    // console.log("just after change");
    if (city) fetchWeather();
    console.log("after fetchWeather");

    // console.log("city is set to null");
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card">
        <h1>Weather Forecast</h1>
        <br />
        {/*  the original card */}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your City"
              onChange={inputHandler}
              required
              name="city"
              value={city}
            />
            <br />
            <br />
          </div>
          <button type="submit">Submit</button>

          {data && !err ? (
            <>
              <br />
              <h2>{data.name}</h2>
              <br />
              <table className="table">
                <thead>
                  <tr>
                    <th>Temperature</th>
                    <th>Description</th>
                    <th>Feels like</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>{data.main.temp}°C</p>
                    </td>
                    <td>
                      <p>{data.weather[0].description}</p>
                    </td>
                    <td>
                      <p>{data.main.feels_like}°C</p>
                    </td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    <th>Wind Speed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>{data.main.humidity}%</p>
                    </td>
                    <td>
                      <p>{data.main.pressure}</p>
                    </td>
                    <td>
                      <p>{data.wind.speed}m/s</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : !err ? (
            <h3></h3>
          ) : (
            <>
              <br />
              <h3>
                The city you are requesting is not available in our database.
                Try another one
              </h3>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Sample;
