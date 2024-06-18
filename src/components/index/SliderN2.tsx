'use client'; // Marca este archivo como un Client Component

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../../public/css/index.module.css'


const SliderBanderas = () => {
    const [banderas, setBanderas] = useState<string[]>([]);

    useEffect(() => {
        const fotoBandera: string[] = [
            '/img/banderas/bandera-co.webp',
            '/img/banderas/bolivia.webp',
            '/img/banderas/chile.webp',
            '/img/banderas/costa-rica.webp',
            '/img/banderas/ecuador.webp',
            '/img/banderas/honduras.webp',
            '/img/banderas/mexico.webp',
            '/img/banderas/peru.webp',
            '/img/banderas/salvador.webp',
            '/img/banderas/venezuela.webp',
        ];

        setBanderas(fotoBandera);
    }, []);

    return (
        <div>
            <div className={styles.contenedor_banderas}>
                <h3 className='text-center text-[45px] font-bold'>Puntos Internacionales de Aprendizaje</h3>
                <div className={styles.sliderBandera}>
                    <div className={styles.slider_track_bandera}>
                        {banderas.map((src, index) => (
                            <div className={styles.slide2} key={index}>
                                <Image
                                    src={src}
                                    alt={`Pais aliado ${index + 1}`}
                                    width={280}
                                    className={styles.image_creada2}
                                    height={100}
                                    priority
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBanderas;
