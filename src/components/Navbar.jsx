import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isdropDown, setIsDropDown] = useState(false);

  const modelref = useRef(null);

  const handleClickOutside = (e) => {
    if (modelref && modelref.current && !modelref.current.contains(e.target)) {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    if (isdropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <nav className="bg-gray-900 shadow-md">
      <ul className="flex justify-center space-x-8 py-4 text-white font-medium">
        <li className="hover:text-yellow-400 cursor-pointer transition">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer transition">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer transition">
          <div onClick={() => setIsDropDown(true)}>News</div>
          {isdropDown && (
            <div
              ref={modelref}
              className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg py-2"
            >
              <Link
                to="/sport"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Sport
              </Link>
              <Link
                to="/politics"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
              >
                Politics
              </Link>
            </div>
          )}
        </li>
        <li className="hover:text-yellow-400 cursor-pointer transition">
          <Link to={"/setting"}>Setting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
