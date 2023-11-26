import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Nav from "../components/navbar/Nav";
import Top from "../components/Top/Top";
import Grid from "../components/grid/Grid";
import List from "../components/list/List";
import axios from "axios";
import DetailsContext from "../context/DetailsContext";
import Loader from "../components/Loader/Loader";

const Planets = () => {
  // Planets page
  const [grid, setgrid] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const { search, setSearch, menu, setMenu } = useContext(DetailsContext);
  const list = ["Name", "Diameter", "Terrain", ""];
  // fetching the Planets data
  useEffect(() => {
    setIsLoader(true);
    setSearch("");
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) => {
        setPlanets(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, []);

  // filter the data as soon as the user search something

  useEffect(() => {
    if (search) {
      const filter = planets.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filter);
    } else {
      //if the search bar empty it put the whole Planets data

      setFilter(planets);
    }
  }, [search, planets]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav planet={planets} />
          </div>
          {menu && <Nav setMenu={setMenu} planet={planets} />}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="Planets" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((planet, index) => (
                      <Grid planet={planet} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((planet, index) => (
                      <List planet={planet} index={index + 1} />
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

export default Planets;
