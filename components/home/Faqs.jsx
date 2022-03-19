const Faqs = () => {
   const questions = [
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 1
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 2
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 3
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 4
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 5
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 6
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 7
      },
      {
         q: 'How do I know the right course for me?',
         open: false,
         id: 8
      },
   ]

   if(typeof window != 'undefined') {
      document.querySelectorAll('.faq').forEach((faq, index) => {
         faq.addEventListener('click', () => {
            faq.classList.toggle('open', !questions[index].open);
            const i = faq.querySelector('.faq_icon i');
            i.classList.toggle('uil-plus', questions[index].open);
            i.classList.toggle('uil-minus', !questions[index].open);
            questions[index].open = !questions[index].open;
         })
      })
   }
   
   return (
      <section className="faqs">
         <h2>Frequently Asked Questions</h2>
         <div className="container faqs_container">
            {questions.map(question => (
               <article key={question.id} className="faq" >
                  <div className="faq_icon"><i className="uil uil-plus"></i></div>
                  <div className='question_answer'>
                     <h4>{question.q}</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus at vero sequi ex libero totam rerum doloribus facere quaerat iure recusandae quo, assumenda voluptatibus similique esse, labore harum earum!</p>
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}

export default Faqs