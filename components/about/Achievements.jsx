
const Achievements = () => {
   return (
      <section className="about_achievements">
         <div className="container about_achievements_container">
            <div className="about_achievements_left">
               <img src="/about achievements.svg" alt="achievements" />
            </div>

            <div className="about_achievements_right">
               <h1>Achievements</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum deserunt unde iure adipisci molestias distinctio quasi quaerat eius explicabo animi, quam totam autem facilis ex, eveniet tempore officiis ipsum.</p>

               <div className="achievements_cards">
                  <article className="achievement_card">
                     <span className="achievement_icon"><i className="uil uil-video"></i></span>
                     <h3>450+</h3>
                     <p>Courses</p>
                  </article>
                  
                  <article className="achievement_card">
                     <span className="achievement_icon"><i className="uil uil-users-alt"></i></span>
                     <h3>79,000+</h3>
                     <p>Students</p>
                  </article>
                  
                  <article className="achievement_card">
                     <span className="achievement_icon"><i className="uil uil-trophy"></i></span>
                     <h3>26</h3>
                     <p>Awards</p>
                  </article>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Achievements