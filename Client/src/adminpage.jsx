import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Adminpage() {
  const [trainlistData, setTrainlistData] = useState([]);
  const [passengerData, setpassengerData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/trainlist')
      .then(res => setTrainlistData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8888/passenger')
      .then(res => setpassengerData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
   <><br/><br/><br/><br/>
      <div className="container">
        <div className="section-title">
          <h2>TRAIN LIST</h2>
          <p>
            The table below shows the origin and destination of the train with their designated fare. The availability
            of the train on each day is also monitored and updated daily.
          </p>
          <br />
          <table className='table table-dark table-striped'>
            <thead>
              <tr>
                <th>TRAIN_NO</th>
                <th>NAME</th>
                <th>ORIGIN</th>
                <th>DESTINATION</th>
                <th>AC_FARE</th>
                <th>GEN_FARE</th>
                <th>MONDAY</th>
                <th>TUESDAY</th>
                <th>WEDNESDAY</th>
                <th>THURSDAY</th>
                <th>FRIDAY</th>
                <th>SATURDAY</th>
                <th>SUNDAY</th>
                <th>DEPARTURE</th>
              </tr>
            </thead>
            <tbody>
              {trainlistData.map((data, i) => (
                <tr key={i}>
                  <td>{data.trainNumber}</td>
                  <td>{data.trainName}</td>
                  <td>{data.source}</td>
                  <td>{data.destination}</td>
                  <td>{data.AC_fare}</td>
                  <td>{data.GEN_fare}</td>
                  <td>{data.Monday}</td>
                  <td>{data.Tuesday}</td>
                  <td>{data.Wednesday}</td>
                  <td>{data.Thursday}</td>
                  <td>{data.Friday}</td>
                  <td>{data.Saturday}</td>
                  <td>{data.Sunday}</td>
                  <td>{data.Departure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    


<div className="container">
  <div className="section-title">
    <h2>PASSENGER LIST</h2>
    <p>
      The table below shows the list passenger who booked a ticked.
    </p>
    <br />
   
     
    <button className="btn btn-success m-2">ADD +</button>
   
    <table className='table table-dark table-striped'>
      <thead>
        <tr>
          <th>TICKET_ID</th>
          <th>TRAIN_NO</th>
          <th>DATE_BOOKED</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>SEX</th>
          <th>ADDRESS</th>
          <th>STATUS</th>
          <th>CATEGORY</th>
          <th>ORIGIN</th>
          <th>DESTINATION</th>
          <th>TIME</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {passengerData.map((data, i) => (
          <tr key={i}>
            <td>{data.ticketID}</td>
            <td>{data.trainNumber}</td>
            <td>{data.dateBooked}</td>
            <td>{data.Passenger_name}</td>
            <td>{data.age}</td>
            <td>{data.sex}</td>
            <td>{data.address}</td>
            <td>{data.status}</td>
            <td>{data.category}</td>
            <td>{data.Origin}</td>
            <td>{data.destination}</td>
            <td>{data.schedule}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>



</>
  );
}

export default Adminpage;
