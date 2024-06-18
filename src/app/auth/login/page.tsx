import Image from "next/image";
import Link from "next/link"
import { IoLogoGoogle } from "react-icons/io5";

export default function Login() {
  return (
       <div className="px-8 min-h-[100vh] w-full flex flex-col justify-center lg:h-full lg:flex lg:flex-row lg:w-full rounded-sm">
      <div className="flex justify-end w-full lg:w-1/2">
         <div className=" min-h-screen w-full flex justify-center items-center lg:h-full">
           <div className="">
    
             <form action="#" >
               <div>
                 <span className="text-xl text-gray-900 font-regular">Bienvenido nuevamente</span>
                 <h1 className="text-3xl font-bold">Inicia sesion con tu cuenta y disfruta</h1>
               </div>
               <div className="my-3">
                   <label className="block text-2md mb-2 font-regular" htmlFor="email">Email</label>
                   <input className="text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="ej: Juanito123@gmail.com" />
             </div>
               <div className="mt-5">
                 <label className="block text-2md mb-2 font-regular" htmlFor="password">Contraseña</label>
                 <input className="text-black px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="*******" />
             </div>
                
                   <div className="flex justify-end mt-3">
                    
                     <span className="text-sm text-gold hover:underline cursor-pointer font-regular">¿Olvidaste tu contraseña?</span>
                   </div>
                   <div className="">
                     <button className="mt-4 mb-3 w-full bg-gold hover:bg-white hover:text-black text-white py-2 rounded-md transition duration-100 font-regular">Entrar</button>
                     <div className="flex  space-x-2 justify-center items-end bg-black hover:bg-white hover:text-black text-white py-2 rounded-md transition duration-100">
    
              
                     <button className="flex justify-center items-center gap-3 font-regular"><span><IoLogoGoogle/></span> Registrate con Google</button>
                     </div>
                   </div>
             </form>
             <p className="mt-8 text-center">¿No te has registrado? <Link href="/auth/new_account"><span className="cursor-pointer text-sm text-gold hover:underline font-regular"> Registrate ahora</span></Link></p>
           </div>
         </div>
       </div>
        <div className="invisible w-full bg-no-repeat bg-cover bg-center  bg-[url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)] lg:w-1/2 lg:min-h-screen lg:visible">


      </div>
     </div>
  );
}
