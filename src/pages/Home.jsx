import React from "react";
import users from "../data/user.json"; // Make sure it's named correctly
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users?.users.map((data, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-bold mb-2">{data.username}</h2>
          <p className="text-gray-700 mb-4">{data.description}</p>
          <p className="text-gray-500 mb-4">{data.address}</p>
          <Link
            to={`/${data.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
