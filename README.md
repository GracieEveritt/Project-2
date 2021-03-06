## Project Links
-GitHub Repo: (https://github.com/GracieEveritt/Project-2)  
-Deployment Link: (https://reverent-khorana-95304e.netlify.com/)  
-YouTube Video: (https://www.youtube.com/watch?v=_xKtZczZ0K4&feature=youtu.be) 

## Project Description
Build a website from API using React.js & to have fun. I chose to build an analytics site for Coronavirus because it is a scary reality for us all. After reviewing other developer's approach to present this same data, I think mine will be unique. Currently, no one has done a dashboard for the US. This dashboard If I have extra time, it would be nice to impelement news as well. 
## API Reference
- Source 1 - by country: Coronavirus confirmed cases, deaths, and recovered cases and every day since Jan 22, 2020.  
(https://github.com/pomber/covid19)  
- Source 2 - by city & country (can filter by country):
      const res = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "6aebfd9cf1mshf5ff7c3037601f8p1d234bjsndbb38607cd6d"
          }
        });
- Source 3: fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "6aebfd9cf1mshf5ff7c3037601f8p1d234bjsndbb38607cd6d"
	}
})
- [x] Why this API: it's relevant -- many ways to filter data and visually display into separate components
- [x] Code Snippet
```
0:{8 items
    "city":"Abbeville"
    "province":"South Carolina"
    "country":"US"
    "lastUpdate":"2020-04-02 23:25:27"
    "keyId":"Abbeville, South Carolina, US"
    "confirmed":6
    "deaths":0
    "recovered":0
}
1:{8 items
    "city":"Acadia"
    "province":"Louisiana"
    "country":"US"
    "lastUpdate":"2020-04-02 23:25:27"
    "keyId":"Acadia, Louisiana, US"
    "confirmed":61
    "deaths":1
    "recovered":0
}
```
## Wireframes & Architecture
- [ x ] [Website Mockups](https://sites.google.com/d/19Pk9x_USmmxNsxOsnGnEKIR9pXDpeCU3/p/19FEgCYl4kPCmdwe99BCl3SDkFi9hbUru/edit)
- [ x ] [Link to React architecture design](https://docs.google.com/drawings/d/1XntDDW8hJCY4R8sH3TrVLrT_LvlQC0ubv8m9bCkMJ1k/edit?usp=sharing)  
[BackUp to Website Mockup](https://sites.google.com/d/19Pk9x_USmmxNsxOsnGnEKIR9pXDpeCU3/p/1tN8Q63U37-90S-Koy_pe_bJAZNwUrnhp/edit)  
[BackUP to Architecture](https://docs.google.com/drawings/d/1XntDDW8hJCY4R8sH3TrVLrT_LvlQC0ubv8m9bCkMJ1k/edit)
## Requirements - Build Status
#### MVP Requirements
**To DO** | **In Progress** | **Done**
------------|-------------------|-----------  
|  |  | Project Description 
|  |  | Project Proposal 
|  |  | Prof ReadMe 
|  |  | Wireframes 
|  |  | Architecture 
|  |  | Built using Create-React-App  
|  |  | Return Data from API  
| | | 5+ Components 
 | |  | React Router (2+ routes)
 |  |  | Mobile First
 | |  | Responsive Design
 |  |  | React Hooks
 | |  | Code Clean-Up
 | |  | Deployed via Netlify
#### Post-MVP Requirements
**To DO** | **In Progress** | **Done**
------------|-------------------|-----------  
|  | | Home - Overall (total, recovery, death) - leaders
 |  |  | Last Updated - UTC to EST
Interactive Map - World (hot zone colors) - click to indiv country | |  
 | |  | Interactive Map - USA (hot zone colors) - click to indiv state
Interactive Map 2nd View: Most Progressive Death Regions - World | |  
 | |  | Interactive Map 2nd View: Most Progressive Death Regions - US | |  
| |  | Interactive Map 3nd View: Best Recovery Regions - US 
Individual country page - statistics over time (cases, recovery, death) | |  
 | |  | Indivivual state page (cases, recovery, death)
 | | | Contact Me Page 
Hover for Map | Preview data for Country/State | |    
  
## Components
Component | Description | Estimated Time | Target Finish Date 
----------|-------------|----------------|-------------------
Dashboard | Summary Stats | 1 day | Fri, March 27
Interactive US Map (1 view) | Depth color indicate hot zones| 1 day | Weekend
Responsiveness | Move & zoom map for mobile - adapt desktop | 1 day | Mon, March 30
Interactive US Map (2 views) | Depth for 2 other views| 1/2 day | Tues, March 31
State Page(s) | Statistics for indivdual states | 1/2 day | Tues, March 31
Nav/Footer/Contact | Finish Nav/Footer/Final CSS | 1 day | Wed, April 1
World Interaction | Input same for World | 1/2 day | Thurs, April 2
Publish & Finalize | Publish site & finalize documentation | 1/2 day | Thurs, April 2
## TimeLine - expect total project (56 hours)
Date | Task | Time Estimate | Time Invested | Actual Time (56 hours)
-----|------|---------------|---------------|------------
Wed, Mar 25 | ReadMe Basic Build | 1 hours | 1 hr 15 min | 1 hr 15 min
Wed, Mar 25 | Project Description | 10 min | 10 min | 10 min
Wed, Mar 25 | GitHub & VS SetUP | 1 hour | 1 hour | 1 hour
Wed, Mar 25 | Research API & Return Data | 2 hours | 2 hours| 2 hours
Thurs, Mar 26 | Final API Research & Ideas | 1 hour | 1 hour | 1 hour
Thurs, Mar 26 | Update ReadMe | 1 hour | 1 hour | 1 hour
Thurs, Mar 26 | Wireframes & Architecture | 2 hours | 2 hours | 2 hours
Fri, Mar 27 | isLoading | 1 hour | 1 hour | 1 hour
Fri, Mar 27 | Building Mobile Dashboard | 8 hours | 2 hours | 2 hours
Fri, Mar 27 | Dashboard Build - Data Sort | 2 hours | 2 hours | 2 hours
Fri, Mar 27 | Dashboard API inport debug | 3 hours | 3 hours | 3 hours
Sat, Mar 28 | Dashboard Functionality | 4 hours | 4 hours | 4 hours
Sun, Mar 29 | Added Chart | 2 hours | 2 hours | 2 hours
Mon, Mar 30 | Incorporated Map | 7 hours | 7 hours | 7 hours
Tue, Mar 31 | Refactor Code & Functionality | 8 hours | 8 hours | 8 hours
Wed, Apr 1 | Refactor Code & Functionality | 8 hours | 8 hours | 8 hours
Thu, Apr 2 | Responsive | 8 hours | 8 hours | 8 hours
Fri, Apr 3 | Video & Publish | 2 hours | 2 hours | 2 hours
## Credits/Additional Libraries
1. US Map: https://www.npmjs.com/package/react-usa-map
2. Map Zoom-Pan: https://www.react-simple-maps.io/examples/zoom-pan/
3. World Map: https://www.npmjs.com/package/react-world-map
4. ChartJS: https://www.chartjs.org/docs/latest/charts/bar.html#general
5. React-Media: https://github.com/ReactTraining/react-media