import Image from "next/image";
import Link from "next/link"
import { IoLogoGoogle } from "react-icons/io5";

export default function Login() {
  return (
       <div className="px-8 min-h-[100vh] w-full flex flex-col justify-center lg:h-full lg:flex lg:flex-row lg:w-full rounded-sm">
      <div className="flex justify-end w-full py-4 lg:w-1/2">
         <div className=" min-h-screen w-full flex justify-center items-center lg:h-full">
           <div className="">
    
             <form action="#" >
               <div>
                 <span className="text-xl text-gray-900 font-regular">¡Bienvenido por aqui!</span>
                 <h1 className="text-3xl font-bold">Crea una nueva cuenta y empecemos</h1>
               </div>

               <div className="my-3 flex justify-between gap-2">
                <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="nombre">Nombre</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="nombre" placeholder="ej: Andres" />
                </div>

                <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="email">Apellidos</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="apellido" placeholder="ej: Salazar" />
                </div>
             </div>
             <div className="my-3 flex justify-between gap-2">
                <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="nombre">Ciudad</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="ciudad" placeholder="ej: Manizales" />
                </div>

                <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="email">Telefono</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="telefono" placeholder="ej: 310 777 9999" />
                </div>
             </div>
             <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="nombre">Correo Email</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="email" placeholder="ej: Lupita@gmail.com" />
                </div>
             <div className="my-3 flex justify-between gap-2">
                <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="nombre">Contraseña</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="nombre" placeholder="ej: *********" />
                </div>

                <div className="w-full">
                  <label className="block text-2md mb-2 font-regular" htmlFor="email">Repite tu contraseña</label>
                   <input className="font-regular text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="password" placeholder="ej: *********" />
                </div>
             </div>
                
                   <div className="flex justify-start mt-3">
                    
                     <span className="text-sm hover:underline cursor-pointer font-regular">Al registrarme acepto los terminos y condiciones corporativas</span>
                   </div>
                   <div className="">
                     <button className="mt-4 mb-3 w-full bg-gold hover:bg-white hover:text-black text-white py-2 rounded-md transition duration-100 font-regular">Registrarme</button>
                     <div className="flex  space-x-2 justify-center items-end bg-black hover:bg-white hover:text-black text-white py-2 rounded-md transition duration-100">
    
                        
                       <button className="flex justify-center items-center gap-3 font-regular"><span><IoLogoGoogle/></span> Registrate con Google</button>
                     </div>
                   </div>
             </form>
             <p className="mt-8 text-center">¿Ya tienes cuenta? <Link href="/auth/login"><span className="cursor-pointer text-sm text-gold hover:underline font-regular"> Iniciar Sesión</span></Link></p>
           </div>
         </div>
       </div>
        <div className="invisible w-full bg-no-repeat bg-cover bg-center  bg-[url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)] lg:w-1/2 lg:min-h-screen lg:visible">


      </div>
     </div>
  );
}
