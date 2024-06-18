import { Courses } from '@/interfaces'
import Image from 'next/image'
import { CoursesGridItem } from './CoursesGridItem'


interface Props {
  courses: Courses[]
}
export const CoursesGrid = ({ courses }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 mt-10 w-full'>
      {
        courses.map(courses => (
         <CoursesGridItem key={courses.slug} course={courses}/>
        ))
      }

    </div>
  )
}
