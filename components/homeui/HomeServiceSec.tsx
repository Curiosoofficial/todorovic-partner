import React from "react";
import { PinContainer } from "../ui/3d-pin";

const HomeServiceSec = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-24 pb-32">
      <h2 className="h2-bold">Unser Service</h2>
      <p className="max-w-2xl text-center">
        Wir bieten verschiedenste Arten von Reinigungen sowie Dienstleistungen
        für Ihre Immobilie an. Ob Sie eine Hausbetreuung oder Winterdienste in
        der Saison benötigen, bei uns werden alle Wünsche berücksichtigt.
      </p>
      <div className="flex gap-16 pt-36 pb-28">
        <PinContainer
          title="Hausbetreuung"
          href="/"
          className="w-80 text-center flex flex-col items-center justify-between h-[450px] py-8"
        />

        <PinContainer
          title="Spezielle Reinigung"
          href="/"
          className="w-80 text-center flex flex-col items-center justify-between h-[550px] py-8"
        />

        <PinContainer
          title="Kommerzielle Reinigung"
          href="/"
          className="w-80 text-center flex flex-col items-center justify-between h-[450px] py-8"
        />
      </div>
    </section>
  );
};

export default HomeServiceSec;
