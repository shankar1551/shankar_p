import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// The REST API endpoint
const API_URL = 'http://192.168.3.111:8000/attendance/half_leave_yesterday';



function App() {
  
const [employee, setEmployee] = useState([

                                    [
                    {
                      "employee_id": 13,
                      "user_name": "manisha",
                      "punch_in_utc_time": "2024-05-24T17:58:58",
                      "punch_out_utc_time": "2024-05-24T17:58:58",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 16,
                      "user_name": "Nitish",
                      "punch_in_utc_time": "2024-05-24T16:41:00",
                      "punch_out_utc_time": "2024-05-24T16:41:00",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 33,
                      "user_name": "Tank.p",
                      "punch_in_utc_time": "2024-05-24T09:40:29",
                      "punch_out_utc_time": "2024-05-24T13:37:51",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 30,
                      "user_name": "Simran",
                      "punch_in_utc_time": "2024-05-24T09:41:29",
                      "punch_out_utc_time": "2024-05-24T13:38:28",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 3,
                      "user_name": "amrit",
                      "punch_in_utc_time": "2024-05-24T09:40:25",
                      "punch_out_utc_time": "2024-05-24T13:37:42",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 8,
                      "user_name": "Dinesh",
                      "punch_in_utc_time": "2024-05-24T09:40:34",
                      "punch_out_utc_time": "2024-05-24T13:37:56",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 31,
                      "user_name": "Sumair",
                      "punch_in_utc_time": "2024-05-24T17:52:24",
                      "punch_out_utc_time": "2024-05-24T17:52:24",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 21,
                      "user_name": "Raju Khadgi",
                      "punch_in_utc_time": "2024-05-24T09:51:53",
                      "punch_out_utc_time": "2024-05-24T09:51:53",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 18,
                      "user_name": "Preetina",
                      "punch_in_utc_time": "2024-05-24T17:58:52",
                      "punch_out_utc_time": "2024-05-24T17:58:52",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    },
                    {
                      "employee_id": 34,
                      "user_name": "Tejashwi",
                      "punch_in_utc_time": "2024-05-24T10:39:22",
                      "punch_out_utc_time": "2024-05-24T17:51:41",
                      "status": "Half Leave",
                      "punch_in_note": "Device login"
                    }
                  ]


                                  ]);



  // Function to fetch data from the API
  // const fetchData = async () => {
  //   const  data  = await axios.get(API_URL);
  //   // setPosts(data);
  //   console.log(data);
  // };

  // Trigger fetchData after the initial render
  useEffect(() => {
    // fetchData();
    console.log(employee);
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        
        <p>
              HEllo This is api fetching testings
        </p>

        {employee[0].map((user)=>
        {
          return (
        <h1>
          employee name is { user.user_name } <br></br>
          employee id is { user.employee_id }<br></br>
          employee name is { user.status }<br></br>
          <br></br><br></br>
        </h1>);

        })}





      </header>
    </div>
  );
}

export default App;
