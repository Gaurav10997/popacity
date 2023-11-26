import "./details.css";
import logo from "../../images/Rectangle 6.jpg";
import DetailsContext from "../../context/DetailsContext";
import { useContext } from "react";
const Details = ({ setAsideDisplay }) => {
  // fetch the data to see if the user clicked the grid in the global contex
  const { details } = useContext(DetailsContext);

  // the data of crawl is large to fit it in the container
  let crawl;
  // this will ony print the 15 letters
  if (details.opening_crawl) {
    const words = details.opening_crawl.split(" ");
    crawl = words.slice(0, 15).join(" ");
  }
  return (
    <div className="aside-details">
      <div className="aside-header">
        <h1>Movie Details</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          style={{ cursor: "pointer" }}
          onClick={() => setAsideDisplay(false)}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.9115 12.0003L19.1886 17.2822C19.579 17.6729 19.5787 18.306 19.188 18.6964C18.7973 19.0867 18.1641 19.0864 17.7738 18.6957L12.4963 13.4135L7.20658 18.6953C6.81577 19.0856 6.1826 19.0851 5.79237 18.6943C5.40213 18.3035 5.4026 17.6703 5.79342 17.2801L11.0827 11.9986L5.79565 6.70679C5.4053 6.31609 5.40559 5.68292 5.79629 5.29257C6.18699 4.90223 6.82016 4.90251 7.2105 5.29321L12.498 10.5855L17.7739 5.31734C18.1648 4.92711 18.7979 4.92758 19.1881 5.31839C19.5784 5.70921 19.5779 6.34237 19.1871 6.73261L13.9115 12.0003Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="aside-middle">
        <p>Image</p>
        <img src={logo} alt="logo" />
        <p>{!details.title ? "Name" : "Title"}</p>
        <div className="title">
          <p>{details.title || details.name}</p>
        </div>
        <p>
          {details.opening_crawl && "Opening Crawl"}
          {details.gender && "gender"}
          {details.diameter && "diameter"}
          {details.model && "model"}
          {details.designation && "designation"}
        </p>
        <div className="desc">
          <p>
            {crawl ||
              details.gender ||
              details.diameter ||
              details.model ||
              details.designation}
          </p>
        </div>
        <p>
          {details.cost_in_credits && "Price"}
          {details.language && "Language"}
          {details.terrain && "terrain"}
          {details.birth_year && "birth year"} {!details.gender && "Super Hero"}
        </p>
        <div className="hero">
          <p>
            {details.cost_in_credits ||
              details.language ||
              details.terrain ||
              details.birth_year ||
              "Super Hero"}
          </p>
        </div>
      </div>
      <div className="aside-bottom">
        <button onClick={() => setAsideDisplay(false)}>Close</button>
      </div>
    </div>
  );
};

export default Details;
