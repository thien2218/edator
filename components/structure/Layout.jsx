import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Layout = ({ children }) => {
   const [scroll, setScroll] = useState('');

   const navRef = useRef();
   const menuRef = useRef();
   const closeRef = useRef();

   useEffect(() => {
      window.addEventListener('scroll', () => {
         window.scrollY > 50 ? setScroll('nav_scroll') : setScroll('');
      })

      window.addEventListener('resize', () => {
         if(window.innerWidth <= 1024) {
            navRef.current.style.display = 'none';
            menuRef.current.style.display = 'inline-block';
            closeRef.current.style.display = 'none';
         } else {
            navRef.current.style.display = 'flex';
            menuRef.current.style.display = 'none';
            closeRef.current.style.display = 'none';
         }
      })
   })

   return (
      <>
         <Head>
            <title>Edator</title>
            <meta name="description" content="A bookmark manager app" />
            <meta charset="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         </Head>

         {/* ----------NAVBAR---------- */}
         <nav className={scroll}>
            <div className="container nav_container">
               <Link href='/'>
                  <a><h4>EDATOR</h4></a>
               </Link>

               <ul className='nav_menu' ref={navRef}>
                  <li><Link href='/'><a>Home</a></Link></li>
                  <li><Link href='/about'><a>About</a></Link></li>
                  <li><Link href='/courses'><a>Courses</a></Link></li>
                  <li><Link href='/contact'><a>Contact</a></Link></li>
               </ul>

               <button ref={menuRef} onClick={() => {
                  navRef.current.style.display = 'flex';
                  menuRef.current.style.display = 'none';
                  closeRef.current.style.display = 'inline-block';
               }} id='open-menu-btn'><i className="uil uil-bars"></i></button>
               <button ref={closeRef} onClick={() => {
                  navRef.current.style.display = 'none';
                  menuRef.current.style.display = 'inline-block';
                  closeRef.current.style.display = 'none';
               }} id='close-menu-btn'><i className="uil uil-multiply"></i></button>
            </div>
         </nav>
         {/* ----------END OF NAVBAR---------- */}

         {children}

         {/* ----------FOOTER---------- */}
         <footer>
            <div className="container footer_container">
               <div className="footer1">
                  <Link href='/'><a className='footer_logo'><h4>EDATOR</h4></a></Link>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos totam pariatur?</p>
               </div>

               <div className="footer2">
                  <h4>Permalinks</h4>
                  <ul className="permalinks">
                     <li><Link href='/'><a>Home</a></Link></li>
                     <li><Link href='/about'><a>About</a></Link></li>
                     <li><Link href='/courses'><a>Courses</a></Link></li>
                     <li><Link href='/contact'><a>Contact</a></Link></li>
                  </ul>
               </div>

               <div className="footer3">
                  <h4>Privacy</h4>
                  <ul className="privacy">
                     <li><Link href='/'><a>Privacy Policy</a></Link></li>
                     <li><Link href='/'><a>Terms and conditions</a></Link></li>
                     <li><Link href='/'><a>Refund Policy</a></Link></li>
                  </ul>
               </div>

               <div className="footer4">
                  <h4>Contact us</h4>
                  <div>
                     <p>+01 234 567 8910</p>
                     <p>thien1367526@gmail.com</p>
                  </div>
                  <ul className="footer_socials">
                     <li><Link href='/'><a><i className='uil uil-facebook-f'></i></a></Link></li>
                     <li><Link href='/'><a><i className='uil uil-instagram-alt'></i></a></Link></li>
                     <li><Link href='/'><a><i className='uil uil-twitter'></i></a></Link></li>
                     <li><Link href='/'><a><i className='uil uil-linkedin-alt'></i></a></Link></li>
                  </ul>
               </div>
            </div>

            <div className="footer_copyright">
               <small>Copyright &copy; Huynh Ngoc Thien</small>
            </div>
         </footer>
         {/* ----------END OF FOOTER---------- */}
      </>
   )
}

export default Layout