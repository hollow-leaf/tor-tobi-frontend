'use client'

import Link from 'next/link'
import burgerMenu from '../../public/svg/burger-menu-svgrepo-com.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavigationItemProps {
  href: string
  title: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavigationItem = ({ href, title, setIsOpen }: NavigationItemProps) => {
  const pathname = usePathname()

  const isActive = href === pathname

  return (
    <div className="flex items-center">
      <Link
        href={href}
        passHref
        onClick={() => setIsOpen(false)}
        className={`${isActive ? 'border-b-2 ' : 'border-b-0'
          } border-cat-peach300 py-1 transition ease-in-out delay-200  text-cat-text hover: bg-transparent hover: hover:text-cat-peach300`}
      >
        {title}
      </Link>
    </div>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOnClick = () => {
    setIsOpen((prevVal) => !prevVal)
  }

  return (
    <div className="py-4 px-8 bg-cat-crust w-full flex justify-between">
      <div className="flex items-center sm:text-center ">
        <Link href="/home" passHref className="text-xl font-bold text-cat-text flex">
          <Image
            alt='Tobi'
            src='/frontend/tobi.png'
            width={30}
            height={24}
            className="mx-2"
          />
          Tobi
        </Link>
      </div>
      <div className="flex items-center">
        <div
          className={
            isOpen
              ? `absolute top-[40px] w-full left-0 grid grid-cols grid-cols-1 bg-cat-crust p-4 mb-10`
              : `hidden sm:flex gap-4`
          }
        >
          <NavigationItem setIsOpen={setIsOpen} href="/home" title="Home" />
          {/* <NavigationItem setIsOpen={setIsOpen} href="/get-started" title="Get Started" /> */}
          <NavigationItem setIsOpen={setIsOpen} href="/dashboard" title="Dashboard" />
          <NavigationItem setIsOpen={setIsOpen} href="/deposit" title="Deposit" />
          <NavigationItem setIsOpen={setIsOpen} href="/withdraw" title="Withdraw" />
        </div>

        <div className="sm:hidden">
          <button onClick={handleOnClick}>
            <Image alt="burger-menu.png" src={burgerMenu} height={20} width={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
