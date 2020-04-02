import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Body/Header'
import Main from './Body/Main'
import Footer from './Body/Footer'
import USMap from './Maps/USMap'
import SideDrawer from './Body/SideDrawer'
import Backdrop from './Body/Backdrop'

export const CovidDataContext = React.createContext()
  
function App() {
  const [covidUSData, setCovidUSData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [sideDrawerOpen, setDrawer] = useState(false)

  useEffect(() => {
    const makeApiCall = async () => {
      console.log('fetch called')
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
      console.log('res', res)
      const json = await res.json();
      console.log("app-json", json);
     
      console.log('fetch complete')
      setCovidUSData(json.data.covid19Stats);
      setLastUpdated(json.data.lastChecked);
      setisLoading(false);
    };
    makeApiCall()
  }, []);
  
  console.log("app-data", covidUSData);

  const drawerToggleClickHandler = (prevState)=>{
    console.log("drawerToggleClicked", sideDrawerOpen)
    // setDrawer(!prevState.sideDrawerOpen)
    setDrawer((prevState)=>{return (setDrawer(!prevState.sideDrawerOpen))})
    setDrawer(!sideDrawerOpen)
    
  }
console.log('drawerToggle-outside', sideDrawerOpen)
  const backdropClickHandler = () => {
    setDrawer(false)
  }

   
  // backdropClickHandler={backdropClickHandler} show={sideDrawerOpen}

  // let sideDrawer;
  let backdrop;

  if(sideDrawerOpen){
    // sideDrawer = 
    backdrop =  <Backdrop click={backdropClickHandler}/>
    

    
  }

  return (
    <div className="App">
      <Header lastUpdated={lastUpdated} drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
     {/* {sideDrawer} */}
     
     {backdrop}
     
      <CovidDataContext.Provider value={covidUSData}>
        {!isLoading ? <Main /> : <p className="loading">Is Loading ...</p>}
      </CovidDataContext.Provider>
      <Footer />
    </div>
  );
}
export default App;