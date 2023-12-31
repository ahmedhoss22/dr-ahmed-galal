"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss"
import Logo from "../../assets/Logo.png"
import Link from 'next/link';

function NavbarHeader() {
    console.log(Logo);
  return (
    <Navbar expand="lg" id='navbar-header' >
      <Container style={{flexDirection:"row-reverse"}}>
      <Link href="/" prefetch className="nav-link"> <Navbar.Brand prefetch ><img src={Logo.src} height="70px" width="70px" alt="doctor-ahmed-galal-logo" className='header-text'/></Navbar.Brand></Link>   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-start'>
          <Nav className='text-right' style={{direction:"rtl"}}>
            <Nav> <Link href="/" prefetch className="nav-link">الرئيسية</Link></Nav>
            <Nav><Link href="contact"prefetch className="nav-link">تواصل بنا</Link></Nav>
            <Nav><Link href="serviceslist"prefetch className="nav-link">الخدمات و المدونات</Link></Nav>
            <Nav><Link href="reservation"prefetch className="nav-link">الحجز</Link></Nav>
            <Nav><Link href="login" prefetch className="nav-link">تسجيل الدخول</Link></Nav>
            <Nav><Link href="register" prefetch className="nav-link"> أنشئ حسابك</Link></Nav>            
            <Nav> <Link href="adminpanel/reservationstatus" prefetch className="nav-link">صفحة الادمن</Link></Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;