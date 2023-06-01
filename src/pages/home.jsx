import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="p-32 rounded bg-slate-200 border-[#46139f] border-2">
        <div className="flex flex-col items-center">
          <button
            onClick={() => navigate("/modalA")}
            className="text-[#46139f] border-[#46139f] border-2 font-bold py-2 px-4 rounded"
          >
            All Contact
          </button>
          <div className="my-4"></div>
          <button
            onClick={() => navigate("/modalB")}
            className="text-[#ff7f50] border-[#46139f] border-2 font-bold py-2 px-4 rounded"
          >
            US Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
