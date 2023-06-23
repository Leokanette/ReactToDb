import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Read() {
    const { id } = useParams();
    const [passenger, setPassenger] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8888/read/${id}`)
            .then(res => {
                console.log(res);
                setPassenger(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <h2>PASSENGER DETAIL</h2><br/>
                {passenger.length > 0 ? (
                    <>
                        <h2 className=''>TicketID: {passenger[0].ticketID}</h2>
                        <h2>Train Number: {passenger[0].trainNumber}</h2>
                        <h2>Date Booked: {passenger[0].dateBooked}</h2>
                        <h2>Name: {passenger[0].Passenger_name}</h2>
                        <h2>Age: {passenger[0].age}</h2>
                        <h2>Gender: {passenger[0].sex}</h2>
                        <h2>Origin: {passenger[0].Origin}</h2>
                        <h2>Destination: {passenger[0].destination}</h2>
                        <h2>Booking Status: {passenger[0].status}</h2>
                        <h2>Type of Seat: {passenger[0].category}</h2>
                        <h2>Departure time: {passenger[0].schedule}</h2>   
                    </>
                ) : (
                    <p>Error Accesing passenger data...</p>
                )}
                <Link to="/adminpage" className="btn btn-primary btn-md m-2 px-5">BACK</Link>
                <Link to="/adminpage" className="btn btn-success btn-md m-2 px-5">EDIT</Link>
                <Link to="/adminpage" className="btn btn-danger btn-md m-2">CANCEL BOOKING</Link>
            </div>
        </div>
    );
}
