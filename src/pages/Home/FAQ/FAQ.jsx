/* eslint-disable react-refresh/only-export-components */
import lerningImg from "../../../assets/images/learnign.jpg";
import lerningImg2 from "../../../assets/images/learning2.jpg";
const FAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row  mx-5 my-10 lg:m-20  items-center gap-10">
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-bold ml-2 my-5 text-gray-400">FAQs</h1>
        <h2 className="text-3xl font-bold ml-2 mb-5 ">
          Learn Your Best Foreign <br /> Language with LangoCamp
        </h2>
        <div className="collapse collapse-plus shadow-lg bg-base-300 mb-4">
          <input type="radio" name="my-accordion-2" id="faq-1" defaultChecked />
          <div className="collapse-title text-xl font-medium bg-[#5b70f9]">
            Why should I learn a foreign language?
          </div>
          <div className="collapse-content bg-white">
            <p>
              Learning a foreign language offers numerous benefits. It enhances
              your cognitive abilities, improves memory, and boosts
              problem-solving skills. Additionally, it opens doors to new
              cultures, facilitates better communication when traveling, and can
              enhance career prospects by expanding your global job
              opportunities.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-2" id="faq-2" />
          <div className="collapse-title text-xl font-medium bg-[#5b70f9]">
            How can I learn a foreign language effectively?
          </div>
          <div className="collapse-content bg-white">
            <p>
              Effective language learning involves consistent practice and
              exposure. Consider taking language courses or using online
              resources and apps that offer interactive lessons. Immerse
              yourself in the language by watching movies, reading books, and
              listening to podcasts. Practice speaking with native speakers,
              join language exchange programs, and make use of language learning
              communities to practice and receive feedback on your skills.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio"  name="my-accordion-2" id="faq-3" />
          <div className="collapse-title text-xl font-medium bg-[#5b70f9]">
            What should I focus on when learning a foreign language?
          </div>
          <div className="collapse-content bg-white">
            <p>
              When learning a foreign language, focus on the four essential
              skills: listening, speaking, reading, and writing. Practice
              listening by watching videos or listening to audio recordings in
              the target language. Engage in conversations to improve your
              speaking skills. Read books, articles, and news in the language to
              enhance your reading ability. Finally, practice writing by
              journaling, writing essays, or engaging in language exchange with
              native speakers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-2" id="faq-4" />
          <div className="collapse-title text-xl font-medium bg-[#5b70f9]">
            Is it ever too late to learn a foreign language?
          </div>
          <div className="collapse-content bg-white">
            <p>
              It is never too late to learn a foreign language! While it may
              require more effort and practice as you get older, age is not a
              barrier to language learning. In fact, adult learners often bring
              unique skills and experiences that can aid their language
              acquisition. With dedication, perseverance, and consistent
              practice, anyone can learn a foreign language at any age.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
      <div className="flex flex-col gap-5">
      <div>
        <img src={lerningImg} alt="" className="rounded-full h-80 w-80" />
      </div>
      <div className="ml-auto">
        <img src={lerningImg2} alt="" className=" h-60 w-96 border-r-4" />
      </div>
    </div>
      </div>
    </div>
  );
};

export default FAQ;
