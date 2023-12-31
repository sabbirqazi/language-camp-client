import { SiMusicbrainz } from "react-icons/si";

const Categories = () => {
  return (
    <section className="mx-auto px-5 my-12  lg:my-24">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-[#EE4A62] uppercase text-lg font-semibold">
          Categories
        </p>
        <h1 className="h2 text-center">
          Online <span className="text-[#F2A227]">Classes</span> For Remote
          Learning.
        </h1>
        <p className="text-lg text-gray-500 mb-16">
          Learning is easy from anywhere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {/* card */}
          <div
            className="flex flex-col text-center items-center px-[35px] py-[50px]
             gap-y-8  rounded-md  bg-[#1AB69D12] hover:bg-[#1AB69D] duration-300 hover:text-white"
          >
            <p className="rounded-full bg-[#1AB69D1A]  p-4 ">
              <SiMusicbrainz className="h-12 w-12 " />
            </p>

            <h4 className="text-xl  font-bold">Online Degree Programs</h4>
            <p className="text-lg text-wrap">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
            <p className="px-[24px] bg-[#1AB69D1A]  py-[4px] rounded-sm text-base font-bold">
              10 Courses
            </p>
          </div>
          {/* card2 */}
          <div
            className="flex flex-col text-center items-center px-[35px] py-[50px]
             gap-y-8  rounded-md  bg-[#EE4A6212] hover:bg-[#EE4A62] duration-300 hover:text-white"
          >
            <p className="rounded-full bg-[#EE4A621A]  p-4 ">
              <SiMusicbrainz className="h-12 w-12 " />
            </p>

            <h4 className="text-xl  font-bold">Online Degree Programs</h4>
            <p className="text-lg text-wrap">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
            <p className="px-[24px] bg-[#EE4A621A]  py-[4px] rounded-sm text-base font-bold">
              10 Courses
            </p>
          </div>
         {/*  card 3 */}
          <div 
            className="flex flex-col text-center items-center px-[35px] py-[50px]
             gap-y-8  rounded-md  bg-[#4664E412] hover:bg-[#5866eb] duration-300 hover:text-white"
          >
            <p className="rounded-full bg-[#4664E41A]  p-4 ">
              <SiMusicbrainz className="h-12 w-12 " />
            </p>

            <h4 className="text-xl  font-bold">Online Degree Programs</h4>
            <p className="text-lg text-wrap">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
            <p className="px-[24px] bg-[#4664E41A]  py-[4px] rounded-sm text-base font-bold">
              10 Courses
            </p>
          </div>
          <div
            className="flex flex-col text-center items-center px-[35px] py-[50px]
             gap-y-8  rounded-md  bg-[#F8941F1A] hover:bg-[#fcb900] duration-300 hover:text-white"
          >
            <p className="rounded-full bg-[#F8941F1A]  p-4 ">
              <SiMusicbrainz className="h-12 w-12 " />
            </p>

            <h4 className="text-xl  font-bold">Online Degree Programs</h4>
            <p className="text-lg text-wrap">
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </p>
            <p className="px-[24px] bg-[#F8941F1A]   py-[4px] rounded-sm text-base font-bold">
              10 Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
