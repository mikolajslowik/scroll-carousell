import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";
import { Product } from "./interfaces";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://allegrolokalnie.pl/api/offers?destination=CAROUSEL_OPBOX-PAGE_OFDF&ids[]=1014462564&ids[]=1014462609&ids[]=1014462642&ids[]=1014462692&ids[]=1014462727&ids[]=1010950013&ids[]=1016550610&ids[]=1006286211&ids[]=1013977232&ids[]=1009297392&ids[]=1012609742&ids[]=1016529554&ids[]=1016522975&ids[]=1016407367&ids[]=1016529611&ids[]=1016292268&ids[]=1004966476&ids[]=1016488545&ids[]=1016416383&ids[]=1016006773&ids[]=1016400111"
      )
      .then((res: any) => setProducts(res.data.offers));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const ul: any = document.getElementById("scrollContainer");
  const li: any = document.querySelector("li");

  const nextProdHandler = () => {
    ul?.scrollBy(Number(2 * li?.offsetWidth), 0);
  };

  const prevProdHandler = () => {
    ul?.scrollBy(2 * -Number(li?.offsetWidth), 0);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <button className="btn prevBtn" onClick={prevProdHandler}>
          &lt;
        </button>
        <ul id="scrollContainer">
          {" "}
          {products?.map((prod: Product) => (
            <li key={prod.id}>
              <Tile prod={prod} />
            </li>
          ))}{" "}
        </ul>
        <button className="btn nextBtn" onClick={nextProdHandler}>
          &#62;
        </button>
      </div>
    </div>
  );
}

export default App;
