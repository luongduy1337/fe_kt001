import { FormContact } from '@/components/FormContact/FormContact'
import React from 'react'
import ContactImg from "@/public/images/contact.png"
import Image from 'next/image'


export default function ContactPage() {
  return (
    <section className='container mx-auto contact'>
      <h2 className="contact__title text-center">Liên hệ đến MT Gold</h2>
      <div className='flex flex-row items-center'>
        <div className='contact__img'>
          <Image src={ContactImg} alt='logo_contact' className='w-full h-full'/>
        </div>
        <div className='contact__form__parent w-1/2'>
          <FormContact/>
        </div>
      </div>
    </section>
  )
}
