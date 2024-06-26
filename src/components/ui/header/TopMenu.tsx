'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5'
import { useCartStore, useUIStore } from '@/store'
import { useEffect, useState } from 'react'

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu)
    const totalItemInCar = useCartStore(state => state.getTotalItems())

    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        setLoaded(true)
    },[])

    return (
        <nav className="flex flex-col fixed w-full z-[999999] justify-between backdrop-blur-sm py-[10px] px-[30px] bg-[#1a2130a2] transition-all lg:flex-row">

            {/* LOGO */}
            <Link href='/'>
                <div className="flex gap-[12px] justify-center items-center ">
                    <Image src="/img/logo.png" width={35} height={35} alt="logo" />
                    <div>
                        <h2 className='font-regular text-[20px]'>Polimericos Internacional</h2>
                        <p className='-mt-1 text-[12px]'>Equipo especialiado en diferentes áreas</p>
                    </div>

                </div>
            </Link>



            <div className="flex justify-center mt-3 lg:mt-0 lg:justify-between items-center gap-[20px] ">
                <Link href="/search">
                    <IoSearchOutline size={25} />
                </Link>
                <Link href={(totalItemInCar === 0) && loaded ? '/empty' : "/cart"} className="transition-all hover:-translate-y-1">

                    <div className='relative'>
                        {
                            ((loaded && totalItemInCar > 0)) && (
                                <span className='fade-in absolute text-xs rounded-full px-1 font-bold -top-1.5 right-0 text-white bg-gold'>{totalItemInCar}</span>
                            )
                        }
                    </div>
                    <IoCartOutline size={25} />
                </Link>

                <button className='font-regular text-[20px] lg:text-[17px] py-[5px] px-[10px] transition-all rounded-sm hover:bg-[#8080802c]' onClick={() => openSideMenu()}>Menú</button>
            </div>
        </nav>

    )
}
