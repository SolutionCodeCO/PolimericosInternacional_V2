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
    <div className="px-8 pt-[5%]">
      <Title title={`Aprendizaje | ${course.title}`} />
      <div className="flex justify-between h-full bg-azul rounded-xl mt-12">
        <div className="w-1/2 bg-black">
          video
        </div>

        <div className="w-1/2 p-7">
          {/* titulo */}
          <h2 className='text-3xl mb-3 font-bold'>{course.title}</h2>

          {/* estrella | precio */}
          <div className='flex items-center justify-between mb-5'>
            <div className={styles.rating}>
              <input type="radio" id="star-1" name="star-radio" value="star-1" />
              <label htmlFor="star-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-2" name="star-radio" value="star-1" />
              <label htmlFor="star-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-3" name="star-radio" value="star-1" />
              <label htmlFor="star-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-4" name="star-radio" value="star-1" />
              <label htmlFor="star-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
              <input type="radio" id="star-5" name="star-radio" value="star-1" />
              <label htmlFor="star-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
              </label>
            </div>
            <p className='text-2xl font-regular'>${course.price} COP</p>
          </div>

          {/* descrition */}
          <h3 className='text-2xl py-2 font-regular'>Descripción:</h3>
          <p className='font-light'>{course.description}</p>

          {/* duracion | publicacion */}
          <div className='flex justify-between items-center mt-7'>
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
