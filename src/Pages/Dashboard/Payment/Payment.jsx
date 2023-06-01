import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

 
const stripePromise = loadStripe( );
const Payment = () => {
     return (
          <div className="w-full">
               <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
               <h2>Taka Taka tka</h2>
               <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
               </Elements>
          </div>
     );
};

export default Payment;