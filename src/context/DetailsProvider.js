import React, { useState } from "react";
import DetailsContex from "./DetailsContext";

const DetailsProvider = ({ children }) => {
  // its the contex provider which have the details
  // of search and also the aside and details and modal information
  const [asideDisplay, setAsideDisplay] = useState(false);
  const [details, setDetils] = useState();
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <DetailsContex.Provider
      value={{
        asideDisplay: asideDisplay,
        setAsideDisplay: setAsideDisplay,
        details: details,
        setDetils: setDetils,
        search: search,
        setSearch: setSearch,
        modal: modal,
        setModal: setModal,
        menu: menu,
        setMenu: setMenu,
      }}
    >
      {children}
    </DetailsContex.Provider>
  );
};

export default DetailsProvider;
