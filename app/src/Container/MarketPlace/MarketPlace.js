import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarDetailsById, getInitialData } from "../../Actions/Car.actions";
import Header from "../../Components/Header/Header";
import { generatePublicUrl } from "../../urlConfig";
import { useParams, Link, NavLink } from "react-router-dom";
import "./style.css";

const MarketPlace = () => {
  const car = useSelector((state) => state.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return (
    <Header>
      <div className="marketplace-container">
        {car.cars.length > 0 ? (
          car.cars.map((c) => (
<Link to={`/car-detail/${c._id}`}>
  <div key={c._id} className="carContainer">  
              <div className="imgContainer">
                <img className="img" src={generatePublicUrl(c.carPictures[0].img)} alt={c.name} />
              </div>
              <div className="infoContainer">
                <div className="cardesc">
                  <div className="name">
                    <text>
                      <b> {c.name}</b>
                    </text>
                  </div>
                  <div className="cmp">
                    <div>
                      <text>
                        <b>Company: </b>
                        {c.company}
                      </text>
                    </div>
                  </div>
                  <div className="price">
                    <text>
                      <b>Total Price:</b> ${c.totalPrice}
                    </text>
                  </div>
                  <div className="token">
                    <text>
                      <b>Token Price: </b> ${c.tokenPrice}
                    </text>
                  </div>
                  <Link to={`/car-detail/${c._id}`}>                  
                  </Link>
                </div>
              </div>
              </div>
</Link>
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </Header>
  );
};

export default MarketPlace;
