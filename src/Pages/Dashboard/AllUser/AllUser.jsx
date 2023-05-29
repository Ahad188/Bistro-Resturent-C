import { useQuery } from "@tanstack/react-query";

 

const AllUser = () => {
     const {data : users= [] , refetch} = useQuery(['users'], async ()=>{
          const res = await fetch('http://localhost:5000/users')
          return res.json()
     })
     
     return (
          <div>
               <h2>all users {users.length}</h2>
          </div>
     );
};

export default AllUser;