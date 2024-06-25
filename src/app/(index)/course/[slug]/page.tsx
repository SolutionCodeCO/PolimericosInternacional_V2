export const revalidate = 604800 // revaalicacion cada 7 dias

import { getCourseBySlug } from '@/actions';
import { SkeletonLabel, Title } from "@/components";
import { notFound } from "next/navigation";
import { IoCartOutline } from 'react-icons/io5';

interface Props {
  params: {
    slug: string
  }
}

export default async function cartAdmin({ params }: Props) {
  const { slug } = params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Formatea la fecha para mostrarla
  const formattedDatePublic = new Date(course.datePublic).toLocaleDateString();

  return (
    <div className="px-8 lg:pt-[5%] pt-28">
      <Title title={`Aprendizaje | ${course.title}`} />
      <div className="flex flex-col lg:flex-row lg:justify-between h-full bg-azul rounded-xl mt-12">
        <div className="lg:w-1/2 w-full h-full bg-black">
          video
        </div>
        <div className="lg:w-1/2 w-full p-7">
          <h2 className='text-3xl mb-3 font-bold'>{course.title}</h2>
          <SkeletonLabel slug ={course.slug} />
          <h3 className='text-2xl py-2 font-regular'>Descripción:</h3>
          <p className='font-light'>{course.description}</p>
          <div className='flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center mt-7'>
            <div>
              <h3 className='text-xl font-regular'>Duración:</h3>
              <p className='font-light text-sm'>{course.duration} min</p>
            </div>
            <div>
              <h3 className='text-xl font-regular'>Fecha de publicación:</h3>
              <p className='text-sm'>{formattedDatePublic}</p>
            </div>
          </div>
          <button
            className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 mt-5 w-full"
          >
            <span
              className="font-regular w-full h-full flex items-center justify-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
            >
              <IoCartOutline className='text-2xl' />Añadir al carrito
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
