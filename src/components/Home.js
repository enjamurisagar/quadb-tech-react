import React, { useEffect, useState } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-main">
      <div className="home-container">
        <h1 className="home-heading">Book Your Show Tickets</h1>
        <div className="show">
          {data?.map((item, i) => (
            <div className="show-card" key={i}>
              <div className="show-img">
                <img src={item.show.image.original} alt="show-img" />
              </div>
              <div className="show-details">
                <h3 className="name">{item.show.name}</h3>
                <p className="language">Language: {item.show.language}</p>
                <p className="genre">
                  Genre:
                  {item.show.genres.map((genre, idx) => (
                    <span key={idx}>{genre}, </span>
                  ))}
                </p>
                {item.show.rating.average && (
                  <p className="rating">
                    Rating: {item.show.rating.average}/10
                  </p>
                )}
                <p className="available">
                  Available on {item.show.schedule.days},{" "}
                  {item.show.schedule.time}
                </p>
                <div className="btn">
                  <Link to={`/shows/${item.show.id}`} className="book-now">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
