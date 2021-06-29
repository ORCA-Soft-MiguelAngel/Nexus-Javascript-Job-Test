import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import box_img from "../../Images/item_box.svg";
import ItemStore from "../../Stores/ItemStore";

interface props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemModal: React.FC<props> = ({ showModal, setShowModal }) => {
  //GLOBAL STATES
  const { item } = ItemStore;

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
      setTimeout(() => {
        ItemStore.removeItem();
      }, 100);
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
          className="w-11/12 desktop-m:w-2/3 desktop-l:w-1/3 shadow-lg bg-white relative z-10 rounded-xl p-4 transition-all mx-auto"
          style={{
            opacity: `${showModal ? 1 : 0}`,
            transform: `${
              showModal ? "translateY(-15%)" : "translateY(-100%)"
            }`,
          }}
        >
          <div className="w-full flex justify-center items-center">
            <img src={box_img} alt="Item" className="w-1/3 desktop-m:w-36 desktop-l:w-56 mt-4 mb-8" />
          </div>
          {/**Table */}
          <div className="desktop-m:text-2xl">
            <div className="text-center font-semibold text-lg desktop-m:text-3xl">
              {item?.description}
            </div>
            <div className="mb-2 desktop-m:8">
              <b>Weight:</b> <span>{item?.weight}</span> Lbs
            </div>
            <div className="mb-2 desktop-m:8">
              <b>Balance:</b> <span>{item?.priceToPay}</span>
            </div>
            <div className="mb-2 desktop-m:8">
              <b>Supplier:</b> <span>{item?.supplier}</span>
            </div>
            <div className="mb-2 desktop-m:8">
              <b>Courier:</b> <span>{item?.courier}</span>
            </div>
            <div className="mb-2 desktop-m:8">
              <b>Courier Tracking:</b> <span>{item?.courierTracking}</span>
            </div>
            <div className="mb-2 desktop-m:8">
              <b>Internal Tracking:</b> <span>{item?.internalTracking}</span>
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
