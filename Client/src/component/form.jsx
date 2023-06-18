import React, { useState } from 'react';
import '../css/booking.css';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function BookingForm() {
  const { handleSubmit, register } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = async (formData) => {
   
    try {
      // Send a POST request to the server
      await axios.post("http://localhost:8888/submit", formData); // Update the URL with the correct server address
  
      // Handle successful submission
      console.log("Form submitted successfully");
      alert("Data successfully added to the database"); // Display success message
      setSelectedDate(null); // Reset selected date
      reset(); // Reset the form using react-hook-form's reset method
    } catch (error) {
      // Handle error
      console.error("An error occurred", error);
      alert("Failed to add data to the database"); // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">BOOK NOW !!!</h1>
      <label>Your Name:</label><br/>
      <input className="in_name" type="text" id="name" name="name" {...register('name')} /><br/>
      <label>Your Age:</label><br/>
      <input className="in_age" type="text" id="age" name="age" {...register('age')} /><br/>
      <label>Gender:</label><br/>
      <select id="genderselect" name="gender" {...register('gender')}>
        <option value="--select--">--select--</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select><br/>
      <label>Address:</label><br/>
      <input className="in_age" type="text" id="address" name="address" {...register('address')} /><br/>
      <label htmlFor="origin">Origin:</label><br />
      <select id="originsel" name="origin" {...register('origin')}>
        <option value="New York">CAGAYAN DE ORO CITY</option>
        {/* Add more options as needed */}
      </select><br />
      <label htmlFor="destination">Destination:</label><br />
      <select id="destinationsel" name="destination" {...register('destination')}>
        <option value="Davao">DAVAO CITY</option>
        <option value="Malaybalay">MALAYBALAY</option>
        <option value="Valencia">VALENCIA</option>
        <option value="Quezon">QUEZON</option>
        <option value="Lorega">LOREGA</option>
        <option value="Buda">BUDA</option>
        <option value="Mintal">MINTAL</option>
        {/* Add more options as needed */}
      </select>
      <br /><br />
      <div className="radio-group">
        <label className="traintype">Train Type:</label><br />
        <label htmlFor="ac">AC</label>
        <input type="radio" id="ac" name="trainType" value="AC" {...register('trainType')} />
        <label htmlFor="general">General</label>
        <input type="radio" id="general" name="trainType" value="General" {...register('trainType')} />
      </div>
      <br/>
      <label htmlFor="date">Departure Date:</label><br/>
      <DatePicker
        id="idate"
        name="departureDate"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd" // Date format (YYYY-MM-DD)
        {...register('departureDate')}
      /><br />
      <label htmlFor="p_time">Time:</label><br />
      <select id="timesel" name="time" {...register('time')}>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12NN">12NN</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        {/* Add more options as needed */}
      </select>
      <br/><br/>
      <button className="btn btn-outline-success" type="submit">
        SUBMIT
      </button>
      <br/>
    </form>
  );
}

export default BookingForm;
