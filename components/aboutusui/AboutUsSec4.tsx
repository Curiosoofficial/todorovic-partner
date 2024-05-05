import Image from "next/image"
import React from 'react'
import Button from "../ui/spotify-button"

const AboutUsSec4 = () => {
  return (
    <section className=" flex flex-row-reverse justify-center items-center gap-10 p-24 max-lg:flex-col max-sm:items-center">
        <Image
          src="/aboutUsSection/collage1.png"
          alt="collage"
          width={600}
          height={600}
        />

        <div className="flex flex-col w-[650px] max-sm:w-[300px] max-sm:text-center max-md:w-[500px]">
          <h3 className="h1-bold pb-5 pt-[5px] text-primary-500 leading-none max-sm:h2-bold">
            UNSERE GESCHICHTE
          </h3>
          <p className="pb-5 paragraph-regular text-primary-2 font-spaceGrotesk">
          Willkommen bei Todorovic & Partner, Ihrem zuverlässigen Partner für professionelle Reinigungsdienstleistungen. Vor zehn Jahren begann unsere Reise in einer kleinen Garage mit der Vision, makellose Ergebnisse und außergewöhnlichen Service zu bieten. Als Gründer, John und Maria, haben wir uns der Qualität und Kundenzufriedenheit verschrieben. Heute sind wir stolz darauf, ein führender Anbieter in unserer Region zu sein, der eine Vielzahl von Kunden bedient, darunter Unternehmen, Bürogebäude, medizinische Einrichtungen und Privathaushalte. Unsere fortlaufenden Investitionen in Schulungen und modernste Ausrüstung ermöglichen es uns, den sich wandelnden Bedürfnissen unserer Kunden gerecht zu werden. Danke an unsere treuen Kunden für ihre Unterstützung - wir freuen uns darauf, Ihre Räumlichkeiten strahlend sauber zu halten.
          </p>
          
          <div className="mt-5">
            <Button />
          </div>
        </div>
      </section>
  )
}

export default AboutUsSec4