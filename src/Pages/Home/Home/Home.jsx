import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

 

 

const Home = () => {
     return (
          <div>
                <Banner></Banner>
                <Category></Category>
                {/* 1 section added */}
                <PopularMenu></PopularMenu>
                {/* 2 section added */}
                <Featured></Featured>
                <Testimonials></Testimonials>
          </div>
     );
};

export default Home;