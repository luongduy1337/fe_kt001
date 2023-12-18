'use client'

import { Navbar } from 'flowbite-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/public/images/logo.png'
import Image from 'next/image'
import { HeadersUserInfo } from './HeadersUserInfo'

export function Headers() {
    const pathname = usePathname();
  return (
    <Navbar className='background__header' rounded>
      <Navbar.Brand as={Link} href="/">
        <Image width={100} src={Logo} alt='logo mt gold'/>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link className={`text__base ${pathname === '/' ? 'text__base__active' : ''}`} href="/">TRANG CHỦ</Link>
        <Link className={`text__base ${pathname === '/about' ? 'text__base__active' : ''}`} href="/about">DOANH NGHIỆP</Link>
        <Link className={`text__base ${pathname === '/services' ? 'text__base__active' : ''}`} href="/services">DỊCH VỤ</Link>
        <Link className={`text__base ${pathname === '/contact' ? 'text__base__active' : ''}`} href="/contact">LIÊN HỆ</Link>
        <HeadersUserInfo/>
      </Navbar.Collapse>
    </Navbar>
  )
}
