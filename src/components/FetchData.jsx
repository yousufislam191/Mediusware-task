import React from "react";
import Loading from "./Loading";

const FetchData = ({
  loading,
  filteredData,
  onsetModalCOpen,
  onsetSingleData,
}) => {
  return (
    <>
      {loading ? (
        filteredData?.map((data) => (
          <div
            key={data.id}
            className="p-4 rounded border-[#46139f] border-2 w-max gap-x-8"
          >
            <p className="font-semibold">Country: {data.country.name}</p>
            <p className="font-semibold">Mobile: {data.phone}</p>
            <button
              onClick={() => {
                onsetModalCOpen(true);
                onsetSingleData(data);
              }}
              className="text-white bg-[#46139f] border-2 font-bold py-2 px-4 rounded"
            >
              Contact
            </button>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FetchData;
