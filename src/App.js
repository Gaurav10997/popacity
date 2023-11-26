import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles";
import Starships from "./pages/Starships";
import Species from "./pages/Species";
import Planets from "./pages/Planets";
import People from "./pages/People";
import { useContext } from "react";
import DetailsContext from "./context/DetailsContext";
import Details from "./components/details/Details";
import DeleteModal from "./components/deleteModal/DeleteModal";
import Nav from "./components/navbar/Nav";

function App() {
  const { asideDisplay, setAsideDisplay, modal } = useContext(DetailsContext);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/films" element={<Films />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/species" element={<Species />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/people" element={<People />} />
      </Routes>
      {asideDisplay && <Details setAsideDisplay={setAsideDisplay} />}
      {modal && <DeleteModal />}
      {/* {menu && <Nav setMenu={setMenu} />} */}
    </div>
  );
}

export default App;
