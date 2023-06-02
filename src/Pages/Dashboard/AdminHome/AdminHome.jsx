import useAuth from "../../../hookes/useAuth";

 

 

const AdminHome = () => {
     const {user} = useAuth()
     return (
          <div className="w-full p-5">
              <h2 className="text-3xl text-center">Welcome to : {user?.displayName} </h2> 
          </div>
     );
};

export default AdminHome;