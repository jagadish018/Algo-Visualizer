// src/utils/schedulingAlgorithms.js

// Helper function to sort processes by arrival time
const sortByArrivalTime = (processes) => {
  return [...processes].sort((a, b) => a.arrival - b.arrival);
};

// Helper function to create a Gantt chart entry
const createGanttEntry = (processId, start, duration) => ({
  processId,
  start,
  end: start + duration,
  duration,
});

export const calculateFCFS = (processes) => {
  const sortedProcesses = sortByArrivalTime(processes);
  let currentTime = 0;
  const results = [];
  const ganttData = [];

  sortedProcesses.forEach((process) => {
    const start = Math.max(currentTime, process.arrival);
    const waitingTime = start - process.arrival;
    const turnaroundTime = waitingTime + process.burst;

    results.push({
      waitingTime,
      turnaroundTime,
    });

    ganttData.push(createGanttEntry(process.id, start, process.burst));

    currentTime = start + process.burst;
  });

  return { results, ganttData };
};

export const calculateSJF = (processes) => {
  let currentTime = 0;
  const results = [];
  const ganttData = [];
  const completed = [];
  let remainingProcesses = [...processes];

  while (remainingProcesses.length > 0) {
    const availableProcesses = remainingProcesses.filter(
      (p) => p.arrival <= currentTime
    );

    if (availableProcesses.length === 0) {
      currentTime++;
      continue;
    }

    availableProcesses.sort((a, b) => a.burst - b.burst);
    const process = availableProcesses[0];

    const start = currentTime;
    const waitingTime = start - process.arrival;
    const turnaroundTime = waitingTime + process.burst;

    results.push({
      waitingTime,
      turnaroundTime,
    });

    ganttData.push(createGanttEntry(process.id, start, process.burst));

    currentTime = start + process.burst;
    completed.push(process);
    remainingProcesses = remainingProcesses.filter((p) => p.id !== process.id);
  }

  return { results, ganttData };
};

export const calculatePriority = (processes) => {
  let currentTime = 0;
  const results = [];
  const ganttData = [];
  const completed = [];
  let remainingProcesses = [...processes];

  while (remainingProcesses.length > 0) {
    const availableProcesses = remainingProcesses.filter(
      (p) => p.arrival <= currentTime
    );

    if (availableProcesses.length === 0) {
      currentTime++;
      continue;
    }

    availableProcesses.sort((a, b) => a.priority - b.priority);
    const process = availableProcesses[0];

    const start = currentTime;
    const waitingTime = start - process.arrival;
    const turnaroundTime = waitingTime + process.burst;

    results.push({
      waitingTime,
      turnaroundTime,
    });

    ganttData.push(createGanttEntry(process.id, start, process.burst));

    currentTime = start + process.burst;
    completed.push(process);
    remainingProcesses = remainingProcesses.filter((p) => p.id !== process.id);
  }

  return { results, ganttData };
};

export const calculateRoundRobin = (processes, timeQuantum) => {
  let currentTime = 0;
  const results = processes.map(() => ({
    waitingTime: 0,
    turnaroundTime: 0,
  }));
  const ganttData = [];

  const queue = [];
  let remainingBurstTime = processes.map((p) => p.burst);
  let remainingProcesses = [...processes];
  let index = 0;

  while (remainingProcesses.length > 0 || queue.length > 0) {
    if (
      remainingProcesses.length > 0 &&
      remainingProcesses[0].arrival <= currentTime
    ) {
      queue.push(index);
      index++;
      remainingProcesses.shift();
    }

    if (queue.length === 0) {
      currentTime++;
      continue;
    }

    const currentIndex = queue.shift();
    const process = processes[currentIndex];
    const burstTime = Math.min(timeQuantum, remainingBurstTime[currentIndex]);

    ganttData.push(createGanttEntry(process.id, currentTime, burstTime));

    currentTime += burstTime;
    remainingBurstTime[currentIndex] -= burstTime;

    if (remainingBurstTime[currentIndex] === 0) {
      const turnaroundTime = currentTime - process.arrival;
      const waitingTime = turnaroundTime - process.burst;

      results[currentIndex] = { waitingTime, turnaroundTime };
    } else {
      queue.push(currentIndex);
    }
  }

  return { results, ganttData };
};
