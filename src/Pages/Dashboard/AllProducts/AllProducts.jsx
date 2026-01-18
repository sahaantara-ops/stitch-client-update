import { MdEdit, MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import UseAuth from "../../../Components/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from 'react-toastify';

const AllProducts = () => {
  const { loading } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
       return Array.isArray(res.data) ? res.data : [];
    }
  });

  if (loading || isLoading) {
    return <p>Loading products...</p>;
  }
  const handleToggleHome = async (id) => {
  await axiosSecure.patch(`/products/${id}`, {
    toggleHome: true
  });
  refetch();
};

const handleDelete = async (id) => {
  if (!confirm('Are you sure you want to delete this product?')) return;
  toast.success('Product deleted successfully!');
  await axiosSecure.delete(`/products/${id}`);
  refetch();
};


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        All Products: {products.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              
              <th>Show on Home</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(products) &&
  products.map(product => (
    <tr key={product._id}>
      <td>
        <img
          src={product.productImage}
          alt={product.productName}
          className="w-12 h-12 rounded"
        />
      </td>
      <td>{product.productName}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
              

                <td>
                  <input
                    type="checkbox"
                    checked={product.showOnHome}
                    onChange={() => handleToggleHome(product._id)}
                  />
                </td>

                <td className="flex gap-2">
                  <button className="btn btn-sm btn-info">
                    <MdEdit />
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(product._id)}
                  >
                    <MdDelete />
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

export default AllProducts;

