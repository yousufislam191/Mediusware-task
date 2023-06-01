import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalC from "./ModalC";
import { Container } from "react-bootstrap";
import axios from "axios";
import Loading from "./Loading";

const ModalA = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState();
  const [singleData, setSingleData] = useState();

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const getAllContactData = async () => {
    const res = await axios
      .get(`https://contact.mediusware.com/api/contacts/?page=1`)
      .catch((err) => {
        console.log(err);
      });
    setLoading(true);

    if (res) {
      const data = await res.data.results;
      setContactData(data);
      console.log(data);
    }
  };

  const filteredData = isChecked
    ? contactData.filter((item) => item.id % 2 === 0)
    : contactData;

  useEffect(() => {
    getAllContactData();
  }, []);

  return (
    <>
      <div className="w-full h-screen justify-center items-center">
        <Container>
          <h1 className="text-center mb-6 text-emerald-400">Modal A</h1>
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

          <div className="grid grid-cols-4 overflow-y-scroll gap-y-5 h-96">
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
                      setModalCOpen(true);
                      setSingleData(data);
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
          </div>
          <ModalC
            modalCOpen={modalCOpen}
            onSetModalCOpen={setModalCOpen}
            singleData={singleData}
          />

          <div className="fixed bottom-10 ">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 font-semibold text-gray-700">
                Only even
              </span>
            </label>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ModalA;
