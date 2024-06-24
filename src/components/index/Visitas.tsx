import Link from 'next/link'
import React from 'react'

export const Visitas = () => {
  return (
    <div className='my-[10%] mx-8'>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div className='flex justify-center items-center'>
            <h4 className='font-bold text-[40px]'>¡Nuestras visitas por Latinoamerica!</h4>
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s1.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s2.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s3.webp"
              
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s4.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s5.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s6.webp"
              
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s7.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s8.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s9.webp"
              
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s10.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s11.webp"
              
            />
          </div>
          <div>
            <Link
              className="h-auto max-w-full rounded-lg"
              href="/img/lugares/s12.webp"
              
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
