import React, {useContext,useState, useEffect} from 'react'
import USAMap from 'react-usa-map'
import {CovidDataContext} from '../App'
import stateIndex from './stateIndex'
import functionStateData from './StateData'
import './USMap.css'


function USMap () {
   const covidDataImport = useContext(CovidDataContext)
   const [stateSelected, setStateSelected]= useState("CO")
   const [summaryMapData, setSummaryMapData] = useState([])
   const [viewSelected, setViewSelected] = useState("confirmed")

    //This function bridges API data with Map; compiles API data by State; calculates further analysis by State 
    useEffect(() => {
        let summaryByState = functionStateData(stateIndex,covidDataImport)
        console.log('summaryMap before' )
        setSummaryMapData(summaryByState)
        console.log('summaryMap after' )
    }, [covidDataImport]);
// console.log('summary', summaryByState)
    //This function returns which State user clicked on the Map 
    let mapHandler = (event) => {
        let stateClicked = event.target.dataset.name
        setStateSelected(stateClicked)
    }

    //This filters summaryMapData down to state selected by user
    const stateToDisplay = summaryMapData.filter((state, index) =>{
        return state.stateAbbrev === stateSelected;
    })
    
    //This function provides the Map what color to fill each by state
    const statesCustomConfig = () =>{
        let obj = {}
        summaryMapData.map((state) => {
            let stateData = {fill : state[`${viewSelected}Fill`]} 
            obj[state.stateAbbrev] = stateData
            return obj
        })
        return obj
    }
   
    //This function determines which Map view user wants to see
    const handleButtonClick = (view) => {
        setViewSelected(view)
    }

    //This condition prevents the Component's Return from erroring when it attempts to return data from empty summaryMapData
    if(summaryMapData.length<1){return(<div>Is Loading....</div>)}

    return (
        
       <div className="USMap">
           <div className="Map-Buttons">
               <button className="Map-Button Map-Cases-Button" onClick={()=>handleButtonClick('confirmed')}>Cases</button>
               <button className="Map-Button Map-Recoveries-Button" onClick={()=>handleButtonClick('recovered')}>Recoveries</button>
               <button className="Map-Button Map-Deaths-Button" onClick={()=>handleButtonClick('death')}>Deaths</button>
           </div>
           <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
           <div className="Map-State-Box"> 
                <div className="Map-State-Box-Header">
                <h1>State: &nbsp; {stateToDisplay[0].stateName}</h1>
                <div>{stateToDisplay[0].confirmedStatus}</div>
                <div>{stateToDisplay[0].deathStatus} Fatalities</div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="Total">Total</th>
                            <th className="Rate">Rate</th>
                            <th className="Percent">% US Total</th>
                            <th className="Rank">US Ranking</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cases:</td>
                            <td className="Total">{stateToDisplay[0].confirmed}</td>
                            <td className="Rate"></td>
                            <td className="Percent"> 2.0%</td>
                            <td className="Rank">#5</td>
                        </tr>
                        <tr>
                            <td>Recoveries:</td>
                            <td className="Total">{stateToDisplay[0].recovered}</td>
                            <td className="Rate">{stateToDisplay[0].recoveryRate}%</td>
                            <td className="Percent">2.0%</td>
                            <td className="Rank">#4</td>
                        </tr>
                        <tr className="Deaths">
                            <td>Deaths:</td>
                            <td className="Total">{stateToDisplay[0].deaths}</td>
                            <td className="Rate"> {stateToDisplay[0].deathRate}%</td>
                            <td className="Percent">2.0%</td>
                            <td className="Rank">#3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
    )
}

export default USMap