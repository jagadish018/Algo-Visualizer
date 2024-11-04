// src/components/ProcessTable.js
import React from "react";

const ProcessTable = ({ processes, results }) => {
  return (
    <table className="min-w-full table-auto ">
      <thead>
        <tr className="text-xl  ">
          <th className="px-4 py-2">Process ID</th>
          <th className="px-4 py-2">Arrival Time</th>
          <th className="px-4 py-2">Burst Time</th>
          <th className="px-4 py-2">Priority</th>
          <th className="px-4 py-2">Waiting Time</th>
          <th className="px-4 py-2">Turnaround Time</th>
        </tr>
      </thead>
      <tbody>
        {processes.map((process, index) => (
          <tr key={index} className="text-center">
            <td className="border px-4 py-2">{process.id}</td>
            <td className="border px-4 py-2">{process.arrival}</td>
            <td className="border px-4 py-2">{process.burst}</td>
            <td className="border px-4 py-2">{process.priority}</td>
            <td className="border px-4 py-2">{results[index]?.waitingTime}</td>
            <td className="border px-4 py-2">
              {results[index]?.turnaroundTime}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProcessTable;
