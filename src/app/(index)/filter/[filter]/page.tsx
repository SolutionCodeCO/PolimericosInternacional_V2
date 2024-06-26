export const revalidate = 30; //1 min en el cache

import { getPaginationCoursesWithImages } from "@/actions";
import { CoursesGrid, Pagination, Title } from "@/components";
import { Filter } from "@prisma/client";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";

export const metadata: Metadata ={
  title: {
    template: '%s | Store',
    default: 'Filtros'
  },
  description: "Polimericos Dial de Colombia es una compañia de servicios internacionales donde encontraras infinidades de cursos sobre tecnicas de pintado y mucho mas..."
}

interface Props {
  params: {
    filter: string
  },
  searchParams: {
    page?: string
  }
}

export default async function Category({ params, searchParams }: Props) {
  const { filter } = params

  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { courses, currentPage, totalPages } = await getPaginationCoursesWithImages({ page, filter: filter as Filter })

  if (courses.length === 0) {
    redirect(`/courses/filter/${filter}`)
  }
  console.log("se cargaron: ", courses.length, " cursos");


  const labels: Record<string, string> = {
    'paga': 'Paga',
    'gratis': 'Gratis'
  }

  // if (id === 'gratis'){
  //   notFound()
  // }

  return (
    <div className="px-8 lg:pt-[5%] pt-20">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center">
        <Title title={`Cursos virtuales | ${labels[filter]}`} subtitle="Encontraras mas de 100 cursos dinámicos." />
        <div className="flex">
          <div className="flex items-center gap-1 text-xl p-2 transition-all hover:-translate-y-2">
            <span><IoLockClosedOutline /></span><Link href="/filter/paga" className="font-regular"> Paga </Link>
          </div>
          <div className="h-6 w-px bg-white my-8" />
          <div className="flex items-center gap-1 text-xl p-2 transition-all hover:-translate-y-2">
            <span><IoLockOpenOutline /></span><Link href="/filter/gratis" className="font-regular"> Gratis </Link>
          </div>
        </div>

      </div>
      <CoursesGrid courses={courses} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
