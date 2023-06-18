import Footer from './components/Footer/Footer'
import './globals.css'
import { Roboto } from 'next/font/google'
import classNames from './utils/classNames'

const roboto = Roboto({ subsets: ['latin'],
weight:['100','300','400','500','700','900'] ,
variable:'--font-roboto'})

export const metadata = {
  title: 'Tech-shop',
  description: 'All tech products ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={classNames(roboto.variable,'container mx-auto px-2 font-roboto')}>
        
        {children}
        <Footer/></body>
    </html>
  )
}
