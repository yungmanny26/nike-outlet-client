import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
 
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
        NIKE</p>
        <h3>BELOW MARKET PRICE</h3>
        <h1> SUMMER SALE</h1>
        <img src={"https://res.cloudinary.com/dygxpwdnk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1658331538/air-force-1-07-essential-womens-shoes-xjPvrQ_adyeci.jpg"} alt="" className="hero-banner-image" />
        <div>
          <Link to="/login">
          <button className="buy-now">REGISTER/LOG IN TO BUY</button>
          </Link>
          <div className="desc">
            <h5>THE SHOE GAME STARTS HERE</h5>
           
          </div>
        </div>
        <div>50% OFF</div>
        <div>JULY 4 - AUG 26</div>
      </div>
    </div>
  );
};

export default HeroBanner;