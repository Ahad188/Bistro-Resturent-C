import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/slide5.jpg'
const OrderOnline = () => {
  return (
    <section>
      <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try"></SectionTitle>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="card w-[400px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img} 
              alt="salad"
              className="w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-[400px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img} 
              alt="salad"
              className="w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-[400px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={img} 
              alt="salad"
              className="w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;
