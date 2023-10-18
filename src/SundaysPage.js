import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SundaysPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [sundaysCount, setSundaysCount] = useState(0);

    useEffect(() => {
        if (startDate && endDate) {
            let count = 0;
            let currentDate = new Date(startDate);
            const end = new Date(endDate);

            while (currentDate <= end) {
                if (currentDate.getDay() === 0 && currentDate.getDate() < 28) {
                    count++;
                }
                currentDate = new Date(currentDate);
                currentDate.setDate(currentDate.getDate() + 1);
            }
            setSundaysCount(count);
        }
    }, [startDate, endDate]);

    return (
        <div>
            <h2>Sundays Count</h2>
            <div>
                <div>
                    <label>Start Date:</label>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        minDate={new Date()}
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        minDate={startDate}
                    />
                </div>
            </div>
            {sundaysCount > 0 && (
                <div>
                    Number of Sundays between the selected dates (excluding certain Sundays): {sundaysCount}
                </div>
            )}
        </div>
    );
};

export default SundaysPage;
