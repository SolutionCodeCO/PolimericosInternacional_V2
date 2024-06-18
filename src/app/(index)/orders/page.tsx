import { Title } from '@/components';

import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

export default function ordenesAdmin() {
  return (
    <>
      <Title title="Ordenes:" className='px-8' />

      <div className="mb-10 px-8">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                #ID
              </th>
              <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                Nombre completo
              </th>
              <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                Estado
              </th>
              <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>

            <tr className=" border-b transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer">

              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">1</td>
              <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-bold px-6 py-4 whitespace-nowrap">

                <IoCardOutline className="text-green" />
                <span className='mx-2 text-green'>Pagada</span>

              </td>
              <td className="text-sm text-gray-900 font-bold px-6 ">
                <Link href="/orders/123" className="hover:underline">
                  Ver orden
                </Link>
              </td>

            </tr>

            <tr className= "border-b transition duration-300 ease-in-out  hover:bg-white hover:text-black cursor-pointer">

              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">1</td>
              <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-gray-900 font-bold px-6 py-4 whitespace-nowrap">

                <IoCardOutline className="text-red" />
                <span className='mx-2 text-red'>No Pagada</span>

              </td>
              <td className="text-sm text-gray-900 font-bold px-6 ">
                <Link href="/orders/123" className="hover:underline">
                  Ver orden
                </Link>
              </td>

            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}