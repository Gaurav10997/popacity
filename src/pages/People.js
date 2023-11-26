import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Nav from "../components/navbar/Nav";
import Top from "../components/Top/Top";
import Grid from "../components/grid/Grid";
import List from "../components/list/List";
import axios from "axios";
import DetailsContext from "../context/DetailsContext";
import Loader from "../components/Loader/Loader";

const People = () => {
  // people page
  const [grid, setgrid] = useState(true);
  const [peoples, setPeoples] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const { search, setSearch, menu, setMenu } = useContext(DetailsContext);
  const list = ["Name", "Gender", "birth Date", ""];
  // fetching the people data
  useEffect(() => {
    setIsLoader(true);
    setSearch("");
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setPeoples(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, []);
  // filter the data as soon as the user search something

  useEffect(() => {
    if (search) {
      const filter = peoples.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      //if the search bar empty it put the whole people data
      setFilter(filter);
    } else {
      setFilter(peoples);
    }
  }, [search, peoples]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav people={peoples} />
          </div>
          {menu && <Nav setMenu={setMenu} people={peoples} />}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="People" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((people, index) => (
                      <Grid people={people} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((people, index) => (
                      <List people={people} index={index + 1} />
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

export default People;
