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
        <p className="base-medium">Professionelle Leistung</p>
        <h1 className="h1-bold py-5">Sauber und Schnell</h1>
        <Button/>
      </div>

      <HomeServiceSec />

      <HomeAboutUsSec1 />

      <HomeAboutUsSec2 />

      <ParallaxBanner/>

      <HomeAboutUsSec3 />
      
      <HomeAboutUsSec4 />
      
      <Footer/>

    </main>

  );
}
