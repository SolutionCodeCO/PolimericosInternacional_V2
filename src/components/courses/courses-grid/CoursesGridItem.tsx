import { Courses } from '@/interfaces';
import React from 'react'
import styles from '../../../../public/css/index.module.css'
import Image from 'next/image'
import Link from 'next/link';


interface Props{
    course: Courses;
}

export const CoursesGridItem = ({course}:Props) => {
  return (

    <Link href={`/course/${course.slug}`}>
    <article key={course.slug} className='fadeIn flex flex-col lg:flex-row gap-1 lg:items-center bg-azul rounded-xl cursor-pointer hover:-translate-y-2 transition-all overflow-hidden hover:bg-gray-100 hover:text-black p-2'>
    <div className='w-1/2 h-auto'>
      <Image
        src={`/img/${course.images[0]}`}
        alt={course.title}
        className='rounded lg:p-3 max-w-[310px] '
        width={500}
        height={500}
      >
      </Image>
    </div>

    <div className='p-2'>

      <h3 className='text-2xl font-bold '>{course.title}</h3>
     
      <div className="max-w-sm overflow-hidden py-5">
        <p className="text-base line-clamp-3 font-regular">{course.description}</p>
      </div>
      <p className='text-2xl font-regular'>${course.price} COP</p>


    </div>
  </article>
  </Link>
  )
}
