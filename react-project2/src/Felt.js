import React, {useState, useEffect} from 'react';
import './App.css';
import papaparse from 'papaparse';
import CSVReader from 'react-csv-reader'


// const fetchCommissionReport = async (startDate, endDate) => {
//      const report = await fetch(
//       `https://reporting.feltapp.com/reports/design-commission-report?start_date=${startDate}&end_date=${endDate}`,
//       {
//         method: "GET",
//         headers: {
//           "accept-type": "application/json",
//           authorization:
//             "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjU5YWEyOWI4YzZlNDdiZjNhM2EwMGUzMiIsImlhdCI6MTU4MTU0NzI4NiwibmJmIjoxNTgxNTQ3Mjg2LCJleHAiOjE1ODY3MzEyODYsInN0YWdlIjoicHJvZCJ9.kYSGY5Ea8bBvpm-1LmUoeyDgL9aWH9RmBFT0klTkAhE"
//         }
//       }
//     ).then(resp => resp.json());
//     console.log(report)

//     Papa.parse(report,{
//       download: true,
//       complete: function(results) {
//         console.log('papa',results)
//       }
//     })
//     // return report
// };

// function App() {
//   const [startDate, setStartDate] = useState("2020-03-01")
//   const [endDate, setEndDate] = useState("2020-03-31")
//   // const [commissionReport, setCommissionReport]= useState()
  
//   useEffect(() => {
//     fetchCommissionReport(startDate,endDate).then(results=>console.log(results))
//   },[startDate,endDate])