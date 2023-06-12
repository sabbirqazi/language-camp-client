

import FAQ from "../FAQ/FAQ";
import Hero from "../Hero/Hero";
import PopularClasses from "../PopularClasses/PopularClasses";

import PopularInstructors from "../PopularInstructors/PopularInstructors";



const Home = () => {
    return (
        
          <>
           <Hero></Hero>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
   
          <FAQ></FAQ>
          </>
        
    );
};

export default Home;