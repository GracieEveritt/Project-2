import React, {useContext, useState, useEffect} from 'react';
import {CovidDataContext} from '../App'
import {Link} from 'react-router-dom';
// import Chart from './Chart'
import {Bar, Line, Pie} from 'react-chartjs-2'


function Dashboard(props){
    const covidDataImport = useContext(CovidDataContext)
    const [clickOpen, setClickOpen] = useState(false)
    // const [tableView, setTableView] = ("")
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

    
    const handleClick = () => {
        console.log('clicked!')
        setClickOpen(true)
        // stateConfirmedCases(covidDataImport)
    }
    const handleClickClose = () => {
        console.log('clicked close!')
        setClickOpen(false)
        // stateConfirmedCases(covidDataImport)
    }

    console.log('clickOpen outside',clickOpen)
    const stateConfirmedCases = (array) => {
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
        let newTableView = sortedConfirmedCasesbyState.map((state, index) => {
            // console.log(state[0], state[1])
            return (
                <>
                    <div key={index} state={state} className="Each-State">
                        {state[0]}: &nbsp; {(state[1]).toLocaleString({minimumFractionDigits:0})} &nbsp; {((state[1]/totalCases)*100).toFixed(2)}%
                    
                    </div>
                </>
            )
        })
        return newTableView
    
    //    return (
    //         sortedConfirmedCasesbyState.map((state => {
    //         // console.log(state[0], state[1])
    //             return (
    //                 <>
    //                     <div state={state} className="Each-State">{state[0]}: &nbsp; {state[1]}</div>
    //                 </>
    //             )
    //         }))
    //    )
        // console.log('tableView',tableView)
       
    }
    let newView=stateConfirmedCases(covidDataImport)

    // const stateConfirmedCases = (array, filterType) => {
       
    //     console.log('insidestateCon-type',filterType)
    //     let sumConfirmedCasesbyState = {}
    //     for(let i=0;i<array.length;i++){
            
    //         let state = covidDataImport[i].province
            
    //         if(sumConfirmedCasesbyState[state]){
    //             sumConfirmedCasesbyState[state] = sumConfirmedCasesbyState[state] += covidDataImport[i].filterType
    //         }
    //         else{
    //             sumConfirmedCasesbyState[state]=covidDataImport[i].filterType
    //         }
    //     }
    //     let sortedConfirmedCasesbyState=[]
    //     for(let key in sumConfirmedCasesbyState){
    //         sortedConfirmedCasesbyState.push([key,sumConfirmedCasesbyState[key]])
    //     }
    //     sortedConfirmedCasesbyState.sort(function(a,b){
    //         return b[1]-a[1]
    //     })
    //     console.log(sortedConfirmedCasesbyState)
    //     return sortedConfirmedCasesbyState
    // }

    // console.log('dups algo final',sortedConfirmedCasesbyState)
    
    // const displayFilteredData = (typeOfData) => {
    //     let filterType = typeOfData
    //     stateConfirmedCases(covidDataImport,filterType)
    //        }
    
    // const recovered = () => displayFilteredData(filterType)
   

    

    if(!covidDataImport) {
        return <div>Dashboard</div>
    } else if(clickOpen){
        console.log('bottom click open true')
        return (
            <div className="State-Boxes">
                    <div className="State-Box Total-Cases" style={{position: "fixed", width: "100%"}}>
                        <p>Total Cases: &nbsp; {totalCasesComma}</p>
                        <i onClick={handleClickClose} className="fas fa-angle-up"></i>
                    </div>
                    <div className="List-Cases" >
                        {newView}
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
                <p>GRAPH</p>
                {/* <Chart /> */}
            </div>
            <div className="State-Boxes">
                <div className="State-Box Total-Cases">
                    <p>Total Cases: &nbsp; {totalCasesComma}</p>
                    <i onClick={handleClick} className="fas fa-angle-down"></i>
                        
                </div>
                <div className="State-Box Total-Recoveries">
                    <p>Total Recoveries: &nbsp; {totalRecoveriesComma} &nbsp; {totalRecoveryPercent}%</p>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="State-Box Total-Deaths">
                    <p>Total Deaths: &nbsp; {totalDeathsComma} &nbsp; {totalDeathsPercent}%</p>
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
        </div>
    )
}

export default Dashboard