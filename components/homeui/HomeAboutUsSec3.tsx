import { benefits } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "../ui/spotify-button";

const HomeAboutUsSec3 = () => {
  return (
    <section className="flex justify-center items-start gap-10 pb-24">
      <Image
        src="/aboutUsSection/collage1.png"
        alt="collage"
        width={600}
        height={600}
      />

      <div className="flex flex-col w-[600px]">
        <h3 className="h1-bold text-primary-500 leading-none">WARUM WIR</h3>
        <p className="pb-5 paragraph-regular">
          Hinter unserer unerschütterlichen Verpflichtung zu Spitzenleistungen
          stehen zahlreiche Schlüsselmerkmale, die nicht nur unsere Identität
          prägen, sondern auch deutlich hervorheben, was uns als
          Reinigungsunternehmen einzigartig macht und uns klar von anderen
          Wettbewerbern abgrenzt.
        </p>
        {benefits.map((benefit) => (
          <div className="flex flex-col py-1" key={benefit.title}>
            <h4 className="h3-bold">{benefit.title}</h4>
            <p className="paragraph-regular">{benefit.desc}</p>
          </div>
        ))}
        <div className="mt-5">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUsSec3;
