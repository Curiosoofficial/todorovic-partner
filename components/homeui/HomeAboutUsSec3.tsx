import { benefits } from '@/constants'
import Image from 'next/image'
import React from 'react'

const HomeAboutUsSec3 = () => {
  return (
    <section className="flex justify-center items-center gap-10 pb-24">
        <Image
        src="/aboutUsSection/collage1.png"
        alt="collage"
        width={600}
        height={600}
        />

        <div className="flex flex-col justify-between w-[600px]">
            <h3 className="h2-bold text-primary-500 leading-none">GRÜNDE FÜR TODOROVICPARTNER</h3>
            <p>Hinter unserer Verpflichtung zu Spitzenleistungen stehen einige Schlüsselmerkmale, die definieren, wer wir sind und was uns von anderen Reinigungsunternehmen unterscheidet.</p>
            {benefits.map((benefit) => (
                <div className="flex flex-col py-3" key={benefit.title}>
                    <h4 className="h3-bold">{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                </div>
            ))}
        
        </div>
    </section>
  )
}

export default HomeAboutUsSec3