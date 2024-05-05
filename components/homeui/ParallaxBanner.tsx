import Image from 'next/image'
import React from 'react'

const ParallaxBanner = () => {
  return (
    <section className="bg-parallax1 bg-fixed flex items-center justify-evenly p-24 max-lg:flex-col max-lg:gap-20">
        <div className="flex flex-col justify-center items-center">
            <Image
                src="/parallax/icons/rating.png" alt="rating" width={100} height={100} className="invert-colors pb-5"
            />
            <span className="h2-bold text-primary-500">300+</span>
            <p className="h3-bold pt-3 text-white font-spaceGrotesk text-center">Glückliche Kunden</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <Image
                src="/parallax/icons/certificate.png" alt="certificate" width={100} height={100} className="invert-colors pb-5"
            />
            <span className="h2-bold text-primary-500">100%</span>
            <p className="h3-bold pt-3 text-white font-spaceGrotesk text-center">Service Garantie</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <Image
                src="/parallax/icons/experience-transfer.png" alt="worker" width={100} height={100} className="invert-colors pb-5"
            />
            <span className="h2-bold text-primary-500">30+</span>
            <p className="h3-bold pt-3 text-white font-spaceGrotesk text-center">Mitarbeiter</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <Image
                src="/parallax/icons/busy.png" alt="time" width={100} height={100} className="invert-colors pb-5"
            />
            <span className="h2-bold text-primary-500">700+</span>
            <p className="h3-bold pt-3 text-white font-spaceGrotesk text-center">Abgeschlossene Aufträge</p>
        </div>
    </section>
  )
}

export default ParallaxBanner