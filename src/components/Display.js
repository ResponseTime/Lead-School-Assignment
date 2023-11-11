import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Maps from "./Maps";
import Loader from "./Loader";
import Error from "./Error";
export default function Display() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.code);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [coords, setCoords] = useState({});
  const [err, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        let data = await axios.get(
          `https://api.zippopotam.us/in/${location.state.code}`
        );
        data = await data.data;
        setData(data);
        setCoords({
          lat: parseFloat(data.places[0].latitude),
          lng: parseFloat(data.places[0].longitude),
        });
        setLoading(false);
      } catch (Err) {
        setLoading(false);
        setError(true);
      }
    };

    fetch();
  }, []);
  const handleClick = () => {
    navigate("/");
  };
  const handleClear = () => {
    setData(null);
  };
  if (loading) {
    return <Loader />;
  }
  if (err) {
    return <Error />;
  }
  return (
    <>
      <div className="back">
        <button onClick={handleClick}>Go Home</button>
      </div>
      {data && (
        <div className="top-info">
          <div>ZipCode: {data["post code"]}</div>
          <div>
            Country: {data["country"]}, {data["country abbreviation"]}
          </div>
        </div>
      )}
      {data && <Maps center={coords} />}
      {data && (
        <div className="head">
          Places In this Area
          <button onClick={handleClear}>Clear The Screen</button>
        </div>
      )}
      <div className="bottom-info">
        {data &&
          data.places.map((place) => {
            return (
              <div className="card">
                <span className="pname">{place["place name"]}</span>
                <span className="sname">
                  {place["state"]} {place["state abbreviation"]}
                </span>
                <span className="lat-lng">
                  Lattitude: {place.latitude}
                  <br />
                  Longitude: {place.longitude}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
}
