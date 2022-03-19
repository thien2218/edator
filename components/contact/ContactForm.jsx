
const ContactForm = () => {
   return (
      <form action="https://formspree.io/f/myyopnyn" method="POST">
         <div className="form_name">
            <input type="text" name="First Name" placeholder="First Name" required />
            <input type="text" name="Last Name" placeholder="Last Name" required />
         </div>

         <input type="email" name="Email Address" placeholder="Email Address" required />
         <textarea name="Message" rows="7" placeholder="Message" required></textarea>
         <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
   )
}

export default ContactForm