import React, { useState } from "react";
import MainLayout from "../Components/Layouts/MainLayout";
import ItemModal from "../Components/Packages/ItemModal";
import PackageTable from "../Components/Packages/PackageTable";
import { FiPackage } from "react-icons/fi";

const Dashboard: React.FC = () => {
  //STATES
  //show an specific item
  const [showItem, setShowItem] = useState<boolean>(false);

  //HANDLERS
  //Handler when click more info
  const handleMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowItem(true);
  };

  return (
    <MainLayout>
      <ItemModal setShowModal={setShowItem} showModal={showItem} />
      <div className="relative">
        <div className="pt-10 flex gap-4 items-center w-11/12 mx-auto">
          <span className="text-6xl text-indigo-800">
            <FiPackage />
          </span>
          <span className="text-3xl text-gray-800 font-bold">Packages</span>
        </div>
        <div className="mt-10 w-11/12 mx-auto">
          <PackageTable handleMoreInfo={handleMoreInfo} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
