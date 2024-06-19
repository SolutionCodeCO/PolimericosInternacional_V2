
import { Visitas, Contacto, Portada, Servicios, Testimonios, Title, About } from "@/components";
import SliderBanderas from "@/components/index/SliderN2";


export default function Home() {
  return (
   <div className="">
    <Portada/>
    <SliderBanderas />
    <About />
    <Visitas />
    <Servicios />
    <Testimonios />
    <Contacto />
   </div>
  );
}
