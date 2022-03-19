import Link from 'next/link';

const Team = () => {
   const teamInfo = [
      {
         name: 'Shatta Wale',
         role: 'Expert Tutor',
         image: 'tm1.jpg'
      },
      {
         name: 'Mia Jones',
         role: 'Expert Tutor',
         image: 'tm2.jpg'
      },
      {
         name: 'Diana Ayi',
         role: 'Expert Tutor',
         image: 'tm3.jpg'
      },
      {
         name: 'John Dumelo',
         role: 'Expert Tutor',
         image: 'tm4.jpg'
      },
      {
         name: 'Ruth Shockings',
         role: 'Expert Tutor',
         image: 'tm5.jpg'
      },
      {
         name: 'Edem Quist',
         role: 'Expert Tutor',
         image: 'tm6.jpg'
      },
      {
         name: 'Lila James',
         role: 'Expert Tutor',
         image: 'tm7.jpg'
      },
      {
         name: 'Menz Gold',
         role: 'Expert Tutor',
         image: 'tm8.jpg'
      },
      // {
      //    name: 'Shatta Wale',
      //    role: 'Expert Tutor',
      //    image: 'tm9.jpg'
      // },
      // {
      //    name: 'Shatta Wale',
      //    role: 'Expert Tutor',
      //    image: 'tm10.jpg'
      // },
   ]

   return (
      <section className="team">
         <h2>Meet Our Team</h2>

         <div className="container team_container">
            {teamInfo.map((member, index) => (
               <article key={index} className="team_member">
                  <div className="team_member_image">
                     <img src={`/${member.image}`} alt="Member 1" />
                  </div>

                  <div className="team_member_info">
                     <h4>{member.name}</h4>
                     <p>{member.role}</p>
                  </div>

                  <div className="team_member_socials">
                     <Link href='http://instagram.com'><a target='_blank'><i className="uil uil-instagram"></i></a></Link>
                     <Link href='http://twitter.com'><a target='_blank'><i className="uil uil-twitter-alt"></i></a></Link>
                     <Link href='http://linkedin.com'><a target='_blank'><i className="uil uil-linkedin-alt"></i></a></Link>
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}

export default Team