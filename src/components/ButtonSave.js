import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
export function ButtonSave({}) {
  const [mainContext, setMainContext] = useContext(MainContext);

  const checkLanding = (tree) => {
    let counter = 0;
    for (let key in tree) {
      const val = tree[key];
      if (val.landing) {
        counter = counter + 1;
      }
    }
    return counter;
  };
  const checkActive = (tree) => {
    let counter = 0;
    let numberOfAttributes = Object.keys(tree).length;
    for (let key in tree) {
      const val = tree[key];
      if (val.attivo === false && val.visibile === false) {
        counter = counter + 1;
      }
    }
    if (numberOfAttributes === counter) {
      return false;
    }
    return true;
  };

  const handleSave = () => {
    //TODO che ci sia almeno una attiva e visibile
    let counterActive = checkActive(mainContext);
    if (!counterActive) {
      alert("Almeno una sezione deve essere attiva e visibile");
      return;
    }

    //TODO controlla 1 solo landing true al primo livello
    let counterLanding = checkLanding(mainContext);
    if (counterLanding > 1) {
      alert("Soltanto una lending può essere attiva");
    } else if (counterLanding === 0) {
      alert("Almeno una landing deve essere attiva");
    } else {
      console.log("fetch");
    }

    /* fetch("https://www.realitycs.it/api/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mainContext),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => alert(err));
    } */
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <button className="btn btn-primary" onClick={handleSave}>
          Salva Configurazione
        </button>
      </div>
    </div>
  );
}
