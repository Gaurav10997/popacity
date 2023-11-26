import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Nav from "../components/navbar/Nav";
import Top from "../components/Top/Top";
import Grid from "../components/grid/Grid";
import List from "../components/list/List";
import axios from "axios";
import DetailsContext from "../context/DetailsContext";
import Loader from "../components/Loader/Loader";

const Vehicles = () => {
  const [grid, setgrid] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const { search, setSearch, menu, setMenu } = useContext(DetailsContext);
  const list = ["Name", "Model", "Price", ""];
  useEffect(() => {
    setIsLoader(true);

    setSearch("");
    axios
      .get("https://swapi.dev/api/vehicles")
      .then((res) => {
        setVehicles(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, []);
  useEffect(() => {
    if (search) {
      const filter = vehicles.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filter);
    } else {
      setFilter(vehicles);
    }
  }, [search, vehicles]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav vehicle={vehicles} />
          </div>
          {menu && <Nav setMenu={setMenu} vehicle={vehicles} />}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="Vehicles" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((vehicle, index) => (
                      <Grid vehicle={vehicle} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((vehicle, index) => (
                      <List vehicle={vehicle} index={index + 1} />
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

export default Vehicles;
