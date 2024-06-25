'use client'

import { getPriceBySlug } from "@/actions"
import { useEffect, useState } from "react"

interface Props {
    slug: string
}
export const SkeletonLabel = ({ slug }: Props) => {

    const [price, setPrice] = useState(0)
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        getPrice()
    }, [])

    const getPrice = async () => {
        const priceCourse = await getPriceBySlug(slug)
        setPrice(priceCourse)
        setLoading(false)
    }

    return (
        <>
            {
                isLoading ? (
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-end mb-5 '>
                        <p className='text-2xl font-regular animate-pulse bg-gray-200 w-[100px] rounded'>&nbsp;</p>
                    </div>
                ) : (
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-end mb-5'>
                        <p className='text-2xl font-regular'>$ {price} COP</p>
                    </div>
                )
            }
        </>
    )


}
