import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
const LeftPane = () => {
  return (
    <div className="w-1/4 h-screen p-2">
      <div className="bg-[#121212] rounded-md p-4">
        <ul>
          <li className="flex gap-5 items-center px-1">
            <GoHomeFill size={30} /> Home
          </li>
          <li className="flex gap-5 items-center px-1 py-4">
            <FiSearch size={30} />
            Search
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPane;
