import React, { useEffect, useState } from "react";
import { FiPackage } from "react-icons/fi";
import { packageServices } from "../ApiRoutes/Fetch";
import { PackageResponse } from "../ApiRoutes/FetchTypes/packageTypes";
import MainLayout from "../Components/Layouts/MainLayout";
import ItemModal from "../Components/Packages/ItemModal";
import PackageTable from "../Components/Packages/PackageTable";
import UserStores from "../Stores/UserStore";
import ItemStore from "../Stores/ItemStore";
import { Helmet } from "react-helmet";

const Dashboard: React.FC = () => {
  //STATES
  //show an specific item
  const [showItem, setShowItem] = useState<boolean>(false);
  //list of the items
  const [items, setItems] = useState<PackageResponse[]>([]);
  //loading state of the packages
  const [loaded, setLoaded] = useState<boolean>(false);

  //EFFECTS
  //initial effect to load the list
  useEffect(() => {
    const fetch = async () => {
      const res = await packageServices.getUserPackages(
        UserStores.getUser().username
      );
      if (res.success) {
        setItems(res.responseObject);
      }
      setLoaded(true);
    };
    fetch();
  }, []);

  //HANDLERS
  //Handler when click more info
  const handleMoreInfo = (
    e: React.MouseEvent<HTMLButtonElement>,
    p: PackageResponse
  ) => {
    ItemStore.addItem(p);
    setShowItem(true);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Courier | Dashboard</title>
      </Helmet>
      <ItemModal setShowModal={setShowItem} showModal={showItem} />
      <div className="relative">
        <div className="pt-10 flex gap-4 items-center w-11/12 mx-auto">
          <span className="text-6xl text-indigo-800">
            <FiPackage />
          </span>
          <span className="text-3xl text-gray-800 font-bold">Packages</span>
        </div>
        <div className="my-10 w-11/12 mx-auto">
          <PackageTable
            handleMoreInfo={handleMoreInfo}
            packages={items}
            loaded={loaded}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
