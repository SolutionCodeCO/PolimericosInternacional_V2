import { Title } from "@/components";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { Metadata } from "next";
import { CoursesInCart } from "./ui/CoursesInCart";
import { OrderSumary } from "./ui/OrderSumary";

export const metadata: Metadata ={
  title: {
    template: '%s | Store',
    default: 'Carrito'
  },
  description: "Polimericos Dial de Colombia es una compañia de servicios internacionales donde encontraras infinidades de cursos sobre tecnicas de pintado y mucho mas..."
}


export default function cartAdmin() {
  // redirect('/empty')


  return (
    <div className="flex justify-center items-center mb-10 pt-24 lg:pt-[5%] px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl font-regular">Agregar mas cursos</span>
            <Link href="/courses" className="underline mb-5">Continúa comprando</Link>
          

          {/* items */}
         <CoursesInCart />
          </div>


          {/* checkout - resumen de la orden*/}
          <div className=" rounded-xl shadow-xl p-0 lg:p-7 h-fit">
            <h2 className="text-2xl mb-2 font-bold">Resumen de la compra :)</h2>

           <OrderSumary />

            <div>
              <Link href="/checkout">
              <button
              className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 mt-5 w-full"
            >
              <span
                className="w-full font-regular h-full flex items-center justify-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
              >
                <IoCartOutline className='text-2xl' />Pagar</span
              >
            </button>
              </Link>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}
