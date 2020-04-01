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
    // console.log('Dash - covidData', covidDataImport)

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
    let totalRecoveryPercent = ((totalRecoveries/totalCases)*100).toFixed(2)
    let totalDeathsPercent = ((totalDeaths/totalCases)*100).toFixed(2)
    let totalCasesComma = (totalCases).toLocaleString({minimumFractionDigits:0})
    let totalRecoveriesComma = (totalRecoveries).toLocaleString({minimumFractionDigits:0})
    let totalDeathsComma = (totalDeaths).toLocaleString({minimumFractionDigits:0})

    
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
                        <p>Total Cases: &nbsp; {totalCases}</p>
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