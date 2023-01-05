import Link from 'next/link'

const curYear = new Date().getFullYear()

const navigation = {
  main: [{ name: 'Content Example', href: '/content-example' }],
}

export default function Footer() {
  return (
    <footer className='bg-theme-background-dark p-8 text-sm'>
      <div className='mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <nav
          className='flex flex-col justify-center pt-4 md:flex-row'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2 text-center'>
              <Link
                href={item.href}
                className='text-base text-gray-600 underline hover:text-blue-400'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className='mt-8 text-center text-base text-gray-600'>
          &copy; {curYear} Title
        </p>
      </div>
    </footer>
  )
}
