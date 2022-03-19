import Link from 'next/link';

const MainCourses = ({ showPopular }) => {
   const courses = showPopular ? [
         'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design',
   ] : [
      'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design', 'Responsive Social Media Website UI Design',
   ]
   
   const mgTop = showPopular ? '10rem' : '2rem';
   const displayTitle = showPopular ? 'block' : 'none';

   return (
      <section className="courses" style={{ marginTop: mgTop }}>
         <h2 style={{ display: displayTitle }}>Our Popular Courses</h2>
         <div className="container courses_container">
            {courses.map((course, index) => (
               <article key={index} className="course">
                  <div className="course_image">
                     <img src={`/course${(index+1).toString()}.jpg`} />
                  </div>

                  <div className='course_info'>
                     <h4>{course}</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minima velit perferendis numquam vel maiores maxime.</p>
                     <Link href='/courses'><a className='btn btn-primary'>Learn More</a></Link>
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}

export default MainCourses