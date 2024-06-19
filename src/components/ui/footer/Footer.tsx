import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
  <div className="flex w-full justify-between text-xs mt-[10%] mb-10">
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full">
  <div className="w-full-xl px-4 py-5 sm:px-6 lg:px-8 flex">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 w-full">
      <div className="flex flex-col justify-center items-center">
      <Image src="/img/logo.png" width={150} height={150} className="mr-5 h-[150px] w-[150px]" alt="logo" />
        <p className="max-w-xl mt-4 text-sm text-gray-600 font-regular text-center">
        Somos un grupo de profesionales en diferentes áreas dispuestos para capacitarte en técnicas de personalización de pinturas y decoraciones, con el fin de ayudarte a emprender.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3 text-center">
        <div>
          <p className="font-bold">
            Empresa
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="/"> About </a>
            <a className="hover:opacity-75" href="/"> Meet the Team </a>
            <a className="hover:opacity-75" href="/"> History </a>
            <a className="hover:opacity-75" href="/"> Careers </a>
          </nav>
        </div>
        
        <div>
          <p className="font-bold">
            Cursos virtuales
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="/"> Contact </a>
            <a className="hover:opacity-75" href="/"> FAQs </a>
            <a className="hover:opacity-75" href="/"> Live Chat </a>
          </nav>
        </div>
        <div>
          <p className="font-bold">
            Legal
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="/"> Privacy Policy </a>
            <a className="hover:opacity-75" href="/"> Terms &amp; Conditions </a>
            <a className="hover:opacity-75" href="/"> Returns Policy </a>
            <a className="hover:opacity-75" href="/"> Accessibility </a>
          </nav>
        </div>
      </div>
    </div>
    
  </div>
  <div>
  <div className="flex justify-center my-8 space-x-6 text-gray-600">
          <a className="hover:opacity-75" href="https://web.facebook.com/POLIMERICOSINTERNACIONAL" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="hover:opacity-75" href="https://www.instagram.com/polimericosddc/" target="_blank" rel="noreferrer">
            <span className="sr-only"> Instagram </span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="hover:opacity-75" href="https://api.whatsapp.com/send?phone=%2B573058517530&context=ARANaxkEnQzLhYJQwqzUUrVnzGz_ND2E2lkcNPPQSc7bclRL4ns5O6hf50HWQQGwz6wGi8Fa2dS-9ZtdN_-FZ0q8zCLydwAx0pLjH_ZWEB7eM1avwYaw3n-zooYbCoRuFfqK8bwS2xd714YHoiotcMbStQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0SkEeadJIgKA-sGqza4lcq4OaX_yiD1rtJ5D_gRLiKvc0lhoRFsY9rbaY_aem_Ae5IlTcH9Kl9HACHhNtg8iombYGY1Wg5sOkVDryMXN3fsOd05PZ4wEwiTVNYZfeHSQNGsG7dN7KWOW6EUWiU8kZf" target="_blank" rel="noreferrer">
            <span className="sr-only"> WhatsApp </span>
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            
          </a>
          <a className="hover:opacity-75" href="https://www.tiktok.com/@polimericosddc" target="_blank" rel="noreferrer">
            <span className="sr-only"> Tiktok </span>
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
          </a>
          <a className="hover:opacity-75" href="https://www.youtube.com/@POLIMERICOSDDC" target="_blank" rel="noreferrer">
            <span className="sr-only"> Youtube </span>
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>

          </a>
        </div>
  <p className="mt-3 text-xs text-gray-800 text-center font-regular">
      SolutionCode © {new Date().getFullYear()} Polimericos Dial de Colombia
    </p>
  </div>
</footer>

  </div>
  )
}
