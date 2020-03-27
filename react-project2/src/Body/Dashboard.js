import React, {useContext, useState, useEffect} from 'react';
import {CovidDataContext} from '../App'
import {Link} from 'react-router-dom';



function Dashboard(props){
    const covidDataImport = useContext(CovidDataContext)
    // const [covidData, setCovidData] = useState(false)
    
    // useEffect(() => {
    //     const updateState = async () => {
    //         if() covidDataImport === true){
    //         console.log("dash - CDI true")}


    //     }
    //     // if(typeof covidDataImport === 'undefined'){
    //     //     console.log('Dash got undefined')
    //     // } else if(covidDataImport ===null){
    //     //     console.log("Dash Import null")
    //     // } else {console.log("Dash got data")}
    // })
    
    // useEffect(() => {
        
        // let dataToDisplay =  covidDataImport.map((city =>{
        //     console.log('data',city)
        //     return(
        //         <div className="City">
        //             <p>{city.province}</p>
        //         </div>
        //     )
        // }))
    

    // },)
    
    console.log('Dash - DataImport',covidDataImport)
    // console.log('Dash - covidData', covidData)
    // console.log('Dash - covid', props)

    const handleClick = () => {
        
        
        // let dataToDisplay = covidData.filter({city,index}) => {
        //     console.log(state)
        // }
    }

    
    
    return(
        <div className="Dashboard">
            <div className="Stats">
                <h6>Today is a new day.</h6>
                <button>US</button>
                <button>Global</button>
                
            </div>
            <div className="Graph">
                <p>GRAPH</p>
            </div>
            <div className="Stat-Boxes">
                <div className="Stat-Box Total-Cases">
                    <p>Total Cases</p>
                    <i onClick={handleClick} className="fas fa-angle-down"></i>
                    {/* {dataToDisplay} */}
                </div>
                <div className="Stat-Box Total-Recoveries">
                    <p>Total Recoveries</p>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="Stat-Box Total-Deaths">
                    <p>Total Deaths</p>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard