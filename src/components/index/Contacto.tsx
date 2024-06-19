import React from 'react'
import styles from '../../../public/css/index.module.css'
import { IoFlashSharp } from 'react-icons/io5'

export const Contacto = () => {
  return (
    <div className='my-[10%] mx-8'>
        <section className={styles.contenedor_contactanos} id="contacto">
       <article>
        <form className={styles.form} method="POST" action="/form-contacto">
            <p className={styles.title}>Contactanos y te daremos toda la información </p>
            <p className={styles.message}>Si Polimericos Dial tuviera un sinonimo, sería ¡CALIDAD!.

                #1 de Colombia ¿Qué esperas para contactarnos?</p>
                <div className={styles.flex}>
                <label>
                    <input className={styles.input} type="text" placeholder="" required name="nombres_cont" />
                    <span>Nombres</span>
                </label>
        
                <label>
                    <input className={styles.input} type="text" placeholder="" required name="apellidos_cont" />
                    <span>Apellido</span>
                </label>
            </div>  
                    
            <div className={styles.flex}>
                <label>
                    <input className={styles.input} type="email" placeholder="" required name="email_cont" />
                    <span>Email</span>
                </label>
        
                <label>
                    <input className={styles.input} type="number" placeholder="" required name="numero_tlf_cont" />
                    <span>Número de teléfono</span>
                </label>
            </div>  
            <div className={styles.flex}>
                <label>
                    <input className={styles.input} type="text" placeholder="" required name="asunto_cont" />
                    <span>¿En que estas interesado?</span>
                </label>
            </div> 
            {/* boton */}
            <div className="flex justify-center lg:justify-end items-center">
                        <button
                            className="w-[100%] lg:w-[180px] relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 "  >
                            <span
                                className="w-full h-full font-regular flex items-center justify-center gap-2 px-8 py-3 bg-[#B931FC] text-black rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
                            >Enviar <IoFlashSharp /> </span>
                        </button>
                        

                    </div>
           
        </form>
       </article>
       <aside>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0254897712375!2d-74.10139729021023!3d4.589448542594296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f991f50dedd15%3A0xeae481775d0f3e59!2sPOLIMERICOS%20DIAL%20DE%20COLOMBIA!5e0!3m2!1ses-419!2sco!4v1716477863518!5m2!1ses-419!2sco" className='rounded w-full h-[320px] lg:w-[500px] lg:h-full mt-[20px] lg:mt-0' loading="lazy" title="miUbicacion"></iframe>
       </aside>
    </section>
    </div>
   
  )
}
