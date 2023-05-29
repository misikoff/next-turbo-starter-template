import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='w-full bg-blue-50'>
      <header className='flex h-20 space-x-12 px-6'>
        <Link href='/' className='group inline-flex items-center'>
          <div className='flex items-center space-x-2'>
            <div className='relative h-10 w-10'>
              <Image
                alt=''
                className='overflow-hidden rounded-full'
                src='/icons/icon.png'
                fill
              />
            </div>
            <h1 className='font-medium group-hover:text-blue-600'>Title</h1>
          </div>
        </Link>
      </header>
    </nav>
  )
}
