/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const PaymentHistory = () => {
 const [paymentHistory, setPaymentHistory] =useState([]); 
 const {user } = useAuth()
  const url =`https://foreign-language-server.vercel.app/payments/enrolledclass?email=${user?.email}`
    useEffect(()=>{

        fetch(url)
        .then(res => res.json())
        .then(data => setPaymentHistory(data))
    },[url, user])
    console.log(paymentHistory)
   
    /* const sortedHistory = paymentHistory.sort((a, b) => new Date(b.date) - new Date(a.date)); */
    return (

        <div className="flex justify-center mt-8">
        <div className="w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Payment History</h1>
        <table className="table text-sm table-zebra w-full p-4">
          <thead>
            <tr>
              <th className=" text-lg py-2 px-4 border-b">#</th>
              <th className=" text-lg py-2 px-4 border-b">Name</th>
              <th className=" text-lg py-2 px-4 border-b">Date</th>
              <th className=" text-lg py-2 px-4 border-b">Email</th>
              <th className=" text-lg py-2 px-4 border-b">Price</th>
              <th className=" text-lg py-2 px-4 border-b">Transaction</th>
           
            </tr>
          </thead>
          <tbody>
          
            {paymentHistory?.map((history, index) => (
              <tr key={history._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{history.name}</td>
                <td className="py-2 px-4 border-b">{history.date}</td>
                <td className="py-2 px-4 border-b">{history.email}</td>
                <td className="py-2 px-4 border-b">${history.price}</td>
                <td className="py-2 px-4 border-b">{history.transactionId}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default PaymentHistory;