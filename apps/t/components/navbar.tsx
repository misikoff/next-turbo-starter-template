import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const navLinks = [{ name: 'Articles', href: '/articles', current: false }]

export default function Navbar() {
  const router = useRouter()
  navLinks.forEach((n) => {
    n.current = n.href === router.route
  })

  return (
    <div className='w-full bg-blue-50'>
      <header className='flex h-20 space-x-12 px-6'>
        <Link href='/' className='group inline-flex items-center'>
          <>
            <div className='relative h-10 w-10'>
              <Image
                alt='Gluten Free'
                className='overflow-hidden rounded-full'
                src='/icon.png'
                fill={true}
              />
            </div>
            <h1 className='ml-2 font-medium group-hover:text-blue-600'>
              Title
            </h1>
          </>
        </Link>

        <nav className='flex space-x-6'>
          <div className='hidden items-center space-x-6 sm:flex'>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  item.current
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-700 duration-1000 hover:border-gray-300 hover:text-blue-600',
                  'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium  '
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  )
}
