import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'





function Chart() {
    const [chartData, setChartData] =useState({
        labels: ['Boxton', 'Wprosh', "Third City"],
        datasets: [{
            label: 'Population',
            data: [612,312,412],
            backgroundColor: [red, blue, green]
        }]
    })
  
    return (
    <div className="Chart">
        <Bar 
            data={chartData}
            // width={width}
            // height={width}
            options={{
                mainAspectRation: false,
                title: {
                    display: true,
                    text: "Chart Title",
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'right'
                },

            }} />
    </div>
  );
}

export default Chart;