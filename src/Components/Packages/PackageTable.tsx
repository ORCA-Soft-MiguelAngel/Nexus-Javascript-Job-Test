import React from "react";

interface props {
  handleMoreInfo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PackageTable: React.FC<props> = ({ handleMoreInfo }) => {
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
        <tr className="bg-white border-b-2 border-gray-400">
          <td className="py-2 text-center">
            <b>Television 32 pulgadas</b>
          </td>
          <td className="hidden desktop-m:table-cell text-center">Amazon</td>
          <td className="hidden desktop-m:table-cell text-center">USPS</td>
          <td className="text-center">30.0 Lbs</td>
          <td className="text-center">
            <b>2154.2</b>
          </td>
          <td className="text-center py-2">
            <button
              onClick={(e) => handleMoreInfo(e)}
              className="text-blue-800 font-semibold px-4 py-2 border rounded-md hover:bg-black transition-all hover:text-white "
            >
              <span className="hidden desktop-m:block">More</span> Info
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PackageTable;
