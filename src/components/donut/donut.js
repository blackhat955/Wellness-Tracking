import React from 'react';
import ApexCharts from 'react-apexcharts';

// function to generate values for calories burned and resting calories
function generatecalories(min, max) {
    let numbers = [];

    for (let i = 0; i < 2; i++) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(number);
    }

    return numbers;
}

const DoughNut = () => {
    const getChartOptions = () => {
        return {
            series: generatecalories(150, 300), // Series to include both Calories Burned and Resting Calories
            colors: ['#FF5733', '#FFC300'], // Update colors as needed
            chart: {
                height: 320,
                width: '100%',
                type: 'donut',
                toolbar: {
                    show: false // Hide chart toolbar
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontFamily: 'Inter, sans-serif',
                                offsetY: 20,
                            },
                            total: {
                                showAlways: true,
                                show: true,
                                label: 'Calories',
                                fontFamily: 'Inter, sans-serif',
                                formatter: function (w) {
                                    return w.globals.seriesTotals[0];
                                },
                            },
                            value: {
                                show: true,
                                fontFamily: 'Inter, sans-serif',
                                offsetY: -20,
                                formatter: function (value) {
                                    return value;
                                },
                            },
                        },
                        size: '80%',
                    },
                },
            },
            grid: {
                padding: {
                    top: -2,
                },
            },
            labels: ['Calories Burned', 'Resting Calories'], // Update labels
            legend: {
                position: 'bottom',
                fontFamily: 'Inter, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
        };
    };

    return (
        <div className="bg-white p-4 md:p-6 flex flex-col text-center">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Daily Progress</h5>
            <hr className="w-full bg-gray-300 dark:bg-gray-700 my-4" />
            <div className="py-6" id="donut-chart">
                <ApexCharts options={getChartOptions()} series={getChartOptions().series} type="donut" height={320} />
            </div>
        </div>
    );
};

export default DoughNut;
