import { Title } from "@/components";
import { initialData } from "@/seed/seet";
import Link from "next/link";
import Image from "next/image"
import { IoCartOutline } from "react-icons/io5";

const coursesInCart =[
  initialData.courses[0],
  initialData.courses[1],
  initialData.courses[2],
]

export default function cartAdmin() {
  return (
    <div className="flex justify-center items-center pt-24 lg:pt-[5%]  mb-10 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificación de tu compra" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl font-bold">¡Revisa bien tu ticket!</span>
            <Link href="/cart" className="underline mb-5">Editar compra</Link>
          

          {/* items */}
          {
            coursesInCart.map( courses =>(
              <div key={courses.slug} className="flex mb-5">
                <Image src={`/img/${courses.images[0]}`} alt={`${courses.title}`} width={100} height={100} className="rounded mr-4"/>
                <div>
                  <p className="text-xl">{courses.title}</p>
                  <p>$ {courses.price}</p>
                  <p className="font-bold">Subtotal: ${courses.price + 600}</p>
                </div>
              </div>
            ))
          }
          </div>


          {/* checkout - resumen de la orden*/}
          
          <div className="rounded-xl shadow-xl p-0 lg:p-7 h-fit">

           
            <h2 className="text-2xl mb-2 font-bold">Resumen de la compra :)</h2>

            <div className="grid grid-cols-2">
              <span className="font-regular">Cantidad de cursos:</span>
              <span className="text-right font-regular">1 curso</span>

              <span className="font-regular">Subtotal</span>
              <span className="text-right font-regular">$ 12000</span>

              <span className="font-regular">Impuesto (5%)</span>
              <span className="text-right font-regular">$ 600</span>

              

              <span className="text-2xl mt-24 font-bold">Total</span>
              <span className="text-right text-2xl mt-24 font-regular">$ 12600</span>

            </div>

            <div>
              {/* aceptar terminos */}
              <div className="my-3 w-full">
                <span className="text-xs">
                Al hacer clic en el botón, estas aceptando nuestros <a href="" className="underline">Terminos</a> & <a href="" className="underline">condiciones.</a>
                </span>
              </div>
              <Link href="/orders/123">
              <button
              className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 mt-5 w-full"
            >
              <span
                className="w-full h-full flex items-center justify-center font-regular gap-2 px-8 py-3 bg-[#B931FC] text-white rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
              >
                <IoCartOutline className='text-2xl' />Colocar orden</span
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
