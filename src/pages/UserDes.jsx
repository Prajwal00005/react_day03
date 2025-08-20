import React from "react";
import { useParams } from "react-router-dom";
import users from "../data/user.json";

const UserDes = () => {
  const { id } = useParams();
  const user = users?.users.find((u) => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-2">{user.username}</h1>
      <p className="text-gray-700 mb-2">{user.description}</p>
      <p className="text-gray-500">{user.address}</p>
    </div>
  );
};

export default UserDes;
