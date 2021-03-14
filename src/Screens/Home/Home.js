import React, { useContext } from "react";
import "./Home.css";

import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";

import { DataContext } from "../../Data/DataContext";

export default function Home() {
  const restaurants = useContext(DataContext);

  return (
    <div className="main_container">
      <Header resturantcount={restaurants.length} />
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.restaurantId}
          restaurantImage={restaurant.restaurantImage}
          restaurantName={restaurant.restaurantName}
          averageReview={4.25}
          info={"North Indian, South Indian,Chinese, Biryani"}
          displayTime={restaurant.displayTime}
          displayCostForTwo={restaurant.displayCostForTwo}
          outlet={restaurant.outlet}
        />
      ))}
    </div>
  );
}
