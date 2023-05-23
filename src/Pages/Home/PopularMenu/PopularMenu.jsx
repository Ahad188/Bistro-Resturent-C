
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hookes/useMenu";

 

const PopularMenu = () => {
     const [menu] = useMenu()
     const popularItems = menu.filter(item=>item.category === 'popular')
      
     return (
          <section>
               <SectionTitle
               heading="From Our Menu"
               subHeading="Popular Items"
               ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mx-auto">
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
               
          </section>
     );
};

export default PopularMenu;