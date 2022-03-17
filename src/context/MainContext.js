import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainContextProvider = (props) => {
  const [mainContext, setMainContext] = useState({});
  useEffect(() => {
    fetch("./assets/UIconfigs.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMainContext(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);
  return (
    <MainContext.Provider value={[mainContext, setMainContext]}>
      {props.children}
    </MainContext.Provider>
  );
};
