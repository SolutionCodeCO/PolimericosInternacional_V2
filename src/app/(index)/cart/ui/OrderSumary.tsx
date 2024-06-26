'use client'
import { useCartStore } from '@/store'
import { formatMoney } from '@/utils'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const OrderSumary = () => {
  const router = useRouter();
    const[loaded, setLoaded] = useState(false)
    const {totalItemsInCart, subTotal, iva, total } = useCartStore( state => state.getSummaryInformation())

    useEffect(()=>{
        setLoaded(true)
    },[])

    useEffect(() => {

      if ( totalItemsInCart === 0 && loaded === true )   {
        router.replace('/empty')
      }
  
  
    },[ totalItemsInCart, loaded ])

    if (!loaded) {
        return <div className='flex flex-col lg:flex-row lg:items-center lg:justify-start mb-5 '>
          <p className='text-xl font-regular animate-pulse text-black p-3 bg-gray-200 w-full rounded'>Calculando...</p>
        </div>
      }


  return (
    <>
     <div className="grid grid-cols-2">
              <span className="font-regular">Cantidad de cursos:</span>
              <span className="text-right font-regular">{totalItemsInCart === 1 ? '1 Curso': `${totalItemsInCart} Cursos`}</span>

              <span className="font-regular">Subtotal</span>
              <span className="text-right font-regular">{formatMoney (subTotal)}</span>

              <span className="font-regular">Impuesto (5%)</span>
              <span className="text-right font-regular">{formatMoney (iva)}</span>

              <span className="text-2xl mt-5 font-regular">Total</span>
              <span className="text-right text-2xl mt-5 font-regular">{formatMoney (total)}</span>

            </div>
    </>
  )
}
