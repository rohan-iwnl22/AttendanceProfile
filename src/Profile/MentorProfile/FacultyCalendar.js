import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Fpfp.css';

const FacultyCalendar = () => {
    const [value, onChange] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(value.getMonth());

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handleMonthChange = (date) => {
        onChange(date);
        setSelectedMonth(date.getMonth());
    };

    // Sample student names data
    const studentNames = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Tom Brown'];

    const daysInMonth = new Date(value.getFullYear(), selectedMonth + 1, 0).getDate();
    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getRandomBinary = () => {
        return Math.round(Math.random());
    };

    const getRandomRemark = () => {
        const remarks = ["Medical Issue", "Absent", "Late", "Late"];
        return remarks[Math.floor(Math.random() * remarks.length)];
    };

    return (
        <div>
            <button onClick={toggleCalendar}>Calendar</button>
            {showCalendar && (
                <div style={{ marginTop: '20px' }}>
                    <Calendar onChange={handleMonthChange} value={value} />
                </div>
            )}
            <h3>{months[selectedMonth]}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        {dates.map((date) => (
                            <th key={date}>{date}</th>
                        ))}
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {studentNames.map((name) => (
                        <tr key={name}>
                            <td>{name}</td>
                            {dates.map((date) => (
                                <td key={`${name}-${date}`}>{getRandomBinary()}</td>
                            ))}
                            <td>{getRandomRemark()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FacultyCalendar;