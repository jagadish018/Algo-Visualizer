// src/components/GanttChart.js
import React from "react";

const GanttChart = ({ ganttData }) => {
  // Define a set of colors to use for different processes
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#FFC300",
    "#DAF7A6",
    "#C70039",
    "#900C3F",
    "#581845",
    "#FFC0CB",
  ];

  // Helper function to get a color based on process ID
  const getColor = (processId) => {
    const index =
      parseInt(processId.replace(/[^0-9]/g, ""), 10) % colors.length;
    return colors[index];
  };

  // Fixed width for each block (adjust as necessary)
  const blockWidth = 100; // Width of each block in pixels

  return (
    
    <div className="flex space-x-2 p-4 border mt-5 items-center justify-center">
      {ganttData.map((block, index) => {
        // Calculate completed percentage
        const completedPercentage = (block.duration / block.burstTime) * 100;

        return (
          <div
            key={index}
            className="relative overflow-hidden"
            style={{ width: `${blockWidth}px`, height: "40px" }}
          >
            {/* Background of the block */}
            <div
              className="h-full transition-all duration-500 ease-in-out"
              style={{
                width: `${completedPercentage}%`,
                backgroundColor: getColor(block.processId),
              }}
            ></div>
            {/* Displaying process ID and time range */}
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
              {block.processId} ({block.start} - {block.end})
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default GanttChart;
