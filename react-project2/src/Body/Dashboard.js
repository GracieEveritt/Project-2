import React, {useContext, useState, useEffect} from 'react';
import {CovidDataContext} from '../App'
// import {Link} from 'react-router-dom';
import Chart from './Chart'



function Dashboard(props){
    const covidDataImport = useContext(CovidDataContext)
    
    const [totalCases, setTotalCases] = useState(0)
    const [totalRecoveries, setTotalRecoveries] = useState(0)
    const [totalDeaths, setTotalDeaths] = useState(0)
    const [clickOpen, setClickOpen] = useState(false)
    const [tableView, setTableView] = useState([])
    const [viewRequest, setViewRequest] = useState("")
  
    //This function reduces API objects down to overall USA totals
    useEffect(() => {
        const setTotals = (array) => {
            let totalCases = 0
            let totalRecoveries = 0
            let totalDeaths = 0
            for(let i=0;i<array.length;i++){
                totalCases += covidDataImport[i].confirmed
                totalRecoveries += covidDataImport[i].recovered
                totalDeaths += covidDataImport[i].deaths
            }
            setTotalCases(totalCases)
            setTotalRecoveries(totalRecoveries)
            setTotalDeaths(totalDeaths)
        }
        setTotals(covidDataImport)
    }, []);

    //The following formats values
    let totalRecoveryPercent = ((totalRecoveries/totalCases)*100).toFixed(2)
    let totalDeathsPercent = ((totalDeaths/totalCases)*100).toFixed(2)
    let totalCasesComma = (totalCases).toLocaleString({minimumFractionDigits:0})
    let totalRecoveriesComma = (totalRecoveries).toLocaleString({minimumFractionDigits:0})
    let totalDeathsComma = (totalDeaths).toLocaleString({minimumFractionDigits:0})
    

    //These functions dictate what happens when user clicks up/down arrow for more information
    const handleDownArrowClick = (totalType) => {
        setClickOpen(true)
        sortedStates(covidDataImport,totalType)
        let viewRequsted = totalType.charAt(0).toUpperCase()+totalType.slice(1)
        setViewRequest(viewRequsted)
    }
    console.log('viewRequest', viewRequest)
    const handleUpArrowClick = () => {
        setClickOpen(false)
    }

    //This function filters by paramater totalType, reduces API objects by State, sorts and calculates analytics
    const sortedStates = (array, totalType) => {
        let stateAggregate = {}
        for(let i=0;i<array.length;i++){
            let state = covidDataImport[i].province
            if(stateAggregate[state]){
                stateAggregate[state] = stateAggregate[state] += covidDataImport[i][totalType]
            }
            else{
                stateAggregate[state]=covidDataImport[i][totalType]
            }
        }
        let sortedStates=[]
        for(let key in stateAggregate){
            sortedStates.push([key,stateAggregate[key]])
        }
        sortedStates.sort(function(a,b){
            return b[1]-a[1]
        })
        console.log('sorted', sortedStates)
        let totalNumber = 0
        console.log('viewRequest',viewRequest)
        if(totalType === "confirmed"){
            totalNumber+=totalCases
        }else if(totalType === "recovered"){
            totalNumber+=totalRecoveries
        }else if(totalType === "deaths"){
            totalNumber+=totalDeaths
        }
        console.log('totalNumber',totalNumber)
        let newTableView = sortedStates.map((state, index) => {
            return (
                <tr key={index} state={state} className="Each-State">
                    <td>{state[0]}:</td>
                    <td>{(state[1]).toLocaleString({minimumFractionDigits:0})}</td>
                    <td>{((state[1]/totalNumber)*100).toFixed(2)}%</td>
                </tr>   
             )
        })
        setTableView(newTableView)
      }

   //Alternative Dashboard Views
    if(!covidDataImport) {
        return <div>Dashboard</div>
    } else if(clickOpen){
        let totalNumber = 0
        if(viewRequest === "Confirmed"){
            totalNumber=totalCasesComma
        }else if(viewRequest === "Recovered"){
            totalNumber=totalRecoveriesComma
        }else if(viewRequest === "Deaths"){
            totalNumber=totalDeathsComma
        }

        return (
            <div className="State-Boxes">
                <div className="State-Box Total-Cases" style={{position: "fixed", width: "100%"}}>
                    <p>Total {viewRequest}: &nbsp; {totalNumber} </p>
                    <i onClick={handleUpArrowClick} className="fas fa-angle-up"></i>
                </div>
                <table className="List-Cases" >
                    <tbody>
                        <tr>
                            <th>State</th>
                            <th>Count</th>
                            <th>% of Total</th>
                        </tr>
                        {tableView}
                    </tbody>
                </table>
            </div>
        )
    }
    
    return(
        <div className="Dashboard">
            <div className="Stats">
                <h6>Today is a new day.</h6>
                <button>US</button>
                <button>Global</button>
                
            </div>
            <div className="Graph">
                <Chart totalCases={totalCases} totalDeaths={totalDeaths} totalRecoveries={totalRecoveries} />
            </div>
            <div className="State-Boxes">
                <div className="State-Box Total-Cases">
                    <p>Total Cases: &nbsp; {totalCasesComma}</p>
                    <i onClick={()=>handleDownArrowClick('confirmed')} className="fas fa-angle-down"></i>
                        
                </div>
                <div className="State-Box Total-Recoveries">
                    <p>Total Recoveries: &nbsp; {totalRecoveriesComma} &nbsp; {totalRecoveryPercent}%</p>
                    <i onClick={()=>handleDownArrowClick('recovered')} className="fas fa-angle-down"></i>
                </div>
                <div className="State-Box Total-Deaths">
                    <p>Total Deaths: &nbsp; {totalDeathsComma} &nbsp; {totalDeathsPercent}%</p>
                    <i onClick={()=>handleDownArrowClick('deaths')} className="fas fa-angle-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Dashboard