import React, {useContext, useState} from 'react';
import {CovidDataContext} from '../App'
// import {Link} from 'react-router-dom';
import Chart from './Chart'



function Dashboard(props){
    const covidDataImport = useContext(CovidDataContext)
    
    
    const [clickOpen, setClickOpen] = useState(false)
    const [tableView, setTableView] = useState([])
    // console.log('Dash - covidData', covidDataImport)

    const totalConfirmed = (array) => {
        let totalCases = 0
        for(let i=0;i<array.length;i++){
            totalCases += covidDataImport[i].confirmed
        }
       return (totalCases)
    }
    const totalRecovered = (array) => {
        let totalRecoveries = 0
        for(let i=0;i<array.length;i++){
            totalRecoveries += covidDataImport[i].recovered
        }
       return (totalRecoveries)
    }
    const totalDead = (array) => {
        let totalDeaths = 0
        for(let i=0;i<array.length;i++){
            totalDeaths += covidDataImport[i].deaths
        }
       return (totalDeaths)
    }
    let totalCases = totalConfirmed(covidDataImport)
    let totalRecoveries= totalRecovered(covidDataImport)
    let totalRecoveryPercent = ((totalRecoveries/totalCases)*100).toFixed(2)
    let totalDeaths = totalDead(covidDataImport)
    let totalDeathsPercent = ((totalDeaths/totalCases)*100).toFixed(2)
    let totalCasesComma = (totalConfirmed(covidDataImport)).toLocaleString({minimumFractionDigits:0})
    let totalRecoveriesComma = (totalRecovered(covidDataImport)).toLocaleString({minimumFractionDigits:0})
    let totalDeathsComma = (totalDead(covidDataImport)).toLocaleString({minimumFractionDigits:0})

    
    const handleClick = (caseType) => {
        
        console.log('clicked!', caseType)
        setClickOpen(true)
        let newTableView = stateConfirmedCases(covidDataImport,caseType)
        console.log('handleClick-newTV', newTableView)
        setTableView(newTableView)
    }
    const handleClickClose = () => {
        console.log('clicked close!')
        setClickOpen(false)
        // stateConfirmedCases(covidDataImport)
    }

    
    const stateConfirmedCases = (array, caseType) => {
        let sumConfirmedCasesbyState = {}
        console.log('insideFunction', caseType)
        for(let i=0;i<array.length;i++){
            let state = covidDataImport[i].province
            if(sumConfirmedCasesbyState[state]){
                sumConfirmedCasesbyState[state] = sumConfirmedCasesbyState[state] += covidDataImport[i][caseType]
            }
            else{
                sumConfirmedCasesbyState[state]=covidDataImport[i][caseType]
            }
        }
        console.log('sumConfirmedByState',sumConfirmedCasesbyState )
        let sortedConfirmedCasesbyState=[]
        for(let key in sumConfirmedCasesbyState){
            sortedConfirmedCasesbyState.push([key,sumConfirmedCasesbyState[key]])
        }
        sortedConfirmedCasesbyState.sort(function(a,b){
            return b[1]-a[1]
        })
        console.log("app", sortedConfirmedCasesbyState)
        let newTableView = sortedConfirmedCasesbyState.map((state, index) => {
            // console.log('state',state)
            return (
                <>
                    <div key={index} state={state} className="Each-State">
                        {state[0]}: &nbsp; {(state[1]).toLocaleString({minimumFractionDigits:0})} &nbsp; {((state[1]/totalCases)*100).toFixed(2)}%
                    
                    </div>
                </>
            )
        })
       
        return newTableView
      }
   let newView=stateConfirmedCases(covidDataImport,'confirmed')

   //Alternative Dashboard Views
    if(!covidDataImport) {
        return <div>Dashboard</div>
    } else if(clickOpen){
        console.log('bottom click open true')
        return (
            <div className="State-Boxes">
                    <div className="State-Box Total-Cases" style={{position: "fixed", width: "100%"}}>
                        <p>Total Cases: &nbsp; {totalConfirmed(covidDataImport)}</p>
                        <i onClick={handleClickClose} className="fas fa-angle-up"></i>
                    </div>
                    <div className="List-Cases" >
                        {tableView}
                    </div>
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
                    <i onClick={()=>handleClick('confirmed')} className="fas fa-angle-down"></i>
                        
                </div>
                <div className="State-Box Total-Recoveries">
                    <p>Total Recoveries: &nbsp; {totalRecoveriesComma} &nbsp; {totalRecoveryPercent}%</p>
                    <i onClick={()=>handleClick('recovered')} className="fas fa-angle-down"></i>
                </div>
                <div className="State-Box Total-Deaths">
                    <p>Total Deaths: &nbsp; {totalDeathsComma} &nbsp; {totalDeathsPercent}%</p>
                    <i onClick={()=>handleClick('deaths')} className="fas fa-angle-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Dashboard