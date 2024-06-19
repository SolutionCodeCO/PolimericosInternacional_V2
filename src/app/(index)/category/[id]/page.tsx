import { CoursesGrid, Title } from "@/components";
import { Filter } from "@/interfaces";
import { initialData } from "@/seed/seet";
import Link from "next/link";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";


const seedCourses = initialData.courses;


interface Props{
  params: {
    id: Filter
  }
}

export default function Category({params}: Props) {
  const {id} = params
  const courses = seedCourses.filter( courses => courses.filter === id)

  const labels: Record<Filter, string> = {
    'paga': 'Paga',
    'gratis': 'Gratis'
  }

  // if (id === 'gratis'){
  //   notFound()
  // }

    return (
      <div className="px-8 lg:pt-[5%] pt-20">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center">
      <Title title={`Cursos virtuales | ${labels[id]}`} subtitle="Encontraras mas de 100 cursos dinámicos."/>
      <div className="flex">
        <div className="flex items-center gap-1 text-xl p-2 transition-all hover:-translate-y-2">
        <span><IoLockClosedOutline /></span><Link href="/category/paga" className="font-regular"> Paga </Link>
      </div>
      <div className="h-6 w-px bg-white my-8"/>
      <div className="flex items-center gap-1 text-xl p-2 transition-all hover:-translate-y-2">
        <span><IoLockOpenOutline /></span><Link href="/category/gratis" className="font-regular"> Gratis </Link>
      </div>
      </div>
      
      </div>
      <CoursesGrid courses={courses}/>
     </div>
    );
  }
  