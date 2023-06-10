/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const CheckoutForm = ({price}) => {
    console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] =  useState('')
    const [clientSecret, setClientSecret] = useState("");
    const {user} =useAuth();
    useEffect(() => {   
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
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
            console.log('payment method', paymentMethod)
        }
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
        console.log(paymentIntent)
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
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-700 ml-10">{cardError}</p>
            }
       </>
    );
};
export default CheckoutForm;