import Link from 'next/link';
import ContactForm from './ContactForm';

const ContactInfo = () => {
   return (
      <section className="contact">
         <div className="container contact_container">
            <aside className="contact_aside">
               <div className="aside_image">
                  <img src="/contact.svg" alt="Contact" />
               </div>
               <h2>Contact Us</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nihil vitae assumenda, hic perspiciatis temporibus.</p>

               <ul className="contact_details">
                  <li>
                     <i className="uil uil-phone-times"></i>
                     <h5>+01 234 567 8910</h5>
                  </li>

                  <li>
                     <i className="uil uil-envelope"></i>
                     <h5>support@edator.com</h5>
                  </li>

                  <li>
                     <i className="uil uil-location-point"></i>
                     <h5>Ho Chi Minh City, Vietnam</h5>
                  </li>
               </ul>

               <ul className="contact_socials">
                  <li><Link href='/'><a><i className='uil uil-facebook-f'></i></a></Link></li>
                  <li><Link href='/'><a><i className='uil uil-instagram-alt'></i></a></Link></li>
                  <li><Link href='/'><a><i className='uil uil-twitter'></i></a></Link></li>
                  <li><Link href='/'><a><i className='uil uil-linkedin-alt'></i></a></Link></li>
               </ul>
            </aside>

            <ContactForm />
         </div>
      </section>
   )
}

export default ContactInfo