import React, {useContext,useState, useEffect} from 'react'
import USAMap from 'react-usa-map'
import {CovidDataContext} from '../App'
import stateIndex from './stateIndex'
import functionStateData from './StateData'


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
    }, []);

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
               <button className="Map-Cases-Button" onClick={()=>handleButtonClick('confirmed')}>Cases</button>
               <button className="Map-Recoveries-Button" onClick={()=>handleButtonClick('recovered')}>Recoveries</button>
               <button className="Map-Deaths-Button" onClick={()=>handleButtonClick('death')}>Deaths</button>
           </div>
           <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
           <div className="Map-State-Box"> 
                <h1>State: {stateToDisplay[0].stateName}</h1>
                <div>{stateToDisplay[0].confirmedStatus}</div>
                <div>{stateToDisplay[0].deathStatus} Fatalities</div>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Total</th>
                            <th>Rate</th>
                            <th>% of US Total</th>
                            <th>US Ranking</th>
                        </tr>
                        <tr>
                            <td>Cases:</td>
                            <td>{stateToDisplay[0].confirmed}</td>
                            <td></td>
                            <td>2.0%</td>
                            <td>#5</td>
                        </tr>
                        <tr>
                            <td>Recoveries:</td>
                            <td>{stateToDisplay[0].recovered}</td>
                            <td>{stateToDisplay[0].recoveryRate}%</td>
                            <td>2.0%</td>
                            <td>#4</td>
                        </tr>
                        <tr>
                            <td>Deaths:</td>
                            <td>{stateToDisplay[0].deaths}</td>
                            <td>{stateToDisplay[0].deathRate}%</td>
                            <td>2.0%</td>
                            <td>#3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
    )
}

export default USMap