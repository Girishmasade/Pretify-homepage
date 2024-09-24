import React from "react";
import { Data } from "../utils/Data";
import "../Style/HeroProfit.css";
import clothes from '/Images/clothes.jpg'
import rightarrow from '/Images/arrow.svg'
import tshirt from '/Images/white.png'

const HeroProfit = () => {
  return (
    <>
      <header className="m-5 p-5 pb-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 ml-48">
          {Data.map((index) => (
            <div className="pt-2 space-y-6" key={index.id}>
              <img src={index.image} className="w-24" />
              <h1 className="font-bold text-xl">{index.title}</h1>
              <p className="mr-32">{index.des}</p>
            </div>
          ))}
        </div>
      </header>
      <header className="bg-gray-300 min-h-screen w-full ">
        <div className="imgarrow z-10"></div>
        <div className="container grid sm:grid-cols-2">
          <div className="container">
            <div className="flex justify-center items-center">
              <div className="bg-green-500 box">
                <img src={clothes} alt="clothes image" />
              </div>
              <div className="boxData"></div>
              <div className="boxData1">
                <img src={tshirt} alt="tshirt image" />
              </div>
              <div className="boxDataContainer grid ">
                <div className="grid sm:grid-rows-3 absolute left-20 pl-28 top-14 space-y-4 pr-2">
                  <h1 className="text-2xl font-bold">
                    Easily add your design to a wide range of products
                  </h1>
                  <p>
                    With our free design tools, you can easily add your custom
                    designs to t-shirts, mugs, phone cases, and hundreds of
                    other products.
                  </p>
                  <a href="#" className="text-green-600 pt-2">All products <img src={rightarrow} alt="right arrow" className="w-5 relative left-24 bottom-5"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroProfit;
