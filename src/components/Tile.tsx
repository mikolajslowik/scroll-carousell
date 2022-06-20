import { Product } from "../interfaces";
import "./tile.css";

function Tile(props: { prod: Product }) {
  return (
    <div className="tile">
      {}
      <div className="tileHeart"></div>
      <div className="tileImg">
        <img src={props.prod.images[0].url}></img>
      </div>
      <div className="tileInfo">
        <div className="itemTitleBox">{props.prod.name}</div>
        <div className="itemTPriceBox">
          <div className="itemPrice">
            {props.prod.sellingMode.buyNow ? (
              <>
                {" "}
                <p>{props.prod.sellingMode.buyNow.price.sale.amount} </p>
                <p className="currency">
                  {props.prod.sellingMode.buyNow.price?.sale.currency.toLowerCase()}
                </p>
              </>
            ) : (
              <p>n/a</p>
            )}
          </div>
          <a className="buyNow">
            {props.prod.sellingMode.buyNow ? "Kup teraz" : ""}
          </a>
        </div>
        <div className="itemLocationBox">
          <div className="location">
            {props.prod.allegroLocally.location.label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
