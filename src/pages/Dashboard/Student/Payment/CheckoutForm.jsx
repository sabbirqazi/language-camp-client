/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const CheckoutForm = ({newClassId, course, price}) => {
    console.log(course)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] =  useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    const {user} =useAuth();
    useEffect(() => {   
   if(price){
    fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
   }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card', 
            card,
        })
        if(error){
            setCardError(error.message)
         
        }
        else{
            setCardError('')
      /*       console.log('payment method', paymentMethod) */
        }
        setProcessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email,
                  name: user?.displayName,
                },
              },
            },
          );
        if(confirmError){
            console.log(confirmError)

        }
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);
            //save payment 
            const payment ={
                email: user?.email,
                transactionId: paymentIntent.id,
                price, 
                name: course.courseName,
                instructor: course.instructor,
                thumbnail: course.thumbnail,
                date: new Date().toLocaleDateString(),
                classId: newClassId,
                status: 'succeeded',
            }
        /*     const payment = {
                email: user.email,
                transactionId: paymentIntent.id,
                price,
                new_id: foundClass._id,
                classId: foundClass.classId,
                image: foundClass.image,
                date: new Date().toLocaleDateString(),
                courseName: foundClass.courseName,
                availableSeats: parseInt(foundClass.availableSeats - 1)
            } */
            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payment),
              })
              .then((res) => res.json())
              .then((data) => console.log(data));
           /*    if(data.insertedId){
                //swal
              } */
               
        }
    }

    return (
       < >
        <form className="p-10" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-700 ml-10">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-600 ml-10">Transaction succesful with TrxId {transactionId}</p>
            }
       </>
    );
};
export default CheckoutForm;