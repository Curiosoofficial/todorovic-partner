"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormButton from "../ui/spotify-form-button";

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);
  
  // @ts-ignore
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
    // @ts-ignore
    .sendForm("service_3g6syva", "template_4fe49q2", form.current, {
      publicKey: "bin5GxQVtyxvlXxXK",
    })
    .then(
      () => {
        console.log("SUCCESS!");
        setMessage('Nachricht erfolgreich abgesendet!');
        e.target.reset()
      },
      (error) => {
        console.log("FAILED...", error.text);
        setMessage('Etwas ist schief gelaufen.');
      }
    );
  };
  return (
    <div className="flex gap-20 pt-10 pb-24 max-lg:flex-col">
      <div className="flex flex-col justify-center items-start max-md:items-center max-md:text-center">
        <h2 className="h2-bold text-primary-1 pb-10">Zentrale Wien</h2>
        <div className="flex flex-col gap-1 py-2">
          <h3 className="h3-bold text-primary-1">Adresse</h3>
          <p className="text-primary-2">
            Hauptstrasse 117 <br />
            Wien 1140
          </p>
        </div>
        <div className="flex flex-col gap-1 py-2">
          <h3 className="h3-bold text-primary-1">Telefon</h3>
          <p className="text-primary-2">+43 660 5622209</p>
        </div>
        <div className="flex flex-col gap-1 py-2">
          <h3 className="h3-bold text-primary-1">Öffnungszeiten</h3>
          <p className="text-primary-2">Mo-Fr: 9:00h – 17:00h</p>
        </div>
        <div className="flex flex-col gap-1 py-10">
          <h3 className="h3-bold text-primary-1">Folge uns auf</h3>
          <div className="bg-primary-500 h-10 w-10 rounded-full"></div>
        </div>
      </div>

      
      <form className="flex flex-col gap-3 max-md:items-center max-md:max-w-[350px]" ref={form} onSubmit={sendEmail}>
        <h2 className="h2-bold text-primary-1 pb-10 max-md:text-center">Hinterlassen sie uns eine Nachricht</h2>
        
        <input placeholder="Name" className="w-full bg-[#f3fcf2] p-3 pl-5 text-primary-2 placeholder:text-primary-2 rounded-3xl" type="text" name="user_name" required />
        
        <input placeholder="Email" className="w-full bg-[#f3fcf2] p-3 pl-5 text-primary-2 placeholder:text-primary-2 rounded-3xl" type="email" name="user_email" required />
        <input placeholder="Betreff" className="w-full bg-[#f3fcf2] p-3 pl-5 text-primary-2 placeholder:text-primary-2 rounded-3xl" type="text" name="subject" required />
        <textarea placeholder="Ihre Nachricht..." className="w-full bg-[#f3fcf2] p-3 pl-5 text-primary-2 placeholder:text-primary-2 rounded-3xl" name="message" required />
        {message && <p className="text-primary-2">{message}</p>}
        <div>
          <FormButton className="mt-4"/>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
