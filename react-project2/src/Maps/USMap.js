import React, {useContext,useState, useEffect} from 'react'
import USAMap from 'react-usa-map'
import {CovidDataContext} from '../App'
import stateIndex from './stateIndex'



function USMap () {
    const covidDataImport = useContext(CovidDataContext)
    // console.log('USMap-covidDataImport', covidDataImport)
   const [stateSelected, setStateSelected]= useState("")
   const [summaryMapData, setSummaryMapData] = useState("")
   const [viewSelected, setViewSelected] = useState("confirmed")

//This function creates a new covidData array, that bridges API data to Map settings and incorporates color to provide visualization
useEffect(() => {  
    const summaryMapData = (stateIndex, covidData) =>{
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
            state.confirmed = totalConfirmed
            
            switch(!totalConfirmed){
            case (totalConfirmed<100):
                state.confirmedStatus = "Low";
                state.confirmedFill = "#f4c6c7";
                break;
            case (totalConfirmed<=25000):
                state.confirmedStatus = "Alarming";
                state.confirmedFill = "#f98488";
                break;
            case (totalConfirmed>25000):
                state.confirmedStatus = "Hot Spot!";
                state.confirmedFill = "#ff0008";
                break;
            default:
                state.confirmedFill = "Unknown";
            }
            
            state.recovered = totalRecovered
            
            switch(!totalRecovered){
            case (((totalRecovered/totalConfirmed)*100)<0.05):
                state.recoveredStatus = "Too Low";
                state.recoveredFill = "#bbf7b7";
                break;
            case (((totalRecovered/totalConfirmed)*100)<=0.15):
                state.recoveredStatus = "Average";
                state.recoveredFill = "#89f981";
                break;
            case (((totalRecovered/totalConfirmed)*100)>0.15):
                state.recoveredStatus = "Above Average";
                state.recoveredFill = "#15fc05";
                break;
            default:
                state.recoveredFill = "Unknown";
            }
            
            state.deaths = totalDeaths
        
            switch(!totalDeaths){
            case (((totalDeaths/totalConfirmed)*100)<0.02):
                state.deathStatus = "Low";
                state.deathFill = "#a7a4f9";
                break;
            case (((totalDeaths/totalConfirmed)*100)<=0.05):
                state.deathStatus = "Average";
                state.deathFill = "#6762fc";
                break;
            case (((totalDeaths/totalConfirmed)*100)>0.05):
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
    summaryMapData(stateIndex, covidDataImport)
  }, []);
console.log('summaryData:',summaryMapData)

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

   const setMapColor = (viewSelected => {
        return (
<></>
        )

   })

    console.log('stateIndex:', stateIndex.stateSelected)
    let mapHandler = (event) => {
        console.log('mapHandler-event',event.target.dataset.name)
        let stateClicked = stateIndex[event.target.dataset.name]
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
    
        
    

        
        
        
        
    
        // return(
        //     <tbody>
        //     <tr>
        //        <th></th>
        //        <th>Total</th>
        //        <th>Rate</th>
        //        <th>Status</th>
        //        <th>% of US Total</th>
        //    </tr>
        //    <tr>
        //        <td>Cases:</td>
        //        <td>confirmedCases[event.target.dataset.name]</td>
        //        <td>2.0%</td>
        //        <td>2.0%</td>
        //        <td>2.0%</td>
        //    </tr>
        //    <tr>
        //        <td>Recoveries:</td>
        //        <td>500</td>
        //        <td>1.0%</td>
        //        <td>2.0%</td>
        //        <td>2.0%</td>
        //    </tr>
        //    <tr>
        //        <td>Deaths:</td>
        //        <td>3000</td>
        //        <td>0.01%</td>
        //        <td>2.0%</td>
        //        <td>2.0%</td>
        //    </tr>
        //    </tbody>
        // )
  
    // console.log('stateSelected after Click',stateSelected)
// console.log('test', stateIndex[0])
console.log('StateSelected',stateSelected)
    const statesCustomConfig = (summaryData, viewSelected) => {
        console.log('insideCustom - viewSelected', viewSelected)
        console.log('insideCustom- summaryData', summaryData)
        // for (i=0; i<summaryData.length; i++){
        //     console.log(summaryData[i])
        //     let color = `${viewSelected}Fill`
        //     return({
        //         hi : "hi"
        //         // summaryData[i].stateAbbrev : { fill : summaryData[i].color}            
        // })
    } 
    statesCustomConfig(summaryMapData, viewSelected)     
       
        // return({
        //     "TX":{
        //         fill: "#7b60e5",
        //         clickHandler: (event) => console.log('Custom handler for TX',event.target.dataset)
        //     },
        //     "AZ":{
        //         fill: "#0d05fc"
        //     },
        //     "OK":{
        //         fill: "#a48ff7"
        //     },
        //     "NM":{
        //         fill: "#6762fc"
        //     },
        //     "CO":{
        //         fill: "#a7a4f9"
        //     }

        // })
    
    return (
      
       <div className="USMap">
           <div className="Map-Buttons">
               <button className="Map-Cases-Button">Cases</button>
               <button className="Map-Recoveries-Button">Recoveries</button>
               <button className="Map-Deaths-Button">Deaths</button>
           </div>
           <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
           <div className="Map-State-Box">
               <h1>State Name</h1>
               <div>Status: Hot Zone</div>
               <table>
                <tbody>
                    <tr>
                        <th>{stateSelected}</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </tbody>
               </table>
           </div>

       </div>
      
    )


}

export default USMap