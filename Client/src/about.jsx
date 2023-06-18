import React from 'react'

export default function About() {
  return ( 
    <div>
         <div className="container">
        <div className="row no-gutters">
         
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
            <h1 ><strong>ABOUT</strong></h1><br/>
              <h3>Railex: A Railway Reservation System</h3>
              <p>
                The aim of the system is to pvovide a simple and fast booking process and for the passengers to enquire about the trains available on
                the basis of source and destination, booking and cancellation of tickets, enquire about the status of the
                booked ticket, etc. The aim of this collaborative project is to design and develop a database maintaining the records of
                different trains, train status, and passengers. The record of the train includes its number, name, source,
                destination, and days on which it is available, whereas the record of the train status includes dates for which
                tickets can be booked, total number of seats available, and the number of seats already booked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
