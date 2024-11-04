// src/components/InputForm.js
import React, { useState } from "react";

const InputForm = ({ addProcess, setAlgorithm, setTimeQuantum }) => {
  const [process, setProcess] = useState({
    id: "",
    arrival: "",
    burst: "",
    priority: "",
  });
  const [algorithm, setLocalAlgorithm] = useState("FCFS");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProcess({ ...process, [name]: value });
  };

  const handleAddProcess = () => {
    addProcess({
      ...process,
      arrival: parseInt(process.arrival),
      burst: parseInt(process.burst),
      priority: parseInt(process.priority),
    });
    setProcess({ id: "", arrival: "", burst: "", priority: "" });
  };

  const handleAlgorithmChange = (e) => {
    const value = e.target.value;
    setLocalAlgorithm(value);
    setAlgorithm(value);
  };

  return (
    <div className="p-4 ">
      <div className="flex items-center justify-center mb-5">
        <h1 className="font-bold text-[50px]">CPU Scheduler</h1>
      </div>
      <div className=" flex items-center justify-center">
        <input
          className="border p-2 m-2"
          name="id"
          placeholder="Process ID"
          value={process.id}
          onChange={handleChange}
        />
        <input
          className="border p-2 m-2"
          name="arrival"
          placeholder="Arrival Time"
          type="number"
          value={process.arrival}
          onChange={handleChange}
        />
        <input
          className="border p-2 m-2"
          name="burst"
          placeholder="Burst Time"
          type="number"
          value={process.burst}
          onChange={handleChange}
        />
        <input
          className="border p-2 m-2"
          name="priority"
          placeholder="Priority"
          type="number"
          value={process.priority}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white p-2 m-2"
          onClick={handleAddProcess}
        >
          Add Process
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-4 flex flex-col items-start text-xl ">
          <label className="p-2">
            <input
              type="radio"
              name="algorithm"
              value="FCFS"
              onChange={handleAlgorithmChange}
              checked={algorithm === "FCFS"}
            />
            FCFS
          </label>
          <label className="p-2">
            <input
              type="radio"
              name="algorithm"
              value="SJF"
              onChange={handleAlgorithmChange}
              checked={algorithm === "SJF"}
            />
            SJF
          </label>
          <label className="p-2">
            <input
              type="radio"
              name="algorithm"
              value="Priority"
              onChange={handleAlgorithmChange}
              checked={algorithm === "Priority"}
            />
            Priority
          </label>
          <label className="p-2">
            <input
              type="radio"
              name="algorithm"
              value="Round Robin"
              onChange={handleAlgorithmChange}
              checked={algorithm === "Round Robin"}
            />
            Round Robin
          </label>
        </div>

        {algorithm === "Round Robin" && (
          <input
            className="border p-2 m-2"
            name="timeQuantum"
            placeholder="Time Quantum"
            type="number"
            onChange={(e) => setTimeQuantum(parseInt(e.target.value))}
          />
        )}
      </div>
    </div>
  );
};

export default InputForm;
