import { footerInfo, footerLinks, navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-start gap-24 justify-center p-12 nav-index w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-md:flex-col">

      <div className="flex flex-col w-[250px] gap-5">
        <h4 className="h3-bold">
          Todorovic<span className="text-primary-500">Partner</span>
        </h4>
        <p>
          Wir bieten den besten Reinigungsservice in Wien! Kontaktieren Sie uns
          noch heute für ein Angebot!
        </p>
      </div>

      <div className="flex flex-col w-[250px] gap-5">
        <h4 className="h3-bold">Reinigungsservice Wien</h4>
        <div className="flex flex-col gap-3">
          {footerLinks.map((item) => (
            <Link key={item.label} href={item.route} className="base-medium">
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[250px] gap-5">
        <h4 className="h3-bold">Kontaktieren Sie uns:</h4>
          {footerInfo.map((item) => (
          <div key={item.label} className="flex flex-col gap-3">
            <p>{item.adress}</p>
            <p>{item.phone}</p>
            <p>{item.mail}</p>
            <p>{item.time}</p>
          </div>
          ))}
          
      </div>

  
      
    </footer>
  );
};

export default Footer;
