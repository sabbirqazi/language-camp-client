

import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ";
import Feedback from "../Feedback/Feedback";
import GetStarted from "../GetStarted/GetStarted";
import GlobalCommunity from "../GlobalCommunity/GlobalCommunity";
import Hero from "../Hero/Hero";
import PopularClasses from "../PopularClasses/PopularClasses";

import PopularInstructors from "../PopularInstructors/PopularInstructors";



const Home = () => {
    return (
        
          <>
           <Hero></Hero>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <GetStarted></GetStarted>
          <GlobalCommunity></GlobalCommunity>
          <Feedback></Feedback>
          <Blog></Blog>
          <FAQ></FAQ>
          </>
        
    );
};

export default Home;