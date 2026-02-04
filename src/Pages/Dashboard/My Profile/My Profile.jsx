import { useNavigate } from 'react-router-dom';
import UseAuth from '../../../Components/Hooks/useAuth';
import Swal from 'sweetalert2';

const MyProfile = () => {
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire('Logged out', 'You have been logged out successfully', 'success');
      navigate('/login');
    } catch (err) {
      Swal.fire('Error', 'Failed to logout', 'error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex flex-col items-center">
        <img
          src={user?.photoURL || 'https://i.ibb.co/MBtjqXQ/avatar.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />

        <h2 className="text-xl font-semibold">{user?.displayName || 'N/A'}</h2>
        <p className="text-gray-600">{user?.email}</p>

        <div className="mt-4 w-full">
          <p><strong>Role:</strong>{user?.role}</p>
          <p><strong>Account Status:</strong> Active</p>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-error mt-6 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
