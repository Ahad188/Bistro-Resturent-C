import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
 const handleMakeAdmin=(user)=>{
     fetch(`http://localhost:5000/users/admin/${user._id}`,{
          method:'PATCH'
     })
     .then(res=>res.json())
     .then(data=>{
          console.log(data);
          if(data.modifiedCount){
               refetch()
               Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:  `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
          }
     })
 }


 const handleDelete = (user)=>{}

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      <h2 className="text-center text-3xl font-semibold">All users :{users.length}</h2>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td> {user.name}</td>
                <td>{user.email}</td>
                <td>{ user.role === 'admin' ? "Admin":<button
                     onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost bg-orange-400 text-white"
                  >
                    <FaUserShield></FaUserShield>
                  </button>
                    
                    }</td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
