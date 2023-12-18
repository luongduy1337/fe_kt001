import { Alert } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function SuccessFormPage() {
  return (
    <section className='success_form container mx-auto text-center'>
        <h1 className='success__text'>Đã gửi thành công</h1>
      <p className='success__content mt-2'>Bạn đã gửi xong biểu mẫu đến chúng tôi hãy chờ đợi liên lạc bạn nhé!</p>
      <Link className='link__services' href={'/'}>Về trang chủ</Link>
    </section>
  )
}