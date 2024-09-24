import React from "react";
import logo from "/Images/Printify.svg";
import { footer, social } from "../utils/social";

function Footer() {
  return (
    <header className="grid sm:grid-rows-2 m-2 items-center min-h-screen ">
      <div className="flex justify-around">
        <img src={logo} alt="Logo" className="w-24" />
        <div className="flex gap-3">
          {social.map((index) => (
            <div key={index.id}>
              <img src={index.img} alt={index.alt} className="w-7" />
            </div>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-4 m-6 pl-60 relative bottom-48">
        {footer.map((item) => (
          <div key={item.id}>
            <h1 className="font-bold">{item.para}</h1>
            <br />
            <div className="space-y-3">
              {item.data.map((paras, index) => (
                <p key={index} className="text-sm"><a href="#" className="hover:text-green-500">{paras}</a></p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-rows-2 bg-slate-100 w-full items-center text-center">
          <div className="flex justify-center space-x-8">
            <h1 className="text-xs">Intellectual Property Policy</h1>
            <h1 className="text-xs">Terms of Service</h1>
            <h1 className="text-xs">Privacy Policy</h1>
            <h1 className="text-xs">Security</h1>
          </div>
          <div className="pt-4">
            <p className="text-xs">© 2024 Printify, Inc. All rights reserved.</p>
          </div>
      </div>
    </header>
  );
}

export default Footer;
