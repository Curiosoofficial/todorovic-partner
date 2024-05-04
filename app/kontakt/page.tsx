import ContactForm from "@/components/contact/ContactForm"
import React from 'react'

const page = () => {
  return (
    <section className="pt-24 flex flex-col justify-center items-center gap-5">
      
      <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0567748864128!2d16.203505976748737!3d48.20552234642804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da752e82c44fd%3A0xc2c26bb7a798d0c3!2sHauptstra%C3%9Fe%20117%2C%201140%20Wien%2C%20%C3%96sterreich!5e0!3m2!1sde!2sch!4v1714829850968!5m2!1sde!2sch" loading="lazy"></iframe>
      <h1 className="h1-bold pt-24 text-primary-500">KONTAKTIEREN SIE UNS</h1>
      <p className="max-w-[800px] text-center text-primary-2">
      Für eine makellose Reinigungslösung, die Sie überzeugen wird. Unsere Tür steht offen für Ihre Anfragen und Bedürfnisse. Erleben Sie erstklassigen Service und Zuverlässigkeit - kontaktieren Sie uns jetzt.
      </p>

      <ContactForm/>
      
    </section>
  )
}

export default page