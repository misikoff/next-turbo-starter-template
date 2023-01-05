import Navbar from 'components/navbar'
import Footer from 'components/footer'

export default function Layout({
  children,
}: {
  children: JSX.Element | string
}) {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <Navbar />
      <main className='flex-grow p-4'>{children}</main>
      <Footer />
    </div>
  )
}
