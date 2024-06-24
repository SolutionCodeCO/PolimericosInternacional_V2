import styles from '../../../../../public/css/index.module.css'
import { Title } from "@/components";
import { initialData } from "@/seed/seet";
import { notFound } from "next/navigation";
import { IoCartOutline } from 'react-icons/io5';

interface Props {
  params: {
    slug: string
  }
}

export default function cartAdmin({ params }: Props) {

  const { slug } = params
  const course = initialData.courses.find(course => course.slug === slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="px-8 lg:pt-[5%] pt-28">
      <Title title={`Aprendizaje | ${course.title}`} />
      <div className="flex flex-col lg:flex-row lg:justify-between h-full bg-azul rounded-xl mt-12">
        <div className="lg:w-1/2 w-full h-full bg-black">
          video
        </div>

        <div className="lg:w-1/2 w-full p-7">
          {/* titulo */}
          <h2 className='text-3xl mb-3 font-bold'>{course.title}</h2>

          {/* estrella | precio */}
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5'>
           <div className='text-xl font-regular'>4.2/5.0</div>
            <p className='text-2xl font-regular'>${course.price} COP</p>
          </div>

          {/* descrition */}
          <h3 className='text-2xl py-2 font-regular'>Descripción:</h3>
          <p className='font-light'>{course.description}</p>

          {/* duracion | publicacion */}
          <div className='flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center mt-7'>
            {/* duracion */}
            <div>
              <h3 className='text-xl font-regular'>Duración:</h3>
              <p className='font-light text-sm'>{course.duration} min</p>
            </div>

            {/* publicacion */}
            <div>
              <h3 className='text-xl font-regular'>Fecha de publicación:</h3>
              <p className='text-sm'>{course.datePublic}</p>
            </div>

            

          </div>
          {/* boton */}
          <button
              className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 mt-5 w-full"
            >
              <span
                className=" font-regular w-full h-full flex items-center justify-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
              >
                <IoCartOutline className='text-2xl' />Añadir al carrito</span>
            </button>
        </div>
      </div>
    </div>
  );
}
