import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios';


const Flutter = () => {
    const subscriberName = "Ali";
    const email = "aliogochukwu06@gmail.com";
    const planSubscribed = 'weightLoss';
    const subscriberPhone = '07044597110';
    const amount = 300;

    // Initialize payment configuration
    const config = {
        public_key: 'FLWPUBK_TEST-a48050707c79f539429d871d89a1d840-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: email,
            phone_number: subscriberPhone,
            name: subscriberName,
        },
        customizations: {
            title: 'Weight Loss Plan',
            description: 'Payment for Weight Loss Plan',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    // Handle Flutterwave payment
    const handleFlutterPayment = useFlutterwave(config);

    return (
        <>
          <button
            onClick={() => {
              handleFlutterPayment({
                callback: async(response) => {
                   console.log(response);
                   if (response.status === 'successful') {
                    try {
                      await axios.post(('http://localhost:5000/api/payment'), {
                        subscriberName: subscriberName,
                        email: email,
                        planSubscribed: planSubscribed,
                        amount: amount,
                      })
                    } catch (error) {
                      console.error('Error sending transaction details to backend:', error);
                    }
                   };
                    console.log(subscriberName);
                    console.log(email);
                    console.log(planSubscribed);
                    console.log(amount);
                    closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >
            Get Started
          </button>
        </>
      );
    }

export default Flutter;