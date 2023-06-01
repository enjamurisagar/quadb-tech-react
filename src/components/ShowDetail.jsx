import React, { useEffect, useState } from "react";
import "./ShowDetail.css";

//params
import { useParams } from "react-router-dom";

//form component
import Form from "./Form";
const ShowDetail = () => {
  const { showid } = useParams();

  const [showData, setShowData] = useState([]);

  //book button toggle
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((json) => setShowData(json))
      .catch((err) => console.log(err));
  }, []);

  const singleShow = showData.filter((movie) => {
    return movie.show.id == showid;
  });
  const removeTags = (str) => {
    return str.replace(/<[^>]*>/g, "");
  };
  return (
    <div className="show-detail-main">
      <div className="show-detail-container">
        {singleShow.map((item, i) => (
          <div className="single-show-container" key={i}>
            <div className="single-show-left">
              <img src={item.show.image.original} alt="rg" />
            </div>
            <div className="single-show-right">
              <h1 className="name">{item.show.name}</h1>
              <h1 className="language">Available in {item.show.language}</h1>
              {item.show.rating.average && (
                <p className="rating">{item.show.rating.average}/10</p>
              )}
              <p className="genre">
                Genre:
                {item.show.genres.map((genre, idx) => (
                  <span key={idx}> {genre}, </span>
                ))}
              </p>
              <p className="status">
                Right now this show{" "}
                {item.show.status === "Running" ? "is" : "has"}{" "}
                {item.show.status}
              </p>
              <p className="summary">{removeTags(item.show.summary)}</p>
              <button className="show-btn" onClick={() => setClicked(true)}>
                Book Now
              </button>
            </div>
          </div>
        ))}

        <div className="form">
          {clicked && <Form singleShow={singleShow} />}
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
