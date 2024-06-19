import Image from 'next/image'
import React from 'react'

export const Testimonios = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between'>
     
      <div className="w-full lg:w-[70%] lg:min-h-screen mx-auto">
        <div id="default-carousel" className="relative  w-[100%]" data-carousel="static">
          {/* <!-- Carousel wrapper --> */}
          <div className="overflow-hidden relative h-[550px] rounded-lg lg:min-h-[600px]">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out rounded-sm" data-carousel-item>
              
              <video width="1" controls className='block absolute top-1/2 left-1/2  h-full bg-azul w-[800px] lg:w-[600px] -translate-x-1/2 -translate-y-1/2'>
                <source src="/videos/testimonio1.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento <code>video</code>.
              </video>
            </div>
            {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <video width="1" controls className='block absolute top-1/2 left-1/2 h-full bg-azul w-[600px] -translate-x-1/2 -translate-y-1/2'>
                <source src="/videos/testimonio2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento <code>video</code>.
              </video>
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <video width="1" controls className='block absolute top-1/2 left-1/2 h-full bg-azul w-[600px] -translate-x-1/2 -translate-y-1/2'>
                <source src="/videos/testimonio3.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento <code>video</code>.
              </video>
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="flex absolute -bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className='w-full lg:w-[50%] p-5 text-center lg:text-left flex flex-col'>
        <h4 className="text-[30px] lg:text-[35px] font-bold">Testimonios de nuéstros emprendedores</h4>
        <p className='text-[25px]'>Equipo profesional en mas de 8 paises: </p>
        <ul className='text-[20px] grid grid-cols-2 gap-4 lg:gap-0 lg:col-span-1 sm:grid-cols-1 lg:grid-cols-1 '>
          <li>| Colombia</li>
          <li>| Venezuela</li>
          <li>| Bolivia</li>
          <li>| Perú</li>
          <li>| Mexico</li>
          <li>| Costa Rica</li>
          <li>| Chile</li>
          <li>| Ecuador</li>
          <li>| Honduras</li>
          <li>| Salvador</li>
        </ul>
      </div>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
        

  )
}
