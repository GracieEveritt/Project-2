import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2'





function Chart(props) {
    console.log('chart props', props)
    let totalCases = props.totalCases
    let totalRecoveries = props.totalRecoveries
    let totalDeaths = props.totalDeaths
    

    const chartData = {
        labels: ['Confirmed', 'Recovered', "Deaths"], //x axis
        datasets: [{
            labels: 'Population',
            data: [{totalCases},{totalRecoveries},{totalDeaths}], //y-axis
            backgroundColor: ['#37A9E9', '#7ED72D', '#E969F1'],
            hoverBackgroundColor: ['#892F99','#892F99','#892F99' ]
        }]
    }
  
    return (
    <div className="Chart">
        <HorizontalBar 
            data={chartData}
            // width={width}
            // height="100"
            options={{
                mainAspectRation: false,
                title: {
                    display: true,
                    text: "Current US Covid Statistics",
                    fontSize: 14,
                    fontColor: "white"
                },
                scales:{
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            // setpSize: 500,
                            // beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 10,
                            setpSize: 500,
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }}
        />
    </div>
  );
}

export default Chart;