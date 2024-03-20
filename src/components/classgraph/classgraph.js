import React from 'react';
import ApexCharts from 'react-apexcharts';

// function to generate random numbers for attendance in each class 
function generateNumbers(total, numNumbers) {
    let numbers = [];

    for (let i = 0; i < numNumbers - 1; i++) {
        let number = Math.floor(Math.random() * (total - numbers.reduce((a, b) => a + b, 0) - (numNumbers - numbers.length - 1))) + 1;
        numbers.push(number);
    }

    numbers.push(total - numbers.reduce((a, b) => a + b, 0));

    return numbers;
}

const ClassesGraph = () => {

    
    const getChartOptions = () => {
        return {
            series: generateNumbers(100, 4), // Generate values based on the attendance for each class
            colors: ["#FF5733", "#FFC300", "#16A085", "#3498DB"], // Custom colors
            chart: {
                height: 420,
                width: "100%",
                type: "pie",
                toolbar: {
                    show: false // Hide chart toolbar
                }
            },
            labels: ["Cardio", "Yoga", "Zumba", "Boxing"], // Update class labels
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
                formatter: function (value) {
                    return value + "%";
                },
            },
        };
    };

    const chartOptions = getChartOptions();

    return (
        <div className="bg-white p-4 md:p-6 flex flex-col text-center">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">User Appointment</h5>
            <hr className="w-full bg-gray-300 dark:bg-gray-700 my-4" />
            <div className="py-6" id="pie-chart">
                <ApexCharts options={chartOptions} series={chartOptions.series} type="pie" height={320} />
            </div>
        </div>
    );
};

export default ClassesGraph;
