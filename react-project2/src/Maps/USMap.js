import React, {useContext,useState, useEffect} from 'react'
import USAMap from 'react-usa-map'
import {CovidDataContext} from '../App'
import stateIndex from './stateIndex'


function USMap () {
   const covidDataImport = useContext(CovidDataContext)
   
   const [stateSelected, setStateSelected]= useState("CO")
   const [summaryMapData, setSummaryMapData] = useState([])
   const [viewSelected, setViewSelected] = useState("confirmed")

//This function creates a new covidData array, that bridges API data to Map settings and incorporates color to provide visualization
useEffect(() => {
    const functionMapData = (stateIndex, covidData) =>{
        let summaryByState = []
        stateIndex.map((state, index) =>{
            let totalConfirmed = 0
            let totalRecovered = 0
            let totalDeaths = 0
            
            covidData.forEach(city => {
            let stateKey = Object.keys(state).find(key => state[key] === city.province)
            if (state[stateKey] === city.province){
                totalConfirmed+=city.confirmed
                totalRecovered+=city.recovered
                totalDeaths+=city.deaths
            };
            
            state.stateAbbrev = Object.keys(state).find(key => state[key] === state[key])
            state.stateName = state[state.stateAbbrev]
            state.confirmed = totalConfirmed
            
            switch(true){
            case (totalConfirmed<200):
                state.confirmedStatus = "Very Low - Less than 200 Cases";
                state.confirmedFill = "#FFD1DC";
                break;
            case (totalConfirmed<1000):
                    state.confirmedStatus = "Low - Less than 1,000 Cases";
                    state.confirmedFill = "#FFB7C5";
                    break;
            case (totalConfirmed<5000):
                        state.confirmedStatus = "More than 5,000 Cases";
                        state.confirmedFill = "#FC8EAC";
                        break;
            case (totalConfirmed<5000):
                    state.confirmedStatus = "Growing - More than 10,000 Cases";
                    state.confirmedFill = "#E75480";
                    break;
            case (totalConfirmed<=25000):
                state.confirmedStatus = "Hot Spot! More than 10,000 Cases ";
                state.confirmedFill = "#DE3163";
                break;
            case (totalConfirmed>25000):
                state.confirmedStatus = "TOO HOT! More than 25,000 Cases";
                state.confirmedFill = "#B22222";
                break;
            default:
                state.confirmedFill = "Unknown";
            }
            
            state.recovered = totalRecovered
            
            switch(!totalRecovered){
            case (((totalRecovered/totalConfirmed)*100)<0.05):
                state.recoveryRate = ((totalRecovered/totalConfirmed)*100).toFixed(2)
                state.recoveredStatus = "Too Low";
                state.recoveredFill = "#bbf7b7";
                break;
            case (((totalRecovered/totalConfirmed)*100)<=0.15):
                state.recoveryRate = ((totalRecovered/totalConfirmed)*100).toFixed(2)    
            state.recoveredStatus = "Average";
                state.recoveredFill = "#89f981";
                break;
            case (((totalRecovered/totalConfirmed)*100)>0.15):
                state.recoveryRate = ((totalRecovered/totalConfirmed)*100).toFixed(2)
                state.recoveredStatus = "Above Average";
                state.recoveredFill = "#15fc05";
                break;
            default:
                state.recoveredFill = "Unknown";
            }
            
            state.deaths = totalDeaths
        
            switch(!totalDeaths){
            case (((totalDeaths/totalConfirmed)*100)<0.02):
                state.deathRate = ((totalDeaths/totalConfirmed)*100).toFixed(2)
                state.deathStatus = "Low";
                state.deathFill = "#a7a4f9";
                break;
            case (((totalDeaths/totalConfirmed)*100)<=0.05):
                state.deathRate = ((totalDeaths/totalConfirmed)*100).toFixed(2)
                state.deathStatus = "Average";
                state.deathFill = "#6762fc";
                break;
            case (((totalDeaths/totalConfirmed)*100)>0.05):
                state.deathRate = ((totalDeaths/totalConfirmed)*100).toFixed(2)
                state.deathStatus = "High!";
                state.deathFill = "#ad05fc";
                break;
            default:
                state.deathFill = "Unknown";
            }
            })
            summaryByState.push(state)
        })
            setSummaryMapData(summaryByState)
            // return summaryByState
    }
    functionMapData(stateIndex,covidDataImport)
}, []);




const stateToDisplay = summaryMapData.filter((state, index) =>{
    // console.log('inside stateTD', state, state.stateAbbrev)
    return state.stateAbbrev === stateSelected;
    //
})
    console.log('stateToDisplay', stateToDisplay, stateSelected)
    



//Don't Think I need this function confirmedByState
    const confirmedByState = (array) => {
        let confirmedCases = {}
       
        for(let i=0;i<array.length;i++){
            let state = covidDataImport[i].province
            if(confirmedCases[state]){
                confirmedCases[state] = confirmedCases[state] += covidDataImport[i].confirmed
            }
            else{
                confirmedCases[state]=covidDataImport[i].confirmed
            }
        }
        return confirmedCases
    }
// let confirmedCases=confirmedByState(covidDataImport)
    // console.log('confirmedCases-global', confirmedCases)
    
   
   const onPageLoad = () => {
        //show cases button highlighted
        //show red map
        //state box is filled with defaultState for stateSelected


   }


    // console.log('stateIndex:', stateIndex.stateSelected)
    let mapHandler = (event) => {
        console.log('mapHandler-event',event.target.dataset.name)
        let stateClicked = event.target.dataset.name
        console.log('stateClicked with key',stateClicked)
        // console.log('mapHandler-event.name',setStateSelected())
        // alert(event.target.dataset.name)
        setStateSelected(stateClicked)
    }
    
    //This provides State specific Data
    const dataSummary = () => {
       console.log('dataSummary called')
        let totalConfirmed=0
        let totalRecovered=0
        let totalDeaths=0
        let stateAbreviation 
        // let stateAbreviation = function (object,value){
        //     return {key: Object.keys(stateIndex).find(key => stateIndex[key] === value)}
        // }
        covidDataImport.forEach(city =>{
            // console.log('inside forEach statement',city.province)
            
            if (city.province === stateSelected){
                totalConfirmed+=city.confirmed
                totalRecovered+=city.recovered
                totalDeaths+=city.deaths
            } 
           
        })
        console.log('total', totalConfirmed      )
        return  [{

                
                confirmed: {totalConfirmed}, 
                recovered: {totalRecovered},
                deaths:{totalDeaths}
            }]

    
        
    }
    // let answer = dataSummary()
    // console.log('answer',answer)
    
        
    

        
        
        
        
    
        
  
    // console.log('stateSelected after Click',stateSelected)
// console.log('test', stateIndex[0])



console.log('my summaryData', summaryMapData)

 //this function is how the Map wanted me to communicate this (similar to your Map)

    const statesCustomConfig = () =>{
        let obj = {}
        summaryMapData.map((state) => {

            let stateData = {fill : state[`${viewSelected}Fill`]} 
            obj[state.stateAbbrev] = stateData
         })
         console.log('obj', obj)
        return obj
    }
   
    if(summaryMapData.length<1){return(<div>Is Loading....</div>)}

    return (
        
       <div className="USMap">
           <div className="Map-Buttons">
               <button className="Map-Cases-Button">Cases</button>
               <button className="Map-Recoveries-Button">Recoveries</button>
               <button className="Map-Deaths-Button">Deaths</button>
           </div>
           <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
           
           <div className="Map-State-Box"> 
                <h1>State: {stateToDisplay[0].stateName}</h1>
                <div>Status: {stateToDisplay[0][`${viewSelected}Status`]}</div>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Total</th>
                            <th>Rate</th>
                            <th>Status</th>
                            <th>% of US Total</th>
                            <th>US Ranking</th>
                        </tr>
                        <tr>
                            <td>Cases:</td>
                            <td>{stateToDisplay[0].confirmed}</td>
                            <td></td>
                            <td>{stateToDisplay[0].confirmedStatus}</td>
                            <td>2.0%</td>
                            <td>#5</td>
                        </tr>
                        <tr>
                            <td>Recoveries:</td>
                            <td>{stateToDisplay[0].recovered}</td>
                            <td>{stateToDisplay[0].recoveryRate}%</td>
                            <td>{stateToDisplay[0].recoveredStatus}</td>
                            <td>2.0%</td>
                            <td>#4</td>
                        </tr>
                        <tr>
                            <td>Deaths:</td>
                            <td>{stateToDisplay[0].deaths}</td>
                            <td>{stateToDisplay[0].deathRate}%</td>
                            <td>{stateToDisplay[0].deathStatus}</td>
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