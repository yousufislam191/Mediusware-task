import React, { useEffect, useState } from "react";
import ModalC from "./ModalC";
import { Container } from "react-bootstrap";
import axios from "axios";
import HeadingButtonGroup from "./HeadingButtonGroup";
import FetchData from "./FetchData";
import Footer from "./Footer";

const ModalB = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState();
  const [singleData, setSingleData] = useState();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const filteredData = isChecked
    ? contactData?.filter((item) => item.id % 2 === 0)
    : contactData;

  useEffect(() => {
    const getUSContactData = async () => {
      const res = await axios
        .get(`https://contact.mediusware.com/api/contacts/?page=1`)
        .catch((err) => {
          console.log(err);
        });
      setLoading(true);

      if (res) {
        const data = await res.data.results;
        const USfilteredData = data.filter(
          (item) => item.country.name === "United States"
        );
        setContactData(USfilteredData);
        // console.log(data);
      }
    };

    getUSContactData();
  }, []);

  return (
    <>
      <div className="w-full h-screen justify-center items-center">
        <Container>
          <h1 className="text-center mb-6 text-emerald-400">Modal B</h1>
          <HeadingButtonGroup />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5">
            <FetchData
              loading={loading}
              filteredData={filteredData}
              onsetModalCOpen={setModalCOpen}
              onsetSingleData={setSingleData}
            />
          </div>

          <ModalC
            modalCOpen={modalCOpen}
            onSetModalCOpen={setModalCOpen}
            singleData={singleData}
          />

          <Footer
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Container>
      </div>
    </>
  );
};

export default ModalB;
