import book from "../../../assets/images/open-book.png"
const Blog = () => {
    return (
        <div className="text-center p-20 bg-gradient-to-r from-cyan-100 to-blue-100 relative ">
            <div className="flex flex-col text-center gap-3 items-center mb-8">
        <h1 className="text-3xl  font-bold">
        What we Learn on LangoCamp?
        </h1>
        <p className="text-md">
        We provide the best service that comes with the best results.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-between items-center bg-white p-6 gap-10 hover:border-b-4 hover:border-x  border-[#5b70f9] rounded-lg w-max lg:w-[880px] h-[104px] shadow-md">
            <img src={book} className="h-12 w-12 lg:block hidden" alt="" />
            <div className="flex flex-col gap-1 text-start">
                <p className="text-md font-bold">Standard English</p>
                <p className="text-[#717f94]">Lesson: 600</p>
            </div>
            <p className="text-sm text-start text-[#717f94] lg:block hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maxime? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-outline btn-sm text-[#5b70f9] outline-[#5b70f9] hover:bg-[#5b70f9] hover:outline-none rounded-md">Read More</button>
        </div>
        <div className="flex justify-between items-center bg-white p-6 gap-10 hover:border-b-4 hover:border-x border-[#5b70f9] rounded-lg w-max lg:w-[880px] h-[104px] shadow-md">
            <img src={book} className="h-12 w-12 lg:block hidden" alt="" />
            <div className="flex flex-col gap-1 text-start">
                <p className="text-md font-bold">Advance Bengali</p>
                <p className="text-[#717f94]">Lesson: 600</p>
            </div>
            <p className="text-sm text-start text-[#717f94] lg:block hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maxime? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-outline btn-sm text-[#5b70f9] outline-[#5b70f9] hover:bg-[#5b70f9] hover:outline-none rounded-md">Read More</button>
        </div>
        <div className="flex justify-between items-center bg-white p-6 gap-10 hover:border-b-4 hover:border-x border-[#5b70f9]  rounded-lg w-max lg:w-[880px] h-[104px] shadow-md">
            <img src={book} className="h-12 w-12 lg:block hidden" alt="" />
            <div className="flex flex-col gap-1 text-start">
                <p className="text-md font-bold">Basic Portuguese</p>
                <p className="text-[#717f94]">Lesson: 200</p>
            </div>
            <p className="text-sm text-start text-[#717f94] lg:block hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maxime? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-outline btn-sm text-[#5b70f9] outline-[#5b70f9] hover:bg-[#5b70f9] hover:outline-none rounded-md">Read More</button>
        </div>
        <div className="flex justify-between items-center bg-white p-6 gap-10 hover:border-b-4 hover:border-x border-[#5b70f9]  rounded-lg w-max lg:w-[880px] h-[104px] shadow-md">
            <img src={book} className="h-12 w-12 lg:block hidden" alt="" />
            <div className="flex flex-col gap-1 text-start">
                <p className="text-md font-bold">Basic Portuguese</p>
                <p className="text-[#717f94]">Lesson: 200</p>
            </div>
            <p className="text-sm text-start text-[#717f94] lg:block hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maxime? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="btn btn-outline btn-sm text-[#5b70f9] outline-[#5b70f9] hover:bg-[#5b70f9] hover:outline-none rounded-md">Read More</button>
        </div>
        </div>
        </div>
    );
};

export default Blog;