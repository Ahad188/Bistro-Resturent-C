import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import OrderOnline from "../OrderOnline/OrderOnline";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
         
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      {/* 1 section added */}
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      {/* 2 section added */}
      <Contact></Contact>
      <OrderOnline></OrderOnline>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
