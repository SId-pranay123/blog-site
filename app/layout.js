import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'blog-site',
  description: 'Explore or create your journey in blog writing',
}


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
      <Provider>
      <Navbar/>
      <main className='app'>
        {children}
      </main>
      <Footer/>
      </Provider>
      </body>
    </html>
  );
}
