import React from "react";
import { PackageResponse } from "../../ApiRoutes/FetchTypes/packageTypes";

interface props {
  handleMoreInfo: (
    e: React.MouseEvent<HTMLButtonElement>,
    p: PackageResponse
  ) => void;
  packages: PackageResponse[];
  loaded: boolean;
}

const PackageTable: React.FC<props> = ({
  handleMoreInfo,
  packages,
  loaded,
}) => {
  return (
    <table className="w-full">
      <thead className="justify-between text-sm desktop-s:text-lg">
        <tr className="bg-gray-800">
          <th className="px-4 desktop-s:px-6 py-2">
            <span className="text-gray-300">Description</span>
          </th>
          <th className="hidden desktop-m:table-cell px-6 py-2">
            <span className="text-gray-300">Supplier</span>
          </th>
          <th className="px-6 py-2 hidden desktop-m:table-cell">
            <span className="text-gray-300">Courier</span>
          </th>
          <th className="px-2 desktop-s:px-6 py-2">
            <span className="text-gray-300">Weight</span>
          </th>
          <th className="px-2 desktop-s:px-6 py-2">
            <span className="text-gray-300">Balance</span>
          </th>

          <th className="px-2 desktop-s:px-6 py-2">
            <span className="text-gray-300"></span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200 text-sm desktop-s:text-lg">
        {loaded ? (
          packages.length > 0 ? (
            packages.map((pkg, i) => (
              <tr
                key={`item-${i + 1}`}
                className="bg-white border-b-2 border-gray-400"
              >
                <td className="py-2 text-center">
                  <b>{pkg.description}</b>
                </td>
                <td className="hidden desktop-m:table-cell text-center">
                  {pkg.supplier}
                </td>
                <td className="hidden desktop-m:table-cell text-center">
                  {pkg.courier}
                </td>
                <td className="text-center">
                  <span>{pkg.weight}</span> Lbs
                </td>
                <td className="text-center">
                  <b>{pkg.priceToPay}</b>
                </td>
                <td className="text-center py-2">
                  <button
                    onClick={(e) => handleMoreInfo(e, pkg)}
                    className="text-blue-800 font-semibold px-4 py-2 border rounded-md hover:bg-black transition-all hover:text-white "
                  >
                    Info
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="h-12 text-lg text-gray-500 text-center"
              >
                There are no pending packages.
              </td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan={6} className="h-12 text-lg text-gray-500 text-center">
              Loading Packages...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PackageTable;
