export const revalidate = 60; //1 min en el cache
import FlowbiteScript from '../../components/FlowbiteScript';
import { Visitas, Contacto, Portada, Servicios, Testimonios, About } from "@/components";
import SliderBanderas from "@/components/index/SliderN2";


export default function Home() {
  return (
   <div className="">
    <Portada/>
    <SliderBanderas />
    <About />
    <Visitas />
    <Servicios />
    <FlowbiteScript />
    <Testimonios />
    <Contacto />
   </div>
  );
}
