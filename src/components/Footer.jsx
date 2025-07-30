import React from "react";
import { Icon } from "@iconify/react";
import FooterCart from "../utils/FooterCart";


const vehicleCategories = [
  "SUVs",
  "Trucks",
  "Cars",
  "Crossovers",
  "Electrified Vehicles",
  "Hybrids",
  "Hybrid SUVs"
];
const quickLinks = [
  "My account",
  "Champaigns",
  "Autohive Dealers",
  "Deals and Incentives",
  "Financial Services",
  "Autohive Insurance",
  "Autohive Care",
  "FAQs & support"
];
const ourCompanyLinks = [
  "Our Company",
  "Shop Toyota",
  "Autohive USA",
  "Autohive Worldwide",
  "Autohive Racing",
  "TRD USA",
  "Autohive Plant Tours",
  "Virtual Auto Show"
];


function Footer() {
  return (
    <div className="w-full h-auto flex md:flex-col sm:flex-col gap-6 pt-8 sm:pt-2 pb-6 sm:pb-1 justify-between items-center">
      <div className="w-2/5 md:w-full sm:w-full h-80 pt-2  ">
        <h2 className="text-3xl font-bold text-white">
          Have a Question? Feel Free to Ask..Feedback
        </h2>
        <p className="text-base text-gray-400 mt-3">
          Compellingly expedite mission-critical methodologies and integrated
          readiness without quality intellectual capital.
        </p>
        <div className="flex mt-8 items-center gap-3 ">
          <span className="w-10 h-10 rounded-full flex justify-center items-center bg-red-700">
            <Icon
              icon="line-md:phone-call-loop"
              width="24"
              height="24"
              style={{ color: "#d9e6e6" }}
            />
          </span>
          <span className="text-xl font-bold text-white">+9378-9674-4455</span>
        </div>
        <div className="mt-8">
          <span className="text-xl font-bold text-white">
            Get latest updates & offers
          </span>
          <div className="mt-3 bg-white flex gap-3 items-center rounded-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-4/5 md:w-[90%] sm:w-[90%] h-10 px-3 rounded-md border-none focus:outline-none"
            />
            <button className="bg-red-700 text-white px-4 py-2 rounded-tr-md rounded-br-md ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 md:px-3 md:w-full sm:w-full sm:pt-8 lg:w-3/5 h-72 sm:h-auto flex sm:justify-center sm:flex-wrap justify-between items-center">
        <FooterCart lable={"About Company"} list={ourCompanyLinks}/>
        <FooterCart lable={"Vehicles Type"} list={vehicleCategories}/>
        <FooterCart className="sm:hidden" lable={"Quick links"} list={quickLinks}/>
      </div>
    </div>
  );
}

export default Footer;
