'use client'
import { generatePaginationNumbers } from "@/utils"
import clsx from "clsx"
import Link from "next/link"
import { redirect, usePathname, useSearchParams } from "next/navigation"
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5"

interface Props {
    totalPages: number
}

export const Pagination = ({ totalPages }: Props) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const pageString = searchParams.get('page') ?? 1
    const currentPage = isNaN(+pageString) ? 1 : +pageString

    if(currentPage <1 || isNaN(+pageString)){
        redirect(pathname)
    }

    const allPages = generatePaginationNumbers(currentPage, totalPages)



    console.log({ pathname, searchParams, currentPage, allPages });

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)

        if (pageNumber === '...') {
            return `${pathname}?${params.toString()}`
        }
        if (+pageNumber <= 0) {
            return `${pathname}`
        }
        if (+pageNumber > totalPages) {
            return `${pathname}`
        }
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`

    }

    return (
        <div className="px-8 flex justify-center mt-10 mb-32 text-center">
            <div className="flex justify-center items-center    ">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none font-regular gap-3 ">

                        <li className="page-item  "><Link
                            className=" text-white page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:bg-gold focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}><IoChevronBackCircleOutline size={30} /></Link></li>

                        {
                            allPages.map((page) => (
                                <li key={page} className="page-item ">
                                    <Link
                                        className={
                                            clsx(" text-white font-regular page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounde hover:bg-gold focus:shadow-none rounded",
                                                {
                                                    'bg-yellow-500': page === currentPage
                                                }
                                            )
                                        }
                                        href={createPageUrl(page)}>{page}</Link>
                                </li>
                            ))
                        }




                        <li className="page-item"><Link
                            className=" text-white page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded hover:bg-gold focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}><IoChevronForwardCircleOutline size={30} /></Link></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}
