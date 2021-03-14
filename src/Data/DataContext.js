import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
        { latitude: 13.0358481, longitude: 80.244455 }
      )
      .then((res) => setRestaurants(res.data.listRestaurants));
  }, []);
  console.log(restaurants);
  return (
    <DataContext.Provider value={restaurants}>
      {props.children}
    </DataContext.Provider>
  );
};
