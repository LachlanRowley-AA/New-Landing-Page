// page.js this is the entry point of application

"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  options: {
    indexAxis: 'y'
  },
  datasets: [
    {
      label: 'GeeksforGeeks Bar Chart',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const LineChart = () => {
  return (
    <div style={{ width: '700px', height: '700px' }}>
      <h1>Total Interest Paid in Paid Out Early</h1>
      <Bar data={data} options={{'indexAxis': 'y'}} />
    </div>
  );
};
export default LineChart;