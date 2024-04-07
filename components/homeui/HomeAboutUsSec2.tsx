import React from "react";
import Button from "../ui/spotify-button";

const HomeAboutUsSec2 = () => {
  return (
    <section className="flex flex-col p-24 justify-center items-center gap-10 max-sm:text-center">
      <h2 className="h1-bold py-5 text-primary-500 max-sm:h2-bold">WIE ES FUNKTIONIERT</h2>
      <div className="flex items-start justify-center gap-5 max-lg:flex-col max-sm:items-center">
        <div className="flex flex-col w-[600px] gap-2 max-sm:w-[300px]">
          <h3 className="h3-bold">Wie der Ablauf stattfindet</h3>
          <p>
            Wenn das Wochenende endlich da ist, legen Sie lieber die Füße hoch,
            während ein Reinigungsdienst die Arbeit erledigt, als Ihre kostbaren
            Ausfallzeiten auf Hände und Knie zu verwenden.
          </p>
          <p>
            Wir sind darauf spezialisiert, jeglichen Aspekt der Reinigung zu
            entlasten. Wir kommen zu Ihnen und unterbreiten Ihnen ein
            kostenloses Angebot, damit Sie genau wissen, wie viel Sie ausgeben
            werden
          </p>
          <p>
            Schicken Sie uns jetzt Ihre Anfrage per E-Mail oder rufen Sie uns
            direkt an!
          </p>
        </div>
        <div className="w-[600px] max-sm:w-[300px]">
          <h4 className="h3-bold">Hausbetreuung</h4>
          <p>
            Ob Häuser oder Wohnungen, wir übernehmen die Arbeit und betreuen
            Ihre Immobilien rundum.
          </p>

          <h4 className="h3-bold">Kommerzielle Reinigung für Unternehmen & Büros</h4>
          <p>
            Unternehmen benötigen verschiedenste Arten der Reinigung – Wir
            bieten Ihnen ein Gesamtpaket an.
          </p>

          <h4 className="h3-bold">Spezialreinigungen</h4>
          <p>
            Ob Winterdienste, Fassadenreinigungen, Grundreinigungen oder
            Instandhaltung des Gartens – Bei uns in besten Händen.
          </p>
        </div>
      </div>
      <Button/>
    </section>
  );
};

export default HomeAboutUsSec2;
