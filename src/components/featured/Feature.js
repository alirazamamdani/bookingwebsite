import React from "react";
import "./Feature.css";

const Feature = () => {
  const featureItems = [
    {
      id: 1,
      name: "City 1",
      details: "lorem ipsum blah blah blah",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "City 2",
      details: "lorem ipsum blah blah blah",
      image:
        "https://images.unsplash.com/photo-1649855908502-3f236ae18958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29uZGVyZnVsJTIwY291bnRyaWVzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "City 3",
      details: "lorem ipsum blah blah blah",
      image:
        "https://images.unsplash.com/photo-1612293509840-afb0f18d417b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbmRlcmZ1bCUyMGNvdW50cmllc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  console.log(featureItems);
  return (
    <div className="FeaturedContainer">
      {featureItems.map((item, i) => {
        return (
          <div className="FeatureItem" key={i}>
            <img src={item.image} className="FeatureImg" alt="" />
            <div className="FeatureTitle">
              <h1>{item.name}</h1>
              <h4>{item.details}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
