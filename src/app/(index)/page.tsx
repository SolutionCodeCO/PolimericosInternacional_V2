import Image from "next/image";
import { About, Contacto, Portada, Servicios, Testimonios, Title } from "@/components";
import SliderBanderas from "@/components/index/SliderN2";


export default function Home() {
  return (
   <div className="">
    <Portada/>
    <About />
    <SliderBanderas />
    <Servicios />
    <Testimonios />
    <Contacto />
   </div>
  );
}
