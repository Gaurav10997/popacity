import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Nav from "../components/navbar/Nav";
import axios from "axios";
import "../style/films.css";
import Top from "../components/Top/Top";
import Grid from "../components/grid/Grid";
import List from "../components/list/List";
import DetailsContext from "../context/DetailsContext";
import Loader from "../components/Loader/Loader";
const Films = () => {
  // films page
  const [grid, setgrid] = useState(true);
  const [films, setFilms] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const { search, setSearch, menu, setMenu } = useContext(DetailsContext);
  const list = ["Name", "Director", "Release Date", ""];

  // fetching the film data
  useEffect(() => {
    setIsLoader(true);
    setSearch("");
    axios
      .get("https://swapi.dev/api/films")
      .then((res) => {
        setFilms(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, []);

  // filter the data as soon as the user search something
  useEffect(() => {
    if (search) {
      const filter = films.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filter);
    } else {
      //if the search bar empty it put the whole film data
      setFilter(films);
    }
  }, [search, films]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav film={films} />
          </div>
          {menu && <Nav setMenu={setMenu} film={films} />}
          {/* the loader will active whenever there is some delay to fetch the data  */}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="Films" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((film, index) => (
                      <Grid film={film} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((film, index) => (
                      <List film={film} index={index + 1} />
                    ))}
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Films;
