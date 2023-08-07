
const Feedback = () => {
    return (
        <div className="text-center p-20 bg-[#5b70f9] ">
      <div className="flex flex-col text-center gap-3 items-center">
        <h1 className="text-3xl text-white font-bold">
        What clients say about us?
        </h1>
        <p className="text-md text-white">
        We provide the best service that comes with the best results.
        </p>
      </div>
        {/* review carousel */}
        <div className="flex  flex-col justify-center  lg:flex-row gap-8 mt-10">
        <div className="max-w-xs mx-auto overflow-hidden">
      <div className="bg-white p-4 shadow-lg rounded-md ">
     
        <p className="text-gray-600 p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero nec justo mattis tincidunt.
        </p>
      </div>
      <div className="flex items-center p-3">
        <img
          className="w-12 h-12 border-2 rounded-full mr-4"
          src="/src/assets/images/user1.jpg"
          alt="User Profile"
        />
        <div>
          <p className="text-white font-semibold">John Doe</p>
          <p className="text-gray-200"> Our Client</p>
        </div>
      </div>
    </div>
    <div className="max-w-xs mx-auto overflow-hidden">
      <div className="bg-white p-4 shadow-lg rounded-md ">
     
        <p className="text-gray-600 p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero nec justo mattis tincidunt.
        </p>
      </div>
      <div className="flex items-center p-3">
        <img
          className="w-12 h-12 border-2 rounded-full mr-4"
          src="/src/assets/images/user2.jpg"
          alt="User Profile"
        />
        <div>
          <p className="text-white font-semibold">Brandon Nathan</p>
          <p className="text-gray-200"> Our Client</p>
        </div>
      </div>
    </div>
    <div className="max-w-xs mx-auto overflow-hidden">
      <div className="bg-white p-4 shadow-lg rounded-md ">
     
        <p className="text-gray-600 p-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero nec justo mattis tincidunt.
        </p>
      </div>
      <div className="flex items-center p-3">
        <img
          className="w-12 h-12 border-2 rounded-full mr-4"
          src="/src/assets/images/user3.jpg"
          alt="User Profile"
        />
        <div>
          <p className="text-white font-semibold">Takemasu Odosai</p>
          <p className="text-gray-200"> Our Client</p>
        </div>
      </div>
    </div>
        </div>
  
        {/* review carousel */}

    </div>
    );
};

export default Feedback;