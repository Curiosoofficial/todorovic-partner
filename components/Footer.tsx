import { footerInfo, footerLinks, navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Button from "./ui/spotify-button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex items-start gap-24 justify-center p-12 footer-index w-full max-md:py-24 max-md:flex-col">
        <div className="flex flex-col w-full max-w-[350px] gap-5">
          <h4 className="footer-bold">
            Todorovic<span className="text-primary-500">Partner</span>
          </h4>
          <p className="paragraph-semibold font-spaceGrotesk">
            Wir bieten den besten Reinigungsservice in Wien! Kontaktieren Sie
            uns noch heute für ein Angebot!
          </p>
          <div>
            <Button />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[350px] gap-5">
          <h4 className="footer-bold">Reinigungsservice Wien</h4>
          <div className="flex flex-col gap-3">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.route} className="base-medium">
                <p className="paragraph-semibold font-spaceGrotesk">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full max-w-[350px] gap-5">
          <h4 className="footer-bold">Kontaktieren Sie uns:</h4>
          {footerInfo.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-3 paragraph-semibold font-spaceGrotesk"
            >
              <p className="flex items-center gap-3"><Image src="/footer/location.png" alt="location" height={20} width={20}/>{item.adress}</p>
              <p className="flex items-center gap-3"><Image src="/footer/call.png" alt="phone" height={20} width={20}/>{item.phone}</p>
              <p className="flex items-center gap-3"><Image src="/footer/open-mail.png" alt="email" height={20} width={20}/>{item.mail}</p>
              <p className="flex items-center gap-3"><Image src="/footer/headset.png" alt="headset" height={20} width={20}/>{item.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start justify-center p-3 nav-index w-full bg-primary-500 text-white font-spaceGrotesk text-center">
          <p>© 2023 - Todorovic & Partner KG | Proudly made by <span className="font-bold border-b-2"><Link href="https://webdevbyluka.com/">Luka Stefanovic</Link></span></p>
      </div>

    </footer>
  );
};

export default Footer;
