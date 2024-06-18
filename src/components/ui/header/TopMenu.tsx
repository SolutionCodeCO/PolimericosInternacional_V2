'use client'

import Image from 'next/image'
import styles from '../../../../public/css/index.module.css'
import Link from 'next/link'
import {IoSearchOutline, IoCartOutline} from 'react-icons/io5'
import { useUIStore } from '@/store'

export const TopMenu = () => {

    const openSideMenu = useUIStore(state => state.openSideMenu)

  return (
    <nav className={styles.header}>

    {/* LOGO */}
    <Link href='/'>
    <div className={styles.logo}>
    <Image src="/img/logo.png" width={35} height={35} alt="logo" />
    <div>
    <h2 className='font-regular'>Polimericos Internacional</h2>
    <p className='-mt-1'>Equipo especialiado en diferentes áreas</p>
    </div>
   
    </div>
    </Link>
    


    <div className={styles.navegable}>
        <Link href="/search">
            <IoSearchOutline className={styles.icon}/>
        </Link>
        <Link href="/cart" className={styles.icon}>
            <div className='relative'>
                <span className='absolute text-xs rounded-full px-1 font-bold -top-1.5 right-0 text-white bg-gold'>3</span>
            </div>
            <IoCartOutline />
        </Link>
        
        <button className='font-regular' onClick={() => openSideMenu()}>Menú</button>
    </div>
</nav>

  )
}
