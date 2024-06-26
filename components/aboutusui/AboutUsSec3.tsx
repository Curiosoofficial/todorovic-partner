import React from 'react'
import Button from "../ui/spotify-button"

const AboutUsSec3 = () => {
  return (
    <section className="bg-[#f3fcf2] py-24 flex flex-col justify-center items-center gap-5">
        <h2 className="h1-bold max-sm:h2-bold px-5 text-primary-500 text-center">UNSER VERSPRECHEN</h2>
        <h3 className="h3-bold px-5 text-primary-1 font-spaceGrotesk text-center">Wir betreuen unsere Privat & Geschäftskunden mit Qualitätsgarantie seit mehreren Jahren!</h3>
        <p className="text-center text-primary-2 max-w-[800px] font-spaceGrotesk px-5">Todorovic & Partner ist außerdem dafür bekannt, unseren Kunden flexibel entgegenzukommen und dabei trotzdem Präzesion aufzuweisen. Wir haben eine Tradition der Exzellenz und des Engagements für unsere Kunden und bieten in ganz Österreich professionelle und qualitativ hochwertige Reinigungsdienste an.</p>
        <Button/>
    
    </section>
  )
}

export default AboutUsSec3