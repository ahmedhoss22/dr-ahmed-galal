import './globals.css'
import { Cairo } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHeader from '@/components/navbar/Navbar';
import Footer from './footer/Footer';

const cairo = Cairo({
   subsets: ['latin'] ,
   weight :['400' ,'500' ,'700' ,'900']
 })

export const metadata = {
  title: 'Dr.Ahmed Galal',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        {/* <NavbarHeader/> */}
        {children}
        {/* <Footer/> */}

        </body>
    </html>
  )
}