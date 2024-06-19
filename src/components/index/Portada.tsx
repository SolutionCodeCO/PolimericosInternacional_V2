import Link from "next/link"
import { IoIdCardOutline, IoLogoWhatsapp } from "react-icons/io5"
import SliderN1 from "./SliderN1"

export const Portada = () => {

    return (
        <div className="px-5 py-32 lg:px-8 lg:py-28 items-center flex justify-between w-full flex-col lg:flex-row">
            {/* Left */}
            <div className="w-full flex flex-col lg:w-[45%] text-center lg:text-left ">
                <h1 className="text-[50px] font-bold">Amplia gama de cursos para emprender</h1>
                <p className="font-regular lg:font-light my-[20px]">Somos un grupo de profesionales en diferentes áreas dispuestos para capacitarte en técnicas de personalización de pinturas y decoraciones, con el fin de ayudarte a emprender.</p>

                {/* tarjeta */}
                <div className="flex flex-col lg:flex-row my-[20px] lg:my-[50px] justify-evenly items-center rounded-lg py-[10px] lg:py-[20px] w-full bg-white text-black">
                    <div className="flex gap-4 mb-2">
                        <div className="flex justify-center items-center gap-2">
                        {/* icon */}
                        <div>
                            <IoLogoWhatsapp size={25} />
                        </div>
                        {/* contacto */}
                        <div>
                            <p className="font-bold">WhatsApp</p>
                            <p className="font-regular">+57 123456789</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        {/* icon */}
                        <div>
                            <IoIdCardOutline size={25} />
                        </div>
                        {/* asesor */}
                        <div>
                            <p className="font-bold">Asesor</p>
                            <p className="font-regular">Carolina ochoa</p>
                        </div>
                    </div>
                    </div>
                    {/* boton */}
                    <div className="flex justify-center items-center">
                        <Link href="https://api.whatsapp.com/send?phone=%2B573058517530&context=ARANaxkEnQzLhYJQwqzUUrVnzGz_ND2E2lkcNPPQSc7bclRL4ns5O6hf50HWQQGwz6wGi8Fa2dS-9ZtdN_-FZ0q8zCLydwAx0pLjH_ZWEB7eM1avwYaw3n-zooYbCoRuFfqK8bwS2xd714YHoiotcMbStQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0SkEeadJIgKA-sGqza4lcq4OaX_yiD1rtJ5D_gRLiKvc0lhoRFsY9rbaY_aem_Ae5IlTcH9Kl9HACHhNtg8iombYGY1Wg5sOkVDryMXN3fsOd05PZ4wEwiTVNYZfeHSQNGsG7dN7KWOW6EUWiU8kZf"><button
                            className="w-56 lg:w-[160px] relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded bg-gradient-to-t from-[#e2c15c] to-[#daa520] active:scale-95 "  >
                            <span
                                className="w-full h-full font-regular flex items-center justify-center gap-2 px-8 py-4 lg:py-3 bg-[#B931FC] text-black rounded bg-gradient-to-l from-[#e2c15c] to-[#daa520]"
                            >Contactar</span>
                        </button>
                        </Link>

                    </div>


                </div>
            </div>

            {/* Righ */}
            <div className="w-full lg:w-[55%] relative px-3 mt-12 lg:mt-0">
                <SliderN1 />
            </div>
        </div>
    )
}
