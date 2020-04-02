import React from 'react';
import {HorizontalBar, defaults} from 'react-chartjs-2'


defaults.global.defaultFontFamily = "Montserrat"
defaults.global.defaultFontColor = "white"
defaults.global.defaultFontWeight = "500"


function Chart(props) {
    

    const chartData = {
        labels: ['Cases', 'Recvrd', "Deaths"], //x axis
        datasets: [{
            // labels: 'Population',
            data: [props.totalCases,props.totalRecoveries,props.totalDeaths], //y-axis
           
            backgroundColor: ['#37A9E9', '#7ED72D', '#E969F1'],
            hoverBackgroundColor: ['#892F99','#892F99','#892F99' ]
        }]
    }
  
    return (
    <div className="Chart">
        <HorizontalBar 
            data={chartData}
            // width={width}
            height={150}
            options={{
                mainAspectRation: false,
                legend:{
                    labels: {
                        fontColor: "white",
                        
                    }
                },
                // title: {
                //     display: true,
                //     text: "Current US Covid Statistics",
                //     fontSize: 14,
                //     fontColor: "white"
                // },
                scales:{
                    yAxes: [{
                        
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            fontweight: "500"
                            // setpSize: 500,
                            // beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            offset: false,
                            fontColor: "white",
                            fontSize: 10,
                            fontweight: "500",
                            // setpSize: 500,
                            beginAtZero: false,
                           
                            
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