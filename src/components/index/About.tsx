import Image from 'next/image'
import React from 'react'
import styles from '../../../public/css/index.module.css'
import Link from 'next/link'
import { IoFlashSharp } from 'react-icons/io5'


export const About = () => {
  return (
    <div className='my-[10%] mx-6- lg:mx-8'>
        <section className={styles.contenedor_about} id="nosotros">  
        <div>
            <h2>¿Quienes somos?</h2>
            <p>Poliméricos Dial de Colombia es una compañía colombiana con centro de operaciones en la ciudad de Bogotá, dedicada a la implementación de nuevos sistemas para construcción, manejo de polímeros y tecnologías de decoración avanzada automotriz, con profesionales especializados en cada una de las áreas para llevar los conocimientos a las principales ciudades en el mundo.</p>

            <Link href="https://api.whatsapp.com/send?phone=%2B573058517530&context=ARANaxkEnQzLhYJQwqzUUrVnzGz_ND2E2lkcNPPQSc7bclRL4ns5O6hf50HWQQGwz6wGi8Fa2dS-9ZtdN_-FZ0q8zCLydwAx0pLjH_ZWEB7eM1avwYaw3n-zooYbCoRuFfqK8bwS2xd714YHoiotcMbStQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0SkEeadJIgKA-sGqza4lcq4OaX_yiD1rtJ5D_gRLiKvc0lhoRFsY9rbaY_aem_Ae5IlTcH9Kl9HACHhNtg8iombYGY1Wg5sOkVDryMXN3fsOd05PZ4wEwiTVNYZfeHSQNGsG7dN7KWOW6EUWiU8kZf" target='_blank'>
            {/* boton */}
            <div className="flex justify-center items-center">
                        <button
                            className="w-[180px] relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 "  >
                            <span
                                className="w-full h-full font-regular flex items-center justify-center gap-2 px-8 py-3 bg-[#B931FC] text-black rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
                            >Contactar <IoFlashSharp /> </span>
                        </button>
                        

                    </div>
            </Link>
        </div>
        
    </section>
    </div>
  )
}
