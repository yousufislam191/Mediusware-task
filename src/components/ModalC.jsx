import React from "react";
import { Container } from "react-bootstrap";
import Modal from "react-modal";

const ModalC = ({ modalCOpen, onSetModalCOpen, singleData }) => {
  return (
    <>
      <Modal isOpen={modalCOpen} onRequestClose={() => setModalCOpen(false)}>
        <Container>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-center mb-6 text-emerald-400">Modal C</h1>
            <div className="my-4"></div>
            <button
              onClick={() => onSetModalCOpen(false)}
              className="border-[#46139f] border-2 font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>

          <div key={singleData?.id} className="text-center mt-20">
            <h3>Country : {singleData?.country?.name}</h3>
            <h5>Phone : {singleData?.phone}</h5>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default ModalC;
