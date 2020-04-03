import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Body/Header'
import Main from './Body/Main'
import Footer from './Body/Footer'
import SideDrawer from './Body/SideDrawer'
import Backdrop from './Body/Backdrop'
import testData from './testData'

export const CovidDataContext = React.createContext()
  
function App() {
  const [covidUSData, setCovidUSData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [sideDrawerOpen, setDrawer] = useState(false)

  //Use This if the API is Down
  // const [covidUSData, setCovidUSData] = useState(testData);
  // const [isLoading, setisLoading] = useState(false);

  //Comment out the useEffect if API is down
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
      const json = await res.json();
      console.log('API-Data', json)
      setCovidUSData(json.data.covid19Stats);
      setLastUpdated(json.data.lastChecked);
      setCovidUSData(testData)
      setisLoading(false);
    };
    makeApiCall()
  }, []);
  
  //The following creates animation for the Hamburger Menu
  const drawerToggleClickHandler = (prevState)=>{
    setDrawer((prevState)=>{return (setDrawer(!prevState.sideDrawerOpen))})
  }
  const backdropClickHandler = () => {
    setDrawer(false)
  }
  let backdrop;
  if(sideDrawerOpen){
    backdrop =  <Backdrop click={backdropClickHandler}/>
  }

  return (
    <div className="App">
        {/* Comment out first header - and use second, if API is out */}
        <Header lastUpdated={lastUpdated} drawerClickHandler={drawerToggleClickHandler} />
        {/* <Header drawerClickHandler={drawerToggleClickHandler} /> */}
        <SideDrawer show={sideDrawerOpen}/>
        {backdrop}
        <CovidDataContext.Provider value={covidUSData}>
          {!isLoading ? <Main /> : <p className="Loading">API is Fetching ...</p>}
        </CovidDataContext.Provider>
        <Footer />
    </div>
  );
}
export default App;