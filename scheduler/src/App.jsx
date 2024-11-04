// src/App.js
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ProcessTable from "./components/ProcessTable";
import GanttChart from "./components/GanttChart";
import {
  calculateFCFS,
  calculateSJF,
  calculatePriority,
  calculateRoundRobin,
} from "./components/schedulingAlgorithms";

function App() {
  const [processes, setProcesses] = useState([]);
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [timeQuantum, setTimeQuantum] = useState(1); // Default time quantum for Round Robin
  const [results, setResults] = useState([]);
  const [ganttData, setGanttData] = useState([]);

  const addProcess = (process) => setProcesses([...processes, process]);

  const startScheduling = () => {
    let calculation;
    if (algorithm === "FCFS") calculation = calculateFCFS(processes);
    else if (algorithm === "SJF") calculation = calculateSJF(processes);
    else if (algorithm === "Priority")
      calculation = calculatePriority(processes);
    else if (algorithm === "Round Robin")
      calculation = calculateRoundRobin(processes, timeQuantum);

    setResults(calculation.results);
    setGanttData(calculation.ganttData);
  };

  return (
    <div className="App p-6">
      <InputForm
        addProcess={addProcess}
        setAlgorithm={setAlgorithm}
        setTimeQuantum={setTimeQuantum}
      />
      <button
        className="bg-green-500 text-white p-2 m-4"
        onClick={startScheduling}
      >
        Start
      </button>
      <ProcessTable processes={processes} results={results} />
      <GanttChart ganttData={ganttData} />
    </div>
  );
}

export default App;
