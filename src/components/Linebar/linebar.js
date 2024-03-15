import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Import the styles

const LineBar = () => {
  const [selectedOption, setSelectedOption] = useState('Last 7 days');
  const options = ['Last 7 days', 'Last 30 days', 'Last 90 days'];

  const getCategories = (selectedOption) => {
    switch (selectedOption) {
      case 'Last 30 days':
        return Array.from({ length: 6 }, (_, i) => `${30 - 5 * i} Days Ago`);
      case 'Last 90 days':
        return Array.from({ length: 6 }, (_, i) => `${90 - 15 * i} Days Ago`);
      case 'Last 7 days':
      default:
        return Array.from({ length: 7 }, (_, i) => `${7 - i} Days Ago`);
    }
  };

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area',
      height: '100%',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: getCategories(selectedOption),
      labels: {
        show: true,
      },
    },
    yaxis: {
      title: {
        text: 'Calories Burnt',
      },
    },
  });

  const getDummyData = (selectedOption) => {
    switch (selectedOption) {
      case 'Last 30 days':
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000));
      case 'Last 90 days':
        return Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000));
      case 'Last 7 days':
      default:
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000));
    }
  };

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Calories Burnt',
      data: getDummyData(selectedOption),
      color: '#FF9900', // Change color here
    },
  ]);

  const handleOptionChange = (option) => {
    setSelectedOption(option.value);
  };

  const defaultOption = { value: selectedOption, label: selectedOption };

  
  useEffect(() => {
    const categories = getCategories(selectedOption);
    const dummyData = getDummyData(selectedOption);
    setChartOptions({
      ...chartOptions,
      xaxis: {
        ...chartOptions.xaxis,
        categories,
      },
    });
    setChartSeries([
      {
        name: 'Calories Burnt',
        data: dummyData,
        color: '#FF9900', // Change color here
      },
    ]);
  }, [selectedOption]);

  return (
    <div className="max-w-screen-xl mx-auto bg-white rounded-lg dark:bg-gray-800 p-4 md:p-6 text-left shadow">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white p-5">Calories Burn Track day Wise</h5>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <Dropdown
            options={options}
            onChange={handleOptionChange}
            value={selectedOption}
            placeholder="Select an option"
          />
        </div>
      </div>
      <hr className="my-4 border-gray-300 dark:border-gray-700" style={{width:'100vw'}} /> {/* Horizontal line */}
      <ApexCharts options={chartOptions} series={chartSeries} type="area" height={350} />
    </div>
  );
};

export default LineBar;
