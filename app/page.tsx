import Footer from "@/components/Footer";
import HomeAboutUsSec1 from "@/components/homeui/HomeAboutUsSec1";
import HomeAboutUsSec2 from "@/components/homeui/HomeAboutUsSec2";
import HomeAboutUsSec3 from "@/components/homeui/HomeAboutUsSec3";
import HomeAboutUsSec4 from "@/components/homeui/HomeAboutUsSec4";
import HomeServiceSec from "@/components/homeui/HomeServiceSec";
import ParallaxBanner from "@/components/homeui/ParallaxBanner";
import { ImagesSlider } from "@/components/ui/images-slider";
import Button from "@/components/ui/spotify-button";
import { heroImages } from "@/constants";

export default function Home() {
  return (
    <main className="h-screen">
      <ImagesSlider images={heroImages}>
        <span></span>
      </ImagesSlider>

      <div className="z-100 flex flex-col justify-center items-center text-light-900 absolute top-[50%] left-0 right-0">
        <p className="h2-semibold max-sm:h3-semibold">Professionelle Leistung</p>
        <h1 className="hero-bold pt-5 pb-7 max-sm:h2-bold max-md:h2-bold">Sauber und Schnell</h1>
        <Button/>
      </div>

      <HomeServiceSec />


      <HomeAboutUsSec2 />

      <ParallaxBanner/>

      <HomeAboutUsSec3 />
      
      <HomeAboutUsSec4 />
      
      <HomeAboutUsSec1 />
      <Footer/>

    </main>

  );
}
