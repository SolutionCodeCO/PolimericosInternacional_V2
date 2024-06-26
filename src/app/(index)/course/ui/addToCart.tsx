'use client'

import type { CartCourse, Courses } from "@/interfaces";
import { useCartStore } from "@/store/cart/cart-store";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

interface Props{
    course: Courses
}

export const AddToCart = ({course}:Props) =>{
    const addCourseToCart = useCartStore(state => state.addCourseToCart)

    const [posted, setPosted] = useState(false)

    const addToCart = () =>{
        setPosted(true)
        console.log({course});

        const cartCourse: CartCourse = {
            id: course.id,
            slus: course.slug,
            title: course.title,
            price: course.price,
            image: course.images[0]
        }

        addCourseToCart(cartCourse)
        setPosted(false)
        
    }

    return(
        <>
        <button onClick={addToCart}
            className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 mt-5 w-full"
          >
            <span
              className="font-regular w-full h-full flex items-center justify-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
            >
              <IoCartOutline className='text-2xl' />Añadir al carrito
            </span>
          </button>
        </>
    )
}

