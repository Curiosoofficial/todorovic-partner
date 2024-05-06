import React from 'react'
import TeamCards from "./TeamCards"

const AboutUsSec2 = () => {
  return (
    <section className="py-24 flex flex-col justify-center items-center gap-5">
        <h2 className="h1-bold text-primary-500 max-sm:h2-bold">UNSER TEAM</h2>
        <p className="text-center px-5 text-primary-2 font-spaceGrotesk">Unsere Führungskraft steht Ihnen jederzeit für Fragen im Bereich Reinigungskonzept zur Verfügung. Wir helfen gerne!</p>
        <TeamCards/>
        <p className="text-center px-5 text-primary-2 font-spaceGrotesk">Todor gründete das Unternehmen 2016 und stellt die Führung zur Verfügung, die zur Aufrechterteilung unseres Ansehens erforderlich ist.</p>
    </section>
  )
}

export default AboutUsSec2