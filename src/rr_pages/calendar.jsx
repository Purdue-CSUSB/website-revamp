import React from "react";

function calendar() {
    const calenderId = '88e0056451d336ea63dbb2cfc2ae5691fb511e40dbcc5e5d79dc6ed439fb7337@group.calendar.google.com'
    const timeZone = 'America%2FIndiana%2FIndianapolis'
    return (
        <iframe
        title="Google Calendar" 
        src={`https://calendar.google.com/calendar/embed?src=${calenderId}&ctz=${timeZone}`}
        style={{ border: '0', width: '800px', height: '600px', frameborder: '0', scrolling: 'no' }}
        allowFullScreen
        ></iframe>
    );
  }

  const MyComponent = () => {
    return (
        <div>
            <h1> Calendar </h1>
            {calendar()}
        </div>
    );
  };
  
export default MyComponent; 
