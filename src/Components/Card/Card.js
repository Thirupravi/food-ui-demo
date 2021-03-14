import React from "react";
import "./Card.css";

export default function Card({
  restaurantImage,
  restaurantName,
  averageReview,
  info,
  displayTime,
  displayCostForTwo,
  outlet,
}) {
  return (
    <div className="card">
      <img src={restaurantImage} alt={restaurantName} />
      <div className="card_name_section">
        <div>
          <p className="name">{restaurantName}</p>
          <p className="card_info">{info}</p>
        </div>
        <div className="review">
          <p>{`★   ${averageReview}`}</p>
        </div>
      </div>
      <div className="card_footer">
        <div>
          <p>{displayTime}</p>
          <p>{displayCostForTwo.replace("€", "₹")}</p>
        </div>
        {outlet.length > 0 ? (
          <div className="outlet">
            <p>{`${outlet.length} outlets near you`}</p>
            <span>{"❯"}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
