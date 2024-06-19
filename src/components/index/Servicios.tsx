import Image from 'next/image'
import React from 'react'
import { FaFire } from 'react-icons/fa'

export const Servicios = () => {
  return (
    <div>
    <section className="text-center my-[10%] mx-8" id="servicios">
     <article>
        <h4 className='text-3xl lg:text-5xl font-bold mb-4'>3 Mejores razones para adquirir los servicios de Dial.</h4>
        <p className=' text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aliquid vitae aliquam soluta deleniti nihil nobis aspernatur, quia eum nostrum ipsam quaerat perferendis voluptatibus illum vero distinctio cumque, quidem eos.</p>
        <div className="flex lg:flex-row flex-col justify-between mt-[5%] gap-8 lg:gap-2">
            <div className="w-full lg:w-[33%]">
                <div className="rounded-full p-3 text-[20px] text-azul bg-gold flex items-center justify-center gap-3">
                   <FaFire size={25}/>  <p className=' font-regular'>TRABAJOS PROFESIONALES</p>
                  
                </div>
                <div className="text-[20px]">
                    <span>¡Realización de proyectos sumamente profesionales! Asesoria personalizada</span>
                </div>
            </div>
            <div className="w-full lg:w-[33%]">
                <div className="rounded-full p-3 text-[20px] text-azul bg-gold flex items-center justify-center gap-3">
                   <FaFire size={25}/>  <p className=' font-regular'>CAPACITACIÓNES HIBRIDAS</p>
                  
                </div>
                <div className="text-[20px]">
                    <span>Capacitaciones presenciales y virtuales en diferentes tecnicas y sistemas de acabado y personalizacion.</span>
                </div>
            </div>
            <div className="w-full lg:w-[33%]">
                <div className="rounded-full p-3 text-[20px] text-azul bg-gold flex items-center justify-center gap-3">
                   <FaFire size={25}/>  <p className=' font-regular'>INSUMOS DE ALTA CALIDAD</p>
                  
                </div>
                <div className="text-[20px]">
                    <span>Venta de todo tipo de insumos alta calidad, pregunta YA mismo.</span>
                </div>
            </div>
            
            </div>
    </article>
    </section>
    </div>
  )
}
