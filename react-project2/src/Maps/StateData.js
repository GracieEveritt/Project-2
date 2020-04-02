

const functionStateData = (stateIndex, covidData) =>{
    let summaryByState = []
    stateIndex.map((state, index) =>{
        let totalConfirmed = 0
        let totalRecovered = 0
        let totalDeaths = 0

        //This reduces over 3000 API city by State (down to 59 states/territories)
        covidData.forEach(city => {
        let stateKey = Object.keys(state).find(key => state[key] === city.province)
        if (state[stateKey] === city.province){
            totalConfirmed+=city.confirmed
            totalRecovered+=city.recovered
            totalDeaths+=city.deaths
        };

        //The following sets object propeties and values for relevant data
        state.stateAbbrev = Object.keys(state).find(key => state[key] )
        state.stateName = state[state.stateAbbrev]
        state.confirmed = totalConfirmed.toLocaleString({minimumFractionDigits:0})
        
        //The following calculates rates and sets Status and Colors based on current data
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
                    state.confirmedStatus = "Growing: More than 5,000 Cases";
                    state.confirmedFill = "#FC8EAC";
                    break;
        case (totalConfirmed<10000):
                state.confirmedStatus = "Thriving - More than 10,000 Cases";
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
        
        state.recovered = totalRecovered.toLocaleString({minimumFractionDigits:0})
        
        switch(true){
        case (((totalRecovered/totalConfirmed)*100)<0.05):
            state.recoveryRate = ((totalRecovered/totalConfirmed)*100).toFixed(1)
            state.recoveredStatus = "Too Low";
            state.recoveredFill = "#bbf7b7";
            break;
        case (((totalRecovered/totalConfirmed)*100)<=0.15):
            state.recoveryRate = ((totalRecovered/totalConfirmed)*100).toFixed(1)    
        state.recoveredStatus = "Average";
            state.recoveredFill = "#89f981";
            break;
        case (((totalRecovered/totalConfirmed)*100)>0.15):
            state.recoveryRate = ((totalRecovered/totalConfirmed)*100).toFixed(1)
            state.recoveredStatus = "Above Average";
            state.recoveredFill = "#15fc05";
            break;
        default:
            state.recoveredFill = "Unknown";
        }
        
        state.deaths = totalDeaths.toLocaleString({minimumFractionDigits:0})
    
        switch(true){
        case (((totalDeaths/totalConfirmed)*100)<2):
            state.deathRate = ((totalDeaths/totalConfirmed)*100).toFixed(1)
            state.deathStatus = "Low";
            state.deathFill = "#a7a4f9";
            break;
        case (((totalDeaths/totalConfirmed)*100)<=5):
            state.deathRate = ((totalDeaths/totalConfirmed)*100).toFixed(1)
            state.deathStatus = "Average";
            state.deathFill = "#6762fc";
            break;
        case (((totalDeaths/totalConfirmed)*100)>5):
            state.deathRate = ((totalDeaths/totalConfirmed)*100).toFixed(1)
            state.deathStatus = "High!";
            state.deathFill = "#ad05fc";
            break;
        default:
            state.deathFill = "Unknown";
        }
        })
        return summaryByState.push(state)
    })
    //Here, I update the state variable - so that this new array is available for other functions
    return summaryByState
}

export default functionStateData