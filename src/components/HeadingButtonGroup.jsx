import React from "react";
import { useNavigate } from "react-router-dom";

const HeadingButtonGroup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center mb-16">
      <button
        onClick={() => navigate("/modalA")}
        className="text-[#46139f] border-[#46139f] border-2  font-bold py-2 px-4 rounded"
      >
        All Contacts
      </button>
      <div className="my-4"></div>
      <button
        onClick={() => navigate("/modalB")}
        className="text-[#ff7f50] border-[#46139f] border-2 font-bold py-2 px-4 rounded"
      >
        US Contacts
      </button>
      <div className="my-4"></div>
      <button
        onClick={() => navigate("/")}
        className="border-[#46139f] border-2 font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default HeadingButtonGroup;
