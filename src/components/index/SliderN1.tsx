'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../../public/css/index.module.css'


const SliderN1 = () => {
    const [images, setImages] = useState<string[]>([]); // Define el tipo de estado como string[]

    useEffect(() => {
        const fotoTrabajo: string[] = [
            '/img/Recursos polimericos/1.webp',
            '/img/Recursos polimericos/2.webp',
            '/img/Recursos polimericos/3.webp',
            '/img/Recursos polimericos/4.webp',
            '/img/Recursos polimericos/5.webp',
            '/img/Recursos polimericos/6.webp',
            '/img/Recursos polimericos/7.webp',
            '/img/Recursos polimericos/8.webp',
            '/img/Recursos polimericos/9.webp',
            '/img/Recursos polimericos/10.webp',
            '/img/Recursos polimericos/11.webp',
            '/img/Recursos polimericos/12.webp',
            '/img/Recursos polimericos/13.webp',
            '/img/Recursos polimericos/14.webp',
            '/img/Recursos polimericos/15.webp',
            '/img/Recursos polimericos/16.webp',
            '/img/Recursos polimericos/17.webp',
            '/img/Recursos polimericos/18.webp',
            '/img/Recursos polimericos/19.webp',
            '/img/Recursos polimericos/20.webp'
        ];

        setImages(fotoTrabajo);
    }, []);

    return (
        <aside className="">
            <div className=" text-azul bg-gold text-[22px] absolute p-2 rounded-lg top-0 left-4 lg:left-[11%] right-4 lg:right-[11%] font-regular text-center lg:w-[80%] w-[90%]">
                <h3>Cursos a nivel Internacional</h3>
            </div>
            <div className={styles.slider}>
                <div className={styles.slider_track}>
                    {images.map((src, index) => (
                        <div className={styles.slide} key={index}>
                            <Image
                                src={src}
                                alt={`img representativa ${index + 1}`}
                                width={ 340 }
                                height={ 340 }
                                className={styles.imagen_creada}
                                priority // Optimiza la carga de las imágenes en el carrusel
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-2 text-center lg:text-right font-regular">
                <span className='text-xl m-0 lg:text-[16px]'>Te enseñaremos desde cero sin necesidad de costosas maquinas, asesoria permanente y lo mejor de todo serán los descuentos en insumos.</span>
            </div>
        </aside>
    );
};

export default SliderN1;
