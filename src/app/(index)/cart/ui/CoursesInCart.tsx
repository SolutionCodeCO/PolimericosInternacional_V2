'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useCartStore } from "@/store";
import Link from 'next/link';
import { formatMoney } from '@/utils';

export const CoursesInCart = () => {
  
  const removeCourse = useCartStore(state => state.removeCourse)

  const [loaded, setLoaded] = useState(false)
  const coursesInCart = useCartStore(state => state.coursesInCart)
  

  useEffect(()=>{
    setLoaded(true)
  })

  if (!loaded) {
    return <div className='flex flex-col lg:flex-row lg:items-center lg:justify-start mb-5 '>
      <p className='text-xl font-regular animate-pulse text-black p-3 bg-gray-200 w-full rounded'>Cargando...</p>
    </div>
  }

  return (
    <>
    
      {coursesInCart.map((course) => (
        <div key={course.slus} className="flex mb-5">
          <Image
            src={`/img/${course.image}`}
            alt={`${course.title}`}
            width={100}
            height={100}
            className="rounded mr-4"
          />
          <div>
            <Link className='hover:underline hover:text-gold' href={`/course/${course.slus}`}>
            <p className="text-xl font-bold">{course.title}</p>
            </Link>
            
            <p className="font-regular">{formatMoney (course.price)}</p>
            <button onClick={()=>removeCourse(course)} className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
