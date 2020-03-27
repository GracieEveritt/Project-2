import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import Header from './Body/Header'
import Main from './Body/Main'
import Footer from './Body/Footer'

export const CovidDataContext = createContext()
  
  function App() {
    const [covidData, setCovidData] = useState([])
    const [lastUpdated, setLastUpdated] = useState('')

    // useEffect(() => {
      
    //   const makeApiCall = async () => {
    //     const res = await fetch("https://pomber.github.io/covid19/timeseries.json");
    //     const json = await res.json();
    //     console.log('Price - json', json);
        
    //   };
    //   makeApiCall();
    // }, []);

    useEffect(() => {
      
      const makeApiCall = async () => {
        const res = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "6aebfd9cf1mshf5ff7c3037601f8p1d234bjsndbb38607cd6d"
          }
        });
        const json = await res.json();
        setCovidData(json.covid19Stats)
        setLastUpdated(json.lastChecked)
        
        
      };
      makeApiCall();
      console.log('LastUpdate', lastUpdated);
        console.log('Data', covidData);
    }, []);

  return (
    <div className="App">
      <Header />
      <CovidDataContext.Provider value={covidData}>
        <Main />
      </CovidDataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;


