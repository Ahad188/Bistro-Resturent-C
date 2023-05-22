import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

 

 

const Home = () => {
     return (
          <div>
                <Banner></Banner>
                <Category></Category>
                {/* 1 section added */}
                <PopularMenu></PopularMenu>
          </div>
     );
};

export default Home;