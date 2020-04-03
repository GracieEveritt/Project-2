import React from 'react';

const sortedStates = (array, totalType, totalCases) => 
{
    let stateAggregate = {}
    for(let i=0;i<array.length;i++){
        let state = array[i].province
        if(stateAggregate[state]){
            stateAggregate[state] = stateAggregate[state] += array[i][totalType]
        }
        else{
            stateAggregate[state]=array[i][totalType]
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
    let newTableView = sortedStates.map((state, index) => {
        return (
            <tr key={index} state={state} className="Each-State">
                <td className="TD-State">{state[0]}:</td>
                <td className="TD-Count">{(state[1]).toLocaleString({minimumFractionDigits:0})}</td>
                <td className="TD-Percent">{((state[1]/totalCases)*100).toFixed(2)}%</td>
            </tr>   
         )
        })
    return newTableView
}

export default sortedStates