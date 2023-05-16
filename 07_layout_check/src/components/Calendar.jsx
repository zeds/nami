import React, { useState } from 'react';
import './Calendar.css'; // Calendar.cssファイルのインポート

const Calendar = () => {
  const daysOfWeek = ['月', '火', '水', '木', '金', '土', '日'];
  const months = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月'
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const getCalendarDays = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay() + 1);

    const weeks = [];
    while (startDate <= lastDay) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push({
          day: startDate.getDate(),
          isCurrentMonth: startDate.getMonth() === currentMonth.getMonth()
        });
        startDate.setDate(startDate.getDate() + 1);
      }
      weeks.push(week);
    }

    return weeks;
  };

  return (
    <div className="calendar">
      <span> {currentMonth.getFullYear()}年{months[currentMonth.getMonth()]}</span>
      <button onClick={handlePrevMonth}>前の月</button>
      <button onClick={handleNextMonth}>次の月</button>

      <table>
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {getCalendarDays().map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index} className={day.isCurrentMonth ? 'current-month' : 'other-month'}>{day.day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
