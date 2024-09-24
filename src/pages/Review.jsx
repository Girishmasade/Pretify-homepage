import React from "react";
import { review } from "../utils/review";

const Review = () => {
  return (
    <header className="bg-slate-300 min-h-screen">
      <div className="grid sm:grid-cols-2 p-32 ">
        <div className="grid sm:grid-cols-2 space-x-36">
          <h1 className="text-5xl w-96">
            Trusted by over 8M sellers around the world
          </h1>
          <p className="w-72">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
        <div className=" flex space-x-5 relative top-[200px] right-[650px] w-full">
          {
            review.map((index) => (
              <div className="w-full " key={index.id}>
              <div className="bg-white grid sm:grid-rows-2 rounded-lg">
                <div className="grid grid-cols-2">
                  <div className="m-2" key={index.id}>
                  <img src={index.img} alt="" className="w-20"/>
                  </div>
                  <div className="grid grid-rows-3 relative right-28 top-1 p-2 mb-8" id="databox">
                    <h1 className="font-bold">{index.head}</h1>
                    <h3>{index.name}</h3>
                    <img src={index.rev} alt="" className="w-20"/>
                  </div>
                </div>
    
                <div className="w-[400px] m-2">
                  <p>
                    {index.des}
                  </p>
                </div>
              </div>
            </div>
            ))
          }
       
        </div>
      </div>
    </header>
  );
};

export default Review;
