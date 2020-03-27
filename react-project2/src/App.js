import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import Header from './Body/Header'
import Main from './Body/Main'
import Footer from './Body/Footer'

export const CovidDataContext = createContext()
  
  function App() {
    const [covidUSData, setCovidUSData] = useState([])
    const [lastUpdated, setLastUpdated] = useState('')
    const [isLoading, setisLoading] = useState(true)

  

    useEffect(() => {
      
      const makeApiCall = async () => {
        
        const res = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "6aebfd9cf1mshf5ff7c3037601f8p1d234bjsndbb38607cd6d"
          }
        });
        const json = await res.json();
        
        console.log('app-json',json)
        setCovidUSData(json.data.covid19Stats)
        setLastUpdated(json.data.lastChecked)
        setisLoading(false)
      };
      makeApiCall().catch(e=>{console.log('Fetch error:', e.message)});
    }, []);

    console.log('app-data',covidUSData)
    // console.log('app-res',lastUpdated)
    if (isLoading){
      return <div>isLoading</div>
    }
  return (
    <div className="App">
      <Header />
      <Main />
      <CovidDataContext.Provider value={covidUSData}>
        {/* <Main /> */}
        {!isLoading ? <Main /> : <p className="loading">Is Loading ...</p>}
      </CovidDataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;


