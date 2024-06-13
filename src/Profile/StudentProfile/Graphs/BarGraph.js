import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const StackedBarGraph = ({ data }) => {

    // const chartRef = useRef(null);

    // useEffect(() => {
    //     return () => {
    //         if (chartRef.current) {
    //             chartRef.current.destroy();
    //         }
    //     };
    // }, []);

    const options = {
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        }
    };

    return <Bar data={data} options={options} />;
};

export default StackedBarGraph;
