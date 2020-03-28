import React, {useContext, useState, useEffect} from 'react';
import {CovidDataContext} from '../App'
import {Link} from 'react-router-dom';



function Dashboard(props){
    const covidDataImport = useContext(CovidDataContext)
    // const [covidData, setCovidData] = useState(false)
    
console.log('Dash - covidData', covidDataImport)

    const stateConfirmedCases = array => {
        let sumConfirmedCasesbyState = {}
        for(let i=0;i<array.length;i++){
            let state = covidDataImport[i].province
            if(sumConfirmedCasesbyState[state]){
                sumConfirmedCasesbyState[state] = sumConfirmedCasesbyState[state] += covidDataImport[i].confirmed
            }
            else{
                sumConfirmedCasesbyState[state]=covidDataImport[i].confirmed
            }
        }
        let sortedConfirmedCasesbyState=[]
        for(let key in sumConfirmedCasesbyState){
            sortedConfirmedCasesbyState.push([key,sumConfirmedCasesbyState[key]])
        }
        sortedConfirmedCasesbyState.sort(function(a,b){
            return b[1]-a[1]
        })
        return sortedConfirmedCasesbyState
    }

    console.log('dups algo final',stateConfirmedCases(covidDataImport))

    const handleClick = () => {
        // stateConfirmedCases(covidDataImport)
        
      
    }

    if(!covidDataImport) {
        return <div>Dashboard</div>
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
                    {/* {() => stateConfirmedCases(covidDataImport)} */}
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