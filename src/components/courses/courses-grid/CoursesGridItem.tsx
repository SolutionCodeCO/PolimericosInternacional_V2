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
    <article key={course.slug} className='fadeIn flex flex-col lg:flex-row gap-1 lg:items-center bg-azul rounded-xl cursor-pointer hover:-translate-y-2 transition-all overflow-hidden hover:bg-white hover:text-black hover:text-regular p-2'>
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
      <div className="max-w-sm overflow-hidden p-1">
        <p className="text-base line-clamp-3 font-light">{course.description}</p>
      </div>
      <p className='text-2xl font-regular'>${course.price} COP</p>


    </div>
  </article>
  </Link>
  )
}
