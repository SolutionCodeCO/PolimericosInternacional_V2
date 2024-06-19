'use client'

import { useUIStore } from "@/store/ui/store"
import clsx from "clsx"
import Link from "next/link"
import { IoCloseOutline, IoDesktopOutline, IoEarthOutline, IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoMoonOutline, IoPeopleOutline, IoPersonAddOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline } from "react-icons/io5"

export const Sidebar = () => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen)
    const closeMenu = useUIStore(state => state.closeSideMenu)


    return (

        <div className="font-regular">
        {/* backgroud */}
           { isSideMenuOpen && (
               
            <div className="fixed top-0 lef-0 w-screen h-screen  bg-black opacity-30">

            </div>
            )
            }


           {/* blur */}
           { 
           isSideMenuOpen &&(
            
            <div onClick={() => closeMenu()} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm">

            </div>
           )
           }


           

            {/* sidemenu */}

            <nav className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[350px] h-screen bg-black z-[99999999] shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }>

                <div className="flex justify-between items-center relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold">Menú</p>
                    <IoCloseOutline size={40} className="absolute top-4 right-4 cursor-pointer" onClick={() => closeMenu()
                    } />
                </div>

                {/* buscador dentro de la caja */}
                <div className="relative mt-16 p-4">
                    <IoSearchOutline size={20} className="absolute top-6 left-6 color text-black" />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-4 text-xm border-gray-200 focus:outline-none focus:border-gold text-black"
                    />
                </div>

                {/* demas opciones */}
                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoHomeOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Inicio</span>
                </Link>

                <Link href="/courses" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoDesktopOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Cursos</span>
                </Link>

                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoPersonOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Perfil</span>
                </Link>

                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoTicketOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Ordenes</span>
                </Link>

                <Link href="/auth/indexLogin" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoLogInOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Iniciar Sesion</span>
                </Link>

                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoLogOutOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Salir</span>
                </Link>

                {/* linea separadora */}
                <div className="w-full h-px bg-white my-8"/>
           
                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoDesktopOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Cursos</span>
                </Link>

                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoTicketOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Ordenes</span>
                </Link>

                <Link href="/" className="flex items-center mt-1 p-2 m-2 hover:bg-white hover:text-black rounded transition-all">
                    <IoPeopleOutline size={20} />
                    <span className="ml-3 font-regular text-xm tracking-tight">Usuarios</span>
                </Link>
            

        </nav>
        </div >
    )
}
