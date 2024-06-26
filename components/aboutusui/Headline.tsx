import React from 'react'
import Button from "../ui/spotify-button"

const Headline = () => {
  return (
    <section className="pt-44 py-24 px-5 flex flex-col justify-center items-center gap-5">
      <h1 className="h1-bold text-primary-500 max-sm:h2-bold">ÜBER UNS</h1>
      <p className="max-w-[800px] text-center text-primary-2 font-spaceGrotesk px-5">
        Die Reinigung kann mühsam sein, und wir wissen, dass Sie viele
        Möglichkeiten haben, wenn Sie einen umfassenden, qualitativ hochwertigen
        und zuverlässigen Reinigungsservice in Betracht ziehen.
      </p>
      <Button />
    </section>
  )
}

export default Headline