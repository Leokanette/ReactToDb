import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ServicesSection = () => {
  const [trainlistData, setTrainlistData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/trainlist')
      .then(res => setTrainlistData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>VIEWING</h2>
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
    </section>
  );
};

export default ServicesSection;
