import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      "Die Entrümpelung unseres Hauses verlief reibungslos und professionell. Das Team war äußerst zuverlässig und hat hervorragende Arbeit geleistet. Ich kann ihre Dienste nur empfehlen.",
    name: "Anna M.",
    title: "Kundin für Entrümpelungsdienste",
  },
  {
    quote:
      "Unsere Fenster glänzen wieder! Die Fensterreinigung war schnell und gründlich. Ein großes Lob an das Team für ihre Effizienz und Professionalität.",
    name: "Thomas S.",
    title: "Kunde für Fensterreinigung",
  },
  {
    quote: "Der Winterdienst hat uns in den kalten Monaten sehr geholfen. Immer pünktlich und zuverlässig, sogar bei starkem Schneefall. Sehr empfehlenswert!",
    name: "Julia B.",
    title: "Kundin für Winterdienste",
  },
  {
    quote:
      "Unsere Baustelle wurde nach Abschluss der Arbeiten gründlich gereinigt. Das Team hat hart gearbeitet, um sicherzustellen, dass alles makellos aussieht. Danke für die großartige Arbeit!",
    name: "Michael W.",
    title: "Kunde für Bauendreinigung",
  },
  {
    quote:
      "Die Parkhausreinigung wurde sehr professionell durchgeführt. Das Team war schnell, effizient und gründlich. Wir sind mit dem Ergebnis sehr zufrieden.",
    name: "Sabine M.",
    title: "Kundin für Parkhausreinigung",
  },
  {
    quote:
      "Die Grünflächenbetreuung unseres Bürokomplexes ist erstklassig. Das Team kümmert sich liebevoll um jede Pflanze und sorgt dafür, dass unser Gelände immer gepflegt aussieht.",
    name: "Markus L.",
    title: "Kunde für Grünflächenbetreuung",
  },
  {
    quote:
      "Unsere Dachrinnen sind jetzt frei von Schmutz und Laub dank der Dachrinnenreinigung. Das Team war professionell und hat einen großartigen Job gemacht.",
    name: "Petra F.",
    title: "Kundin für Dachrinnenreinigung",
  },
];


const HomeAboutUsSec4 = () => {
  return (
    <section className="rating-section rounded-md py-24 flex flex-col antialiased items-center justify-center gap-5">
      <h2 className="h1-bold text-primary-500 max-sm:h2-bold max-sm:text-center">EINDRÜCKE UNSERER KUNDEN</h2>

      <InfiniteMovingCards
        items={testimonials}
      />
    </section>
  )
}

export default HomeAboutUsSec4