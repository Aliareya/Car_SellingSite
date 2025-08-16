import React from "react";
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

// import services image
import service_1 from "../assets/services/service-1.jpg";
import service_2 from "../assets/services/service-2.jpg";
import service_3 from "../assets/services/service-3.jpg";
import service_4 from "../assets/services/service-4.jpg";
import service_5 from "../assets/services/service-5.jpg";

const carData = [
  // Latest
  {
    id:1,
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
    id:2,
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
    id:3,
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
    id:4,
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
    id:5,
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
    id:6,
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
    id:7,
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
    id:8,
    year: 2016,
    type: "popular",
    price: "$220,000",
    image: car8
  },
  {
    name: "Ford",
    listedBy: "Car Dealers",
    id:9,
    engine: "160cc",
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2017,
    type: "popular",
    price: "$230,000",
    image: car9
  }
];


const latest_products = [
  {
    name: "Car AirFilter Spare ",
    price: "$700",
    originalPrice: "$780.00",
    status: "not found",
    image:car2
  },
  {
    name: "Aluminium Wheel AR",
    price: "$700",
    originalPrice: "$780.00",
    status: "not found",
    image:car4
  },
  {
    name: "Car Exhaust system ",
    price: "$700",
    originalPrice: "$780.00",
    status: "available" ,
    image:car6
  },
  {
    name: "Car Exhaust ",
    price: "$700",
    originalPrice: "$780.00",
    status: "available" ,
    image:car7
  },
];
const recently_viewed = [
  {
    name: "Car AirFilter Spare ",
    price: "$700",
    originalPrice: "$780.00",
    status: "not found",
    image:car5
  },
  {
    name: "Aluminium Wheel AR",
    price: "$700",
    originalPrice: "$780.00",
    status: "not found",
    image:car3
  },
  {
    name: "Car Exhaust system ",
    price: "$700",
    originalPrice: "$780.00",
    status: "available" ,
    image : car1
  },
];

const services = [
  { title: "Electric Auto"  , image :service_1},
  { title: "Rent Vehicle" , image :service_2},
  { title: "Air Conditioning", image :service_3 },
  { title: "Break Service", image :service_4 },
  { title: "Tire & Auto Parts" , image :service_5},
  { title: "Rent Vehicle" , image :service_1},
];


export const StaticDataProvider = ({ children }) => {
  
  const [cars,setCars ]= useState([
  {
    id:1,
    name: "Mercedes-Benz",
    listedBy: "Car House",
    engine: "120cc",
    transmission: "Manual",
    fuel: "Petrol",
    isFavorite : true,
    year: 2023,
    color: "black",
    brand: "benz",
    category: "luxury",
    type: "latest",
    price: 174900,
    image: car1,
    relatet_img : [car2,car3,car4]
  },
  {
    id:2,
    name: "Tesla Model S",
    listedBy: "EV Motors",
    engine: "Electric",
    transmission: "Automatic",
    fuel: "Electric",
    isFavorite : false,
    year: 2022,
    color: "blue",
    brand: "tesla",
    category: "electric",
    type: "latest",
    price: 89000,
    image: car2,
    relatet_img : [car3,car1,car4]
  },
  {
    id:3,
    name: "Ford Mustang",
    listedBy: "AutoKing",
    engine: "500cc",
    transmission: "Manual",
    fuel: "Petrol",
    isFavorite : false,
    year: 2021,
    color: "white",
    brand: "ford",
    category: "sports",
    type: "latest",
    price: 50000,
    image: car3,
    relatet_img : [car4,car1,car2]
  },
  {
    id:4,
    name: "Toyota Prius",
    listedBy: "Hybrid World",
    engine: "180cc",
    transmission: "CVT",
    fuel: "Hybrid",
    year: 2020,
    color: "blue",
    brand: "toyota",
    category: "hybrid",
    isFavorite : false,
    type: "latest",
    price: 27000,
    image: car4,
    relatet_img : [car5,car1,car2]
  },
  {
    name: "Nissan Leaf",
    listedBy: "Eco Cars",
    engine: "Electric",
    transmission: "Automatic",
    id:5,
    fuel: "Electric",
    year: 2019,
    color: "white",
    brand: "nissan",
    category: "electric",
    type: "latest",
    isFavorite : false,
    price: 31000,
    image: car5,
    relatet_img : [car7,car4,car3]
  },
  {
    id:6,
    name: "BMW X5",
    listedBy: "Luxury Autos",
    engine: "350cc",
    transmission: "Automatic",
    fuel: "Diesel",
    year: 2018,
    color: "white",
    brand: "bmw",
    category: "suv",
    type: "latest",
    isFavorite : false,
    price: 67500,
    image: car6,
    relatet_img : [car5,car2,car3]
  },
  {
    name: "Tesla Roadster",
    id:7,
    listedBy: "Tesla Store",
    engine: "Electric",
    transmission: "Automatic",
    fuel: "Electric",
    year: 2017,
    color: "red",
    brand: "tesla",
    category: "sports",
    type: "latest",
    price: 200000,
    isFavorite : false,
    image: car7,
    relatet_img : [car3,car5,car8]
  },
  {
    id:8,
    name: "Honda Civic",
    listedBy: "Car House",
    engine: "160cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2016,
    color: "white",
    brand: "honda",
    isFavorite : false,
    category: "sedan",
    type: "latest",
    price: 19500,
    image: car8,
    relatet_img : [car1,car3,car5]
  },
  {
    name: "Toyota Yaris",
    id:9,
    listedBy: "City Cars",
    engine: "130cc",
    transmission: "Manual",
    fuel: "Petrol",
    year: 2015,
    color: "white",
    brand: "toyota",
    category: "hatchback",
    type: "latest",
    price: 14000,
    isFavorite : false,
    image: car9,
    relatet_img : [car7,car4,car2]
  },
  {
    name: "BMW Z4",
    listedBy: "Convertible World",
    engine: "300cc",
    id:10,
    transmission: "Automatic",
    fuel: "Petrol",
    year: 2023,
    color: "white",
    brand: "bmw",
    category: "convertible",
    type: "latest",
    price: 76000,
    image: car3,
    isFavorite : false,
    relatet_img : [car9,car8,car4]
  },
  ]);
  
  return (
    <StaticDataContext.Provider value={{services, questionsData , carData , cars ,setCars, latest_products ,recently_viewed}}>
      {children}
    </StaticDataContext.Provider>
  );
}


export const useStaticData = () =>{
  return useContext(StaticDataContext);
}
