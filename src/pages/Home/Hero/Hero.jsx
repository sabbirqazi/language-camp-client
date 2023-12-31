import { IoMdArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[100%] xl:pt-28 bg-[#2356F6] ">
      <div className="container mx-auto">
        <div className=" flex flex-col md:flex-row justify-between gap-8 ">
          <div className="flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left ">
            <h1 className="h1 text-white">
              An Online Education <br /> Platform For Global <br />
              <span className="text-[#F2A227]">Learners</span>
            </h1>
            <p className="p mb-10 text-white">
              We are experienced in educational platform and <br /> skilled
              strategies for the success of our online learning.
            </p>
            <button className="mx-auto md:mx-0 px-6 w-56 h-16 rounded-md cursor-pointer flex gap-2 font-semibold text-lg items-center bg-white  transition-transform duration-300 transform hover:translate-x-1 hover:bg-[#F2A227]">
    <span>Find The Course</span>
    <IoMdArrowForward
        size={24}
        className=""
    />
</button>

          </div>

          <div className="mx-3 xl:mx-0">
            <img src="/src/assets/images/hero-img.png" alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
