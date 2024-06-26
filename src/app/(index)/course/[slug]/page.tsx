export const revalidate = 604800 // revaalicacion cada 7 dias

import { getCourseBySlug } from '@/actions';
import { SkeletonLabel, Title } from "@/components";
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from "next/navigation";
import { AddToCart } from '../ui/addToCart';

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
  // fetch data
  const course = await getCourseBySlug(slug)
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: course?.title ?? 'Curso no encontrado',
    description: course?.description ?? '',
    openGraph: {
      title: course?.title ?? 'Curso no encontrado',
      description: course?.description ?? '',
      images: [`/course/${course?.images[1]}`],
    },
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
          <AddToCart course={course}/>
        </div>
      </div>
    </div>
  );
}
