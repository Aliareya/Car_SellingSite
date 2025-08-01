import { createContext , useContext, useState } from "react";

const StaticDataContext = createContext();

const questionsData = [
  // General Questions
  { type: "General Questions", question: "How long does a car inspection take?" },
  { type: "General Questions", question: "Can I return the car?" },
  { type: "General Questions", question: "Is there a warranty?" },
  { type: "General Questions", question: "Do you offer financing?" },
  { type: "General Questions", question: "Can I test drive the car?" },
  { type: "General Questions", question: "Are all cars certified?" },
  { type: "General Questions", question: "What documents are needed?" },
  { type: "General Questions", question: "Is the price negotiable?" },

  // Car Features
  { type: "Car Features", question: "Does it have Bluetooth?" },
  { type: "Car Features", question: "Is there a sunroof?" },
  { type: "Car Features", question: "Does it support Apple CarPlay?" },
  { type: "Car Features", question: "Are leather seats included?" },
  { type: "Car Features", question: "Does it have cruise control?" },
  { type: "Car Features", question: "What’s the fuel efficiency?" },
  { type: "Car Features", question: "Is it all-wheel drive?" },
  { type: "Car Features", question: "How many airbags are there?" },

  // Technical Support
  { type: "Technical Support", question: "How do I schedule service?" },
  { type: "Technical Support", question: "What if the car won’t start?" },
  { type: "Technical Support", question: "How do I reset the oil light?" },
  { type: "Technical Support", question: "Is roadside help available?" },
  { type: "Technical Support", question: "Do you offer repair warranties?" },
  { type: "Technical Support", question: "Can I get updates online?" },
  { type: "Technical Support", question: "What does this error code mean?" },
  { type: "Technical Support", question: "How often should I service my car?" }
];


import car1 from "../assets/product/car1.jpg";
import car2 from "../assets/product/car2.jpg";
import car3 from "../assets/product/car3.jpg";
import car4 from "../assets/product/car4.jpg";
import car5 from "../assets/product/car5.jpg";
import car6 from "../assets/product/car6.jpg";
import car7 from "../assets/product/car7.jpg";
import car8 from "../assets/product/car3.jpg";
import car9 from "../assets/product/car5.jpg";

const carData = [
  // Latest
  {
    name: "Mercedes-Benz",
    listedBy: "Car House",
    engine: "120cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2006,
    type: "latest",
    price: "$174,900",
    image: car1
  },
  {
    name: "Toyota",
    listedBy: "Auto Plaza",
    engine: "130cc",
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2007,
    type: "latest",
    price: "$150,000",
    image: car2
  },
  {
    name: "Honda",
    listedBy: "City Cars",
    engine: "125cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2008,
    type: "latest",
    price: "$160,000",
    image: car3
  },

  // Featured
  {
    name: "BMW",
    listedBy: "Auto World",
    engine: "140cc",
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2010,
    type: "featured",
    price: "$180,000",
    image: car4
  },
  {
    name: "Audi",
    listedBy: "Speed Cars",
    engine: "135cc",
    transmission: "Manual",
    fuel: "Diesel",
    year: 2011,
    type: "featured",
    price: "$190,000",
    image: car5
  },
  {
    name: "Mercedes-Benz",
    listedBy: "Car House",
    engine: "150cc",
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2012,
    type: "featured",
    price: "$200,000",
    image: car6
  },

  // Popular
  {
    name: "Tesla",
    listedBy: "Electric Motors",
    engine: "Electric",
    transmission: "Automatic",
    fuel: "Electric",
    year: 2015,
    type: "popular",
    price: "$210,000",
    image: car7
  },
  {
    name: "Nissan",
    listedBy: "Auto Hub",
    engine: "145cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2016,
    type: "popular",
    price: "$220,000",
    image: car8
  },
  {
    name: "Ford",
    listedBy: "Car Dealers",
    engine: "160cc",
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2017,
    type: "popular",
    price: "$230,000",
    image: car9
  }
];



export const StaticDataProvider = ({ children }) => {
  return (
    <StaticDataContext.Provider value={{questionsData , carData}}>
      {children}
    </StaticDataContext.Provider>
  );
}


export const useStaticData = () =>{
  return useContext(StaticDataContext);
}
