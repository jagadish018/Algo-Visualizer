import React from "react";

export default function InputForm() {
  return (
    <>
      <div className=" flex items-center justify-center flex-col ">
        <div className="flex gap-5 mb-5">
          <input
            type="number"
            placeholder="Arrival Time"
            className="w-full sm:w-auto px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <input
            type="number"
            placeholder="Burst Time"
            className="w-full sm:w-auto px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex gap-2">
          <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            Add Process
          </button>
          <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            remove Process
          </button>
              </div>
              <table>
                  <th>
                      <td></td>
                  </th>
              </table>
      </div>
    </>
  );
}
