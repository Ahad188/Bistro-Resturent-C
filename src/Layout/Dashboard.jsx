import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUser } from 'react-icons/fa';
import useCart from "../hookes/useCart";
import useAdmin from "../hookes/useAdmin";

 

const Dashboard = () => {
     const [cart] = useCart();
     // todo : load data from the server to have dynamics isAdmin based on data
     // const isAdmin = true; 
     const [isAdmin] = useAdmin();
     return (
          <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
           <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          
          </div> 
          <div className="drawer-side bg-[#D1A054]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 ">
             {
               isAdmin ? <>
                <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/additem"><FaUtensils/> Add an Item</NavLink></li>
                    <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Mange Item</NavLink></li>
                    <li><NavLink to="/"><FaBook></FaBook> Mange Booking(not implemented)</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUser></FaUser> All users</NavLink></li>
                
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
               
               </> :
                <>
                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
               
               
               </>
             }
           
            </ul>
          
          </div>
        </div>
     );
};

export default Dashboard;