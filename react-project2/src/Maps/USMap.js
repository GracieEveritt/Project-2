import React, {useContext,useState} from 'react'
import USAMap from 'react-usa-map'
import {CovidDataContext} from '../App'



function USMap () {
    const covidDataImport = useContext(CovidDataContext)
    // console.log('USMap-covidDataImport', covidDataImport)
   const [stateSelected, setStateSelected]= useState("")

   const list = {
    CA : "California",
}

console.log('list load',list)
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

    let confirmedCases=confirmedByState(covidDataImport)
    
    // console.log('confirmedCases-global', confirmedCases)
    
   console.log('list:', list.stateSelected)
    let mapHandler = (event) => {
        // console.log('mapHandler-event',event.target.dataset.name)
        let stateClicked = list[event.target.dataset.name]
        console.log('stateClicked with key',stateClicked)
        // console.log('mapHandler-event.name',setStateSelected())
        // alert(event.target.dataset.name)
        setStateSelected(stateClicked)
    }
    
    
    const dataSummary = () => {
       console.log('dataSummary called')
        let totalConfirmed=0
        let totalRecovered=0
        let totalDeaths=0
        covidDataImport.forEach(city =>{
            // console.log('inside forEach statement',city.province)
            if (city.province === stateSelected){
                totalConfirmed+=city.confirmed
                totalRecovered+=city.recovered
                totalDeaths+=city.deaths
            } 
           
        })
        console.log('total', totalConfirmed      )
        return  [stateSelected, totalConfirmed, totalRecovered,totalDeaths]

    }
    let answer = dataSummary()
    console.log('answer',answer)
    
        
    

        
        
        
        
    
        // return(
        //     <tbody>
        //     <tr>
        //        <th></th>
        //        <th>Total</th>
        //        <th>% to US</th>
        //    </tr>
        //    <tr>
        //        <td>Cases:</td>
        //        <td>confirmedCases[event.target.dataset.name]</td>
        //        <td>2.0%</td>
        //    </tr>
        //    <tr>
        //        <td>Recoveries:</td>
        //        <td>500</td>
        //        <td>1.0%</td>
        //    </tr>
        //    <tr>
        //        <td>Deaths:</td>
        //        <td>3000</td>
        //        <td>0.01%</td>
        //    </tr>
        //    </tbody>
        // )
  
    // console.log('stateSelected after Click',stateSelected)
   
console.log('StateSelected',stateSelected)
    const statesCustomConfig = () => {
        return({
            "TX":{
                
                clickHandler: (event) => console.log('Custom handler for TX',event.target.dataset)
            }
        })
    }
    return (
      
       <div className="USMap">
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