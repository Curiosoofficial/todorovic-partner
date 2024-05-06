import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { aboutussec } from "@/constants";
import Image from "next/image";
import Button from "../ui/spotify-button";

const HomeAboutUsSec1 = () => {
  return (
    <section>
      <BackgroundGradientAnimation>
        <div className=" pb-16 gap-3 absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center overflow-hidden">
          <h2 className="bg-clip-text p-2 drop-shadow-2xl h1-bold max-md:h2-bold">
            ÜBER UNSER UNTERNEHMEN
          </h2>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="base-semibold max-w-[1200px] bg-clip-text  drop-shadow-2xl  max-md:paragraph-medium">
              Die Reinigungsplanung kann mühsam sein und wir wissen, dass Sie
              viele Möglichkeiten haben, wenn um die Auswahl des richtigen
              Partners geht. Aus diesem Grund sind wir ständig bemüht, unsere
              bereits hohen Standards zu verbessern, damit Sie uns als die
              absolut Besten der Branche ansehen. Sie können unserem
              Reinigungspersonal zu 100% vertrauen, dass es einen erstklassigen
              Reinigungsjob für Sie ausführt.
            </p>
            <div className="grid grid-cols-2 max-sm:grid-cols-1">
              {aboutussec.map((item) => (
                <span
                  className="flex gap-1 px-5 py-2 base-semibold max-md:paragraph-medium max-sm:py-1 bg-clip-text  drop-shadow-2xl "
                  key={item}
                >
                  <Image src="/check.png" width={20} height={20} alt="check" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Button className="absolute top-[78%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 max-sm:top-[83%] max-md:top-[75%]" />
      </BackgroundGradientAnimation>
    </section>
  );
};

export default HomeAboutUsSec1;
