import React, { LegacyRef, MutableRefObject, useEffect, useRef } from "react";
import box_img from "../../Images/item_box.svg";
import { FaTimes } from "react-icons/fa";
import { nodeModuleNameResolver } from "typescript";

interface props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemModal: React.FC<props> = ({ showModal, setShowModal }) => {
  //EFFECTS
  //Initial effect to listen outside clicks
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleCloseModal);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  //REFS
  const node = useRef<any | undefined>(null);

  //HANDLERS
  const handleCloseModal = (e: any) => {
    if (node && node.current && !node.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <>
      {/**Background */}
      <div
        className="w-full h-screen fixed flex justify-center items-center"
        style={{
          background: `rgba(0, 0, 0,${showModal ? "0.8" : 0})`,
          transition: "all 0.1s ease-in-out",
          opacity: `${showModal ? 1 : 0}`,
          zIndex: showModal ? 1024 : -1,
        }}
      >
        {/**ModalWrapper */}
        <div
          ref={node}
          className="w-11/12 shadow-lg bg-white relative z-10 rounded-xl p-4 transition-all mx-auto"
          style={{
            opacity: `${showModal ? 1 : 0}`,
            transform: `${
              showModal ? "translateY(-15%)" : "translateY(-100%)"
            }`,
          }}
        >
          <div className="w-full flex justify-center items-center">
            <img src={box_img} alt="Item" className="w-1/3 mt-4 mb-8" />
          </div>
          {/**Table */}
          <div>
            <div className="text-center font-semibold mb-2 text-lg">
              Television 32 pulgadas
            </div>
            <div className="mb-2">
              <b>Weight:</b> <span>30.0 Lbs</span>
            </div>
            <div className="mb-2">
              <b>Balance:</b> <span>2154.2</span>
            </div>
            <div className="mb-2">
              <b>Supplier:</b> <span>Amazon</span>
            </div>
            <div className="mb-2">
              <b>Courier:</b> <span>USPS</span>
            </div>
            <div className="mb-2">
              <b>Courier Tracking:</b> <span>USPS123456789</span>
            </div>
            <div className="mb-2">
              <b>Internal Tracking:</b> <span>NX-U123456789</span>
            </div>
          </div>
          {/**Close Btn */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute right-1 top-1 text-red-600 cursor-pointer transition-all hover:text-gray-700 text-lg"
          >
            <FaTimes title={"Close"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
