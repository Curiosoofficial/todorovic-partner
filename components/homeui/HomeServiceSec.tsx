import React from "react";
import { PinContainer } from "../ui/3d-pin";


const HomeServiceSec = () => {
  return (
    <section className="card-section flex flex-col justify-center items-center gap-10 pt-24 pb-32">
      <h2 className="h1-bold text-primary-500 max-sm:h2-bold">UNSER SERVICE</h2>
      <p className="max-w-2xl px-5 text-center base-medium text-primary-1 max-sm:paragraph-medium ">
        Wir bieten verschiedenste Arten von Reinigungen sowie Dienstleistungen
        für Ihre Immobilie an. Ob Sie eine Hausbetreuung oder Winterdienste in
        der Saison benötigen, bei uns werden alle Wünsche berücksichtigt.
      </p>
      <div className="flex gap-16 pt-36 pb-28 max-xl:flex-col max-xl:gap-72 max-xl:pt-24">
        <PinContainer
          title="Hausbetreuung"
          href="/"
          className="text-primary-2 w-80 text-center flex flex-col items-center justify-around h-[470px] py-8"
        />

        <PinContainer
          title="Spezielle Reinigung"
          href="/"
          className="text-primary-2 w-80 text-center flex flex-col items-center justify-around h-[550px] py-8"
        />

        <PinContainer
          title="Kommerzielle Reinigung"
          href="/"
          className="text-primary-2 w-80 text-center flex flex-col items-center justify-around h-[470px] py-8"
        />
      </div>

    </section>
  );
};

export default HomeServiceSec;
