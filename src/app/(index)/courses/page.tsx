import { getPaginationCoursesWithImages } from "@/actions";
import { CoursesGrid, Pagination, Title } from "@/components";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";


interface Props {
  searchParams: {
    page?: string
  }
}

export default async function CoursesAdmin({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1

  const { courses, currentPage, totalPages } = await getPaginationCoursesWithImages({ page })

  if (courses.length === 0) {
    redirect('/courses')
  }
  console.log("se cargaron: ", courses.length, " cursos");

  return (
    <><div className="px-8 pt-20 lg:py-0">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-center pt-[5%]">
        <Title title="Cursos virtuales" subtitle="Encontraras mas de 100 cursos dinámicos." />
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
    </div>

      <Pagination totalPages={totalPages} />
    </>


  );
}
