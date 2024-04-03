import HomeAboutUsSec from "@/components/homeui/HomeAboutUsSec";
import HomeServiceSec from "@/components/homeui/HomeServiceSec";
import { ImagesSlider } from "@/components/ui/images-slider";
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
          <button>Jetzt anfragen</button>
      </div>

      <HomeServiceSec/>

      <HomeAboutUsSec/>
    </main>
  );
}
