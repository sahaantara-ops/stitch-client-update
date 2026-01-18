import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { toast } from "react-toastify";


const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    demoVideo: "",
    paymentOption: ""
  });


  useEffect(() => {
    axiosSecure.get(`/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id, axiosSecure]);
   
    const handleChange = e => {
  const { name, value } = e.target;
  setProduct(prev => ({ ...prev, [name]: value }));
};
const handleUpdate = async e => {
  e.preventDefault();

  try {
    await axiosSecure.patch(`/products/${id}`, product);
    toast.success("Product updated successfully");
    navigate("/dashboard/all-products");
  } catch {
    toast.error("Failed to update product");
  }
};

return(
    <div>
        <form onSubmit={handleUpdate} className="space-y-4">
  <input
    name="name"
    value={product.name}
    onChange={handleChange}
    placeholder="Product Name"
    className="input input-bordered w-full"
  />

  <textarea
    name="description"
    value={product.description}
    onChange={handleChange}
    placeholder="Description"
    className="textarea textarea-bordered w-full"
  />

  <input
    name="price"
    type="number"
    value={product.price}
    onChange={handleChange}
    placeholder="Price"
    className="input input-bordered w-full"
  />

  <select
    name="category"
    value={product.category}
    onChange={handleChange}
    className="select select-bordered w-full"
  >
    <option value="Apparel">Apparel</option>
    <option value="Footwear">Footwear</option>
    
  </select>

  <input
    name="image"
    value={product.image}
    onChange={handleChange}
    placeholder="Image URL"
    className="input input-bordered w-full"
  />

  <input
    name="demoVideo"
    value={product.demoVideo}
    onChange={handleChange}
    placeholder="Demo Video URL"
    className="input input-bordered w-full"
  />

  <select
    name="paymentOption"
    value={product.paymentOption}
    onChange={handleChange}
    className="select select-bordered w-full"
  >
    <option value="Bkash">Bkash</option>
    <option value="Nagad">Nagad</option>
    <option value="Strip">Strip</option>
    <option value="COD">COD</option>

  </select>

  <button className="btn btn-success w-full">
    Update Product
  </button>
</form>

    </div>
  )
};

export default EditProduct;