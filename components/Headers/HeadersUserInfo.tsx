'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export function HeadersUserInfo() {
  const {data : session} = useSession();
  const pathname = usePathname();
  const renderHeaderUserInfo = () => {
    if (session?.user) {
      return (
        <div className="flex flex-row text__base">
          <Link className="underline" href="/profile">
            {session.user.name}
          </Link>
          <button className='text__base' onClick={() => signOut()}>ĐĂNG XUẤT</button>
        </div>
      )
    } else {
      return (
        <button className={`text__base ${pathname === '/auth/login' ? 'text__base__active' : ''}`} onClick={() => signIn()}>
          TÀI KHOẢN
        </button>
      )
    }
  }
  return renderHeaderUserInfo()
}
