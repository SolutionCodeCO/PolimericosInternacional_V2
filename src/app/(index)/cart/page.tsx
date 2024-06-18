import { Title } from "@/components";
import { initialData } from "@/seed/seet";
import Link from "next/link";
import Image from "next/image"
import { IoCartOutline } from "react-icons/io5";
import { redirect } from "next/navigation";

const coursesInCart =[
  initialData.courses[0],
  initialData.courses[1],
  initialData.courses[2],
]

export default function cartAdmin() {
  // redirect('/empty')


  return (
    <div className="flex justify-center items-center mb-10 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl font-regular">Agregar mas cursos</span>
            <Link href="/courses" className="underline mb-5">Continúa comprando</Link>
          

          {/* items */}
          {
            coursesInCart.map( courses =>(
              <div key={courses.slug} className="flex mb-5">
                <Image src={`/img/${courses.images[0]}`} alt={`${courses.title}`} width={100} height={100} className="rounded mr-4"/>
                <div>
                  <p className="text-xl font-bold">{courses.title}</p>
                  <p className="font-regular">$ {courses.price}</p>
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))
          }
          </div>


          {/* checkout - resumen de la orden*/}
          <div className=" rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 font-bold">Resumen de la compra :)</h2>

            <div className="grid grid-cols-2">
              <span className="font-regular">Cantidad de cursos:</span>
              <span className="text-right font-regular">1 curso</span>

              <span className="font-regular">Subtotal</span>
              <span className="text-right font-regular">$ 12000</span>

              <span className="font-regular">Impuesto (5%)</span>
              <span className="text-right font-regular">$ 600</span>

              <span className="text-2xl mt-5 font-regular">Total</span>
              <span className="text-right text-2xl mt-5 font-regular">$ 12600</span>

            </div>

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
