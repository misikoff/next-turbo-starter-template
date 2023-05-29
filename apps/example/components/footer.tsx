const curYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='bg-theme-background-dark p-8 text-sm'>
      <div className='mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <p className='mt-8 text-center text-base text-gray-600'>
          &copy; {curYear} Title
        </p>
      </div>
    </footer>
  )
}
