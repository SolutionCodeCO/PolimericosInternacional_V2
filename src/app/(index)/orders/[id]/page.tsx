import { Title } from "@/components";
import { initialData } from "@/seed/seet";
import Link from "next/link";
import Image from "next/image"
import { IoCardOutline, IoCartOutline } from "react-icons/io5";
import clsx from "clsx";

const coursesInCart =[
  initialData.courses[0],
  initialData.courses[1],
  initialData.courses[2],
]

interface Props{
  params:{
    id:string
  }
}

export default function cartAdmin({params}:Props) {
  const {id} = params

  // todo verificar
  // redirect(/)



  return (
    <div className="flex justify-center items-center pt-[5%] mb-20 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
           <div className={
            clsx(
              "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold mb-5",
              {
                'bg-red':false,
                'bg-green':true,
              }
            )
           }>
            <IoCardOutline size={30}/>
            {/* <span className="ml-2 text-sm font-regular">Pendiente de pago :0</span> */}
            <span className="ml-2 text-sm font-regular">Orden pagada :)</span>

           </div>
          

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
          
          <div className="rounded-xl shadow-xl p-7">

           
            <h2 className="text-2xl mb-2 font-bold">Resumen de la compra :)</h2>

            <div className="grid grid-cols-2">
              <span className="font-regular">Cantidad de cursos:</span>
              <span className="text-right font-regular">1 curso</span>

              <span className="font-regular">Subtotal</span>
              <span className="text-right font-regular">$ 12000</span>

              <span className="font-regular">Impuesto (5%)</span>
              <span className="text-right font-regular">$ 600</span>

              

              <span className="text-2xl mt-24 font-bold">Total</span>
              <span className="text-right text-2xl mt-24 mb-5 font-regular">$ 12600</span>

            </div>

            <div>
            <div className={
            clsx(
              "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold mb-5",
              {
                'bg-red':false,
                'bg-green':true,
              }
            )
           }>
            <IoCardOutline size={30}/>
            {/* <span className="ml-2 text-sm font-regular">Pendiente de pago :0</span> */}
            <span className="ml-2 text-sm font-regular">Orden pagada :)</span>

           </div>
              
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}
