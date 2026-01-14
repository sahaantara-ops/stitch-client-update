import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Manageusers = () => {
    const {users} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal=(user)=>{
        setSelectedUser(user);
        setIsOpen(true);
    }
      const closeModal = () => {
    setIsOpen(false)
    setSelectedUser(null)
  }
    return (
        <div>
            <table className="w-full border">
  <thead className="bg-gray-100">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <span className={`px-2 py-1 rounded text-sm
            ${user.status === 'approved' ? 'bg-green-100' : 'bg-red-100'}
          `}>
            {user.status}
          </span>
        </td>
        <td>
          <button
            onClick={() => openModal(user)}
            className="btn btn-sm"
          >
            Update
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-xl font-bold mb-4">
              Update User
            </h2>

            <p>Name: {selectedUser?.name}</p>

            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

        </div>
    );
};

export default Manageusers;