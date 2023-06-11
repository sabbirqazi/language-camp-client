/* eslint-disable no-unused-vars */
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const Payment = () => {
    const { courseId } = useParams()
  console.log(courseId) 
   const newClassId = courseId;
    const [course, setCourse] = useState({})
    useEffect(() => {
      
        fetch(`http://localhost:5000/myclasses/${courseId}`)
        .then((res) => res.json())
        .then((data) => setCourse(data));
    
    //console getting data  
      }, [courseId]);
      console.log(course);
      const priceNumber = parseFloat(course.price).toFixed(2);
      const price =parseFloat(priceNumber)
      console.log(typeof(price))
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div className="w-full">
            <h1 className="text-center text-3xl my-10 font-semibold">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm newClassId={newClassId} course={course} price={price}></CheckoutForm>           
            </Elements>
        </div>
    );
};

export default Payment;