import { CoursesGrid, Title } from "@/components";
import { initialData } from "@/seed/seet";
import Link from "next/link";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";
const courses = initialData.courses;

export default function CoursesAdmin() {
    return (
     <div className="px-8">
      <div className="flex justify-between items-center pt-[5%]">
      <Title title="Cursos virtuales" subtitle="Encontraras mas de 100 cursos dinámicos."/>
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
  