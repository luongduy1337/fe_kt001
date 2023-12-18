'use client'
import { Label, TextInput, Alert } from 'flowbite-react'
import AuthImg from "@/public/images/auth.png"
import Image from 'next/image'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import { register } from '@/actions'

export default function RegisterPage() {
    const [ formState , action ] = useFormState(register, {message : ""});
  return (
    <div className='layout__auth flex flex-row'>
        <div className='w-1/2 mr-2'>
            <Image src={AuthImg} alt='auth_img' className='w-full h-full'/>
        </div>
        <form action={action} className='flex w-1/2 flex-col gap-4'>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor="name" value='Họ tên'/>
                </div>
                <TextInput name='name' id='name' required shadow/>
            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor="username" value='Tài khoản'/>
                </div>
                <TextInput name='username' id='username' required shadow/>
            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor="email" value='Email'/>
                </div>
                <TextInput name='email' id='email' required shadow/>
            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor="password" value='Mật khẩu'/>
                </div>
                <TextInput type='password' name='password' id='password' required shadow/>
            </div>
            <div>
                <div className='mb-2 block'>
                    <Label htmlFor="phoneNumber" value='Số điện thoại'/>
                </div>
                <TextInput name='phoneNumber' id='phoneNumber' required shadow/>
            </div>
            <button className='link__services'>Đăng ký</button>
            <div className='text-center'>
                <Link href='/auth/login'>Bạn đã có tài khoản?Đăng nhập</Link>
            </div>
            {formState.message ? (
                    <Alert color='failure' style={{margin : "20px 0px"}}>
                        <span className='font-medium'>
                            {formState?.message}
                        </span>
                    </Alert>
                ) : null}
        </form>
    </div>
  )
}
