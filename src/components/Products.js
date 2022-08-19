import axios from "axios";
import React,{useEffect,useState} from "react";


const Rent = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
       
       
        getProducts();
      }, []);

    const getProducts = async (e) => {
        const result = await axios.get(`https://assessment.api.vweb.app/products`);
        console.log(result.data);
        setProducts(result.data);
    }
    

    return (
        <div className="mt-28">
        <div class=" w-75 mx-auto">
  <div class="">
    <h3 class=" text-3xl font-bold font-sans text-red-300">Products in our stock</h3>
  </div>
</div>

      <div className="mt-10">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-36 w-75 mx-auto">
            {
            Products.map(ProductsEle => (
                
                <div class="col">
                  <div class="card ">
                    <div class="card-body bg-red-200">
                      <h5 class="card-title text-green-900 font-extrabold text-center">{ProductsEle.name}</h5>
                      <h5 class="card-title text-fuchsia-900 font-extrabold text-center">Stock : {ProductsEle.stock}</h5>
                      <h5 class="card-title text-black font-semibold text-center">Price : {ProductsEle.selling_price}/Item</h5>
                      <button type="button" class="btn bg-purple-700 w-100 mt-3 text-red-300">Order Now</button>
                    </div>
                  </div>
                </div>
        
            ))
        } 
        </div>
        </div> 
   
    </div>
    );
};


export default Rent