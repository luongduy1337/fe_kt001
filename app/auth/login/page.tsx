'use client'
import Image from "next/image"
import AuthImg from "@/public/images/auth.png"
import { Label, TextInput, Alert } from "flowbite-react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useFormState } from "react-dom"
import { login } from "@/actions"

const LoginPage = () => {
  const [formState, action] = useFormState(login, { message: "" });
  return (
    <div className="layout__auth flex flex-row items-center">
      <div className="w-1/2 mr-2">
        <Image src={AuthImg} alt="auth_img" className="w-full h-full" />
      </div>
      <form action={action} className="flex w-1/2 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="usernameOrEmail" value="Tài khoản hoặc email" />
          </div>
          <TextInput name="usernameOrEmail" id="usernameOrEmail" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Mật khẩu" />
          </div>
          <TextInput name="password" id="password" required shadow />
        </div>
        <button className="link__services">Đăng nhập</button>
        <div className="text-center">
          <Link href="/auth/register">Bạn chưa có tài khoản?Đăng ký</Link>
        </div>
        {formState.message ? (
          <Alert color='failure' style={{ margin: "20px 0px" }}>
            <span className='font-medium'>
              {formState?.message}
            </span>
          </Alert>
        ) : null}
      </form>
    </div>
  )
}

export default LoginPage
