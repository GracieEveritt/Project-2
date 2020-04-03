import React from 'react';
import {HorizontalBar, defaults} from 'react-chartjs-2'
import Media from 'react-media'


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
         <Media queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1023px)",
          large: "(min-width: 1024px)"
        }}>
          {matches => (
              <>
                {matches.small && <HorizontalBar 
            data={chartData}
            height={150}
            options={{
                mainAspectRation: false,
                legend:{
                    labels: {
                        fontColor: "white",
                    }
                },
                scales:{
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            fontweight: "500"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            offset: false,
                            fontColor: "white",
                            fontSize: 10,
                            fontweight: "500",
                            beginAtZero: false,
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }}
        />}

        

                {matches.medium && <HorizontalBar 
            data={chartData}
            height={75}
            options={{
                mainAspectRation: false,
                legend:{
                    labels: {
                        fontColor: "white",
                    }
                },
                scales:{
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            fontweight: "500"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            offset: false,
                            fontColor: "white",
                            fontSize: 10,
                            fontweight: "500",
                            beginAtZero: false,
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }}
        />}
                {matches.large && <HorizontalBar 
            data={chartData}
            height={75}
            options={{
                mainAspectRation: false,
                legend:{
                    labels: {
                        fontColor: "white",
                    }
                },
                scales:{
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 12,
                            fontweight: "500"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            offset: false,
                            fontColor: "white",
                            fontSize: 10,
                            fontweight: "500",
                            beginAtZero: false,
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }}
        />}




            </>
          )}
          </Media>
    </div>
  );
}

export default Chart;