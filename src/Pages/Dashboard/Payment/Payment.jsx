import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useMenu from "../../../hookes/useMenu";

 
const stripePromise = loadStripe(import.meta.env.VITE_PAMENT_pk);
const Payment = () => {
     const [cart] = useMenu();
     const total = cart.reduce((sum, item)=>item.price + sum , 0)
     const price = parseFloat(total.toFixed(2))
     return (
          <div className="w-full">
               <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
               <h2 className="text-center">Taka Taka tka</h2>
               <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}></CheckoutForm>
               </Elements>
          </div>
     );
};

export default Payment;