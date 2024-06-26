import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function cartAdmin() {
    return (
     <div className="flex justify-center items-center h-[100vh] p-8">
      <IoCartOutline size={100} className="mx-5"/>

      <div className="flex flex-col items-center font-regular">
        <h1 className="text-5xl">Tu carrito está vacio</h1>
        <Link href='/courses' className="text-gold mt-2 text-3xl underline">Regresar</Link>
      </div>
     </div>
    );
  }
  