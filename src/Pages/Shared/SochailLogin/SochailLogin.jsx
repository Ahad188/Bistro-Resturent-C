import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SochailLogin = () => {
     const {googleSingIn} = useContext(AuthContext)
     const navigate = useNavigate();
     const location = useLocation();
 
     const from = location.state?.from?.pathname || "/";

     const handelGoogleSingIn = ()=>{
          googleSingIn()
          .then(result =>{
               const logGoogleUser = result.user;
               console.log(logGoogleUser);
               const saveUser = {name: logGoogleUser.displayName
                    , email:logGoogleUser.email}
               fetch('http://localhost:5000/users',{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body: JSON.stringify(saveUser)
                  })
                  .then(res=>res.json())
                  .then(()=>{
                         navigate(from, { replace: true });
                    
                  })







          })
     }
  return (
    <div className="text-center my-4">
      <div className="divider"></div>
      <button onClick={handelGoogleSingIn} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SochailLogin;
