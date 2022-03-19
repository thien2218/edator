import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
   const students = [
      {
         name: 'Diana Ayi',
         role: 'Student',
         avt: 'avatar1'
      },
      {
         name: 'Ernest Achiever',
         role: 'Web Developer',
         avt: 'avatar2'
      },
      {
         name: 'Andrew Gustav',
         role: 'CEO',
         avt: 'avatar3'
      },
      {
         name: 'Hajia Bintu',
         role: 'Student',
         avt: 'avatar4'
      },
      {
         name: 'Jane Doe',
         role: 'Student',
         avt: 'avatar5'
      },
      {
         name: 'Miss Kayla',
         role: 'Web Developer',
         avt: 'avatar6'
      },
      {
         name: 'Edem Quist',
         role: 'Student',
         avt: 'avatar7'
      }
   ]

   return (
      <section className="container testimonials_container">
         <h2>Students' Testimonials</h2>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ 
               el: '.my-custom-pagination-div',
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
               600: {
                  slidesPerView: 2,
               },

               1300: {
                  slidesPerView: 3,
               }
            }}
         >
            {students.map((student, index) => (
               <SwiperSlide key={index} className="testimonial">
                  <div className="avatar">
                     <img src={`/${student.avt}.jpg`} alt="Avatar" />
                  </div>

                  <div className="testimonial_info">
                     <h5>{student.name}</h5>
                     <small>{student.role}</small>
                  </div>

                  <div className="testimonial_body">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, delectus sapiente quos illo odio earum quam dolore eaque ea repellat!</p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         
         <div className="my-custom-pagination-div" />
      </section>
   )
}

export default Testimonials