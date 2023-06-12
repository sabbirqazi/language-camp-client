import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageOne from "../../../assets/images/image-1.jpg";
import imageTwo from "../../../assets/images/benefits.jpg";
import imageThree from "../../../assets/images/book-link01.jpg";
import imageFour from "../../../assets/images/best-language-learning-method-for-adults.png";
const Hero = () => {
  return (
  
   <Carousel>
 <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url('${imageOne}')` }}>
    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
        <h1 className="mb-8 text-5xl font-bold text-white">Enjoy Summer & Learn Languages</h1>
        <p className="mb-8 text-white  font-semibold text-md">Learning a foreign language not only reveals how other societies think and feel, what they have experienced and value, and how they express themselves, it also provides a cultural mirror in which we can more clearly see our own society. <br /> - Chancellor Edward Lee Gorsuch</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url('${imageThree}')` }}>
    <div className="hero-overlay "></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
        <h1 className="mb-8 text-5xl font-extrabold text-white">Foreign Language Is An Awesome Skill</h1>
        <p className="mb-8 text-white  font-semibold text-md">Language is the road map of a culture. It tells you where its people come from and where they are going. <br /> -Rita Mae Brown </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url('${imageTwo}')` }}>
    <div className="hero-overlay "></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
        <h1 className="mb-5 text-5xl font-bold text-white">Communicate With Entire World</h1>
        <p className="mb-5 text-white font-semibold text-md">One language sets you in a corridor for life. Two languages open every door along the. <br />  - Frank Smith. </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url('${imageFour}')` }}>
    <div className="hero-overlay "></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
        <h1 className="mb-5 text-5xl font-bold text-white">Lets Start With Hello </h1>
        <p className="mb-5 text-white font-semibold text-md">To learn a language is to have one more window from which to look at the world. <br /> - Chinese Proverb.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

   </Carousel>
    
  );
};

export default Hero;
