import Footer from 'components/footer'
import Navbar from 'components/navbar'

import '../assets/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <Navbar />
      <main className='flex-grow p-4'>{children}</main>
      <Footer />
    </div>
  )
}
