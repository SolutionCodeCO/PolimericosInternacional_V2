import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[80vh] w-full justify-center items-center align-middle'>
        <div className='text-center px-5 mx-5'>
        <p className='font-regular text-xl' >Oh, Oh lo sentimos.</p>
            <h2 className='antialiased text-9xl font-bold'>404</h2>
            <p className='font-light'>
                <span>No encontramos la pagina pero puedes regresar al </span>
                <Link href="/" className='font-normal underline hover:underline'>Inicio</Link>
            </p>
        </div>

        <div className='px-5 mx-5'>
            <Image src="/img/not-404.svg" alt='404' className='p-5 sm:p-0' width={350} height={350}></Image>
        </div>
    </div>
  )
}
