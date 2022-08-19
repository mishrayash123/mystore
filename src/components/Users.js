import axios from "axios";
import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom';

const Users = () => {
    const [Users, setUsers] = useState([]);
    const [Orders, setOrders] = useState([]);
    const [UsersShow, setShowUsers] = useState(true);
    const [userid, setuserid] = useState(0);

    useEffect(() => {
       
       getOrders();
        getUsers();
      }, []);

    const getUsers = async (e) => {
        const result = await axios.get(`https://assessment.api.vweb.app/users`);
        setUsers(result.data);
    }
    const getOrders = async (e) => {
      const result = await axios.get(`https://assessment.api.vweb.app/orders`);
      setOrders(result.data);
  }

   
    

    return (
        <div className="mt-28">
          <>
          {
           UsersShow ? 
           <div class=" w-75 mx-auto">
           <div class="">
             <h3 class=" text-3xl font-bold font-sans text-red-300">Our Users</h3>
           </div>
         </div>  :
          <div class=" w-75 mx-auto">
          <div class="">
            <h3 class=" text-3xl font-bold font-sans text-red-300">User's Past Orders</h3>
          </div>
          <Link to="/users" type="button" className="btn btn-warning hover:bg-blue-900  text-red-400 px-3 py-2 mt-3 rounded-md text-xl font-medium hover:text-white"
          onClick={
            (e) => {
              setShowUsers(true);
            }
        }
          >
                                Go to users
                                </Link>
        </div>
          }
          </>
      <div className="mt-10">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-36 w-75 mx-auto">
            {
            Users.map(UsersEle => (
              <>{ UsersShow ?
                <div class="col">
                  <div class="card ">
                    <div class="card-body bg-red-200">
                      <h5 class="card-title text-green-900 font-extrabold text-center">{UsersEle.name}</h5>
                      <button  type="button" class="btn bg-purple-700 w-100 mt-3 text-red-300" onClick={
                        (e) => {
                          setShowUsers(false);
                          setuserid(UsersEle.user_id);
                        }
                    }>Past Orders</button>
                    </div>
                  </div>
                </div>
                :
                <div>
                {
                  Orders.map(OrdersEle => (
                      <>{OrdersEle.user_id === userid ?
                      <div class="col mt-3">
                        <div class="card ">
                          <div class="card-body bg-red-200">
                          <h5 class="card-title text-center text-green-900 font-extrabold">User Id {OrdersEle.user_id}</h5>
                            <h5 class="card-title text-center text-green-900 font-extrabold">Order Id {OrdersEle.order_id}</h5>
                            <h5 class="card-title text-center text-fuchsia-900 font-extrabold">Quantity {OrdersEle.quantity}</h5>
                            <h5 class="card-title text-center text-black font-semibold">Order Date {OrdersEle.order_date}</h5>
                          </div>
                        </div>
                      </div>
                      : null
}
                      </>
                  ))
              } 
              </div>
}
                </>
            ))
        } 
        </div>
        </div> 
    </div>
    );
};


export default Users;