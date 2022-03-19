import Link from 'next/link';

const Categories = () => {
   return (
      <section className="categories">
         <div className="container categories_container">
            <div className="categories_left">
               <h1>Categories</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et, libero animi dicta sed nemo aliquid quos deleniti totam culpa corporis vitae commodi. Voluptatem, temporibus. Nemo repellat deleniti molestias nostrum.</p>
               <Link href='/courses'><a className='btn'>Learn More</a></Link>
            </div>

            <div className="categories_right">
               <article className="category">
                  <span className="category_icon"><i className="uil uil-bitcoin-circle"></i></span>
                  <h5>Blockchain</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis?</p>
               </article>
               
               <article className="category">
                  <span className="category_icon"><i className="uil uil-palette"></i></span>
                  <h5>Graphic Design</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis?</p>
               </article>
               
               <article className="category">
                  <span className="category_icon"><i className="uil uil-usd-circle"></i></span>
                  <h5>Finance</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis?</p>
               </article>
               
               <article className="category">
                  <span className="category_icon"><i className="uil uil-megaphone"></i></span>
                  <h5>Marketing</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis?</p>
               </article>
               
               <article className="category">
                  <span className="category_icon"><i className="uil uil-music"></i></span>
                  <h5>Music</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis?</p>
               </article>
               
               <article className="category">
                  <span className="category_icon"><i className="uil uil-puzzle-piece"></i></span>
                  <h5>Business</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, perferendis?</p>
               </article>
            </div>
         </div>
      </section>
   )
}

export default Categories