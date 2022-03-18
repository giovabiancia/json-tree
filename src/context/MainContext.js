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
        let counter = 0;
        function addIds(data) {
          for (const item in data) {
            if (typeof data[item] == "object") {
              data[item].ids = counter++;
              addIds(data[item], counter);
            }
          }
        }
        addIds(data, 1);

        setMainContext(data);
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
