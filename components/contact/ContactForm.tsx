"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3g6syva", "template_4fe49q2", form.current, {
        publicKey: "bin5GxQVtyxvlXxXK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex gap-20 py-10">
      <div className="flex flex-col justify-center items-start">
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

      <form className="flex flex-col gap-3" ref={form} onSubmit={sendEmail}>
        <h2 className="h2-bold text-primary-1 pb-10">Hinterlassen sie uns eine Nachricht</h2>
        
        <input placeholder="Name" className="bg-[#f3fcf2] p-3 rounded-lg" type="text" name="user_name" />
        
        <input placeholder="Email" className="bg-[#f3fcf2] p-3 rounded-lg" type="email" name="user_email" />
        <input placeholder="Betreff" className="bg-[#f3fcf2] p-3 rounded-lg" type="text" name="subject" />
        <textarea placeholder="Ihre Nachricht..." className="bg-[#f3fcf2] p-3 rounded-lg" name="message" />
        <input placeholder="" className="bg-[#f3fcf2] p-3 rounded-lg" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
