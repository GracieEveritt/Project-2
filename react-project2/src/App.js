import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Body/Header'
import Main from './Body/Main'
import Footer from './Body/Footer'
import USMap from './Maps/USMap'

export const CovidDataContext = React.createContext()
  
function App() {
  const [covidUSData, setCovidUSData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const makeApiCall = async () => {
      
      const res = await fetch(
        "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key":
              "6aebfd9cf1mshf5ff7c3037601f8p1d234bjsndbb38607cd6d"
          }
        }
      );
      // console.log('res', res)
      const json = await res.json();
      // console.log("app-json", json);
     
      
      setCovidUSData(json.data.covid19Stats);
      setLastUpdated(json.data.lastChecked);
      setisLoading(false);
    };
    makeApiCall()
  }, []);
  // console.log("app-data", covidUSData);

  return (
    <div className="App">
      <Header lastUpdated={lastUpdated}/>
      <CovidDataContext.Provider value={covidUSData}>
        {!isLoading ? <Main /> : <p className="loading">Is Loading ...</p>}
      </CovidDataContext.Provider>
      <Footer />
    </div>
  );
}
export default App;