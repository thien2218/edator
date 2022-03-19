import Link from 'next/link';
import MainCourses from '../components/home/MainCourses';
import Categories from '../components/home/Categories';
import Faqs from '../components/home/Faqs';
import Testimonials from '../components/home/Testimonials';

export default function Home() {

   return (
      <>
         <header>
            <div className="container header_container">
               <div className="header_left">
                  <h1>Grow your skill to advance your career path</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita unde dignissimos illum? Dicta incidunt ab ad a enim laboriosam.</p>
                  <Link href='/courses'><a className='btn btn-primary'>Get Started</a></Link>
               </div>

               <div className="header_right">
                  <div className="header_right-img">
                     <img src='/header.svg' />
                  </div>
               </div>
            </div>
         </header>

         <Categories />
         <MainCourses showPopular={true} />
         <Faqs />
         <Testimonials />
      </>
   )
}
