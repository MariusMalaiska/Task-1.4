import React, { useContext, useEffect } from "react";
import './index.scss';
import Card from "../components/card"
import { AdvertContext } from "../providers/advert.provider";

function App() {
  const { adverts, getAdverts, isLoading } = useContext(AdvertContext);


  useEffect(() => {
    getAdverts();
  }, []);


  return (
    <div className="App">
      <h1>1.4 Užduotis</h1>
      <hr />

      <div className="Grid">
        {adverts.map(item => (
          <Card
            isLoading={isLoading}
            key={adverts.indexOf(item)}
            images={item.nuotraukos}
            year={item.metai}
            price={item.kaina}
            make={item.marke}
            model={item.modelis}
          />
        ))}
      </div>
      <button className="Button" onClick={getAdverts} >Pridėti</button>
    </div>
  );
}

export default App;
