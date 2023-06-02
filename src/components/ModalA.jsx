import React, { useEffect, useState } from "react";
import ModalC from "./ModalC";
import { Container } from "react-bootstrap";
import axios from "axios";
import HeadingButtonGroup from "./HeadingButtonGroup";
import FetchData from "./FetchData";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const ModalA = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [modalCOpen, setModalCOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState();
  const [singleData, setSingleData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const searchFilteredData = filteredData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(searchFilteredData);
    } else {
      setFilteredResults(filteredData);
    }
    // console.log(filteredResults);
  };

  const filteredData = isChecked
    ? contactData.filter((item) => item.id % 2 === 0)
    : contactData;

  useEffect(() => {
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
        // console.log(data);
      }
    };

    getAllContactData();
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="h-ninty-parcent overflow-y-scroll">
          <Container>
            <h1 className="text-center mb-6 text-emerald-400">Modal A</h1>

            <HeadingButtonGroup />
            <SearchBar searchItems={searchItems} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {filteredResults == "" ? (
                <FetchData
                  loading={loading}
                  filteredData={filteredData}
                  onsetModalCOpen={setModalCOpen}
                  onsetSingleData={setSingleData}
                />
              ) : (
                <FetchData
                  loading={loading}
                  filteredData={filteredResults}
                  onsetModalCOpen={setModalCOpen}
                  onsetSingleData={setSingleData}
                />
              )}

              <ModalC
                modalCOpen={modalCOpen}
                onSetModalCOpen={setModalCOpen}
                singleData={singleData}
              />
            </div>
          </Container>
        </div>

        <div className="flex-grow">
          <Container>
            <Footer
              isChecked={isChecked}
              handleCheckboxChange={handleCheckboxChange}
            />
          </Container>
        </div>
      </div>
    </>
  );
};

export default ModalA;
