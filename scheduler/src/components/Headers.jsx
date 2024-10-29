import React, { useState } from "react";

export default function Headers() {
  const [algorithm, setAlgorithm] = useState("FCFS");
  return (
    <div>
      <div className="flex justify-center items-center text-white  t-0 w-screen h-32 ">
        <div className="font-bold text-5xl">CPU-Scheduling Visualizer</div>
      </div>
      <div className=" w-full flex justify-center text-white  items-center font-bold text-[35px]">
        SELECT ALGORITHM
      </div>

      <div className="flex justify-center items-center   w-screen h-[50px] mb-5">
        <div className=" w-100 h-50  flex flex-row gap-3  text-white font-bold text-[20px] ">
          <label>
            <input
              type="radio"
              name="algorithm"
              value="FCFS"
              checked={algorithm === "FCFS"}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="mr-1 "
            />
            FCFS
          </label>
          <label>
            <input
              type="radio"
              name="algorithm"
              value="SJF"
              checked={algorithm === "SJF"}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="mr-1"
            />
            SJF
          </label>
          <label>
            <input
              type="radio"
              name="algorithm"
              value="Priority"
              checked={algorithm === "Priority"}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="mr-1"
            />
            Priority
          </label>
          <label>
            <input
              type="radio"
              name="algorithm"
              value="RR"
              checked={algorithm === "RR"}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="mr-1"
            />
            Round Robin
          </label>
        </div>
      </div>
    </div>
  );
}
