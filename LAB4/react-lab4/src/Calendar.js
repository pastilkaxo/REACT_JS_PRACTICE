import React, { useState } from "react";
import moment from "moment";
import './index.css'

const CalendarHead = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div className="nav">
      <button onClick={onPrevMonth}>Prev</button>
      <h2>{moment(currentDate).format("MMMM YYYY")}</h2>
      <button onClick={onNextMonth}>Next</button>
    </div>
  );
};

const CalendarBody = ({ currentDate, selectedDate, onSelectDate }) => {
  // начало текущего месяца
    const startOfMonth = moment(currentDate).startOf("month");
    // конец текущего месяца
    const endOfMonth = moment(currentDate).endOf("month");
    //первый день недели текущего месяца
    const startDate = moment(startOfMonth).startOf("week");
    // последний день недели текущего месяца
    const endDate = moment(endOfMonth).endOf("week");
  
    const days = [];
    let day = startDate;
  
    while (day <= endDate) {
      days.push(day);
      day = moment(day).add(1, "day");
    }
  
 
 //  добавить пустые ячейки в начало первой недели
    const firstDay = days[0];
    // возвращает n-ю разность элементов массива
    const emptyCellsAtStart = moment(firstDay).diff(startDate, "days");
    for (let i = 0; i < emptyCellsAtStart; i++) {
      // добавляет один или более элементов в начало массива и возвращает новую длину массива
      days.unshift(null);
    }
  
    // добавляем пустые ячейки в конец прошлой недели
    const lastDay = days[days.length - 1];
    const emptyCellsAtEnd = moment(endDate).diff(lastDay, "days");
    for (let i = 0; i < emptyCellsAtEnd; i++) {
      days.push(null);
    }
  
    return (
      <table>
        <thead>
          <tr>
            <th>Вс</th>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
          </tr>
        </thead>
        <tbody>
          {/* строки для каждой недели*/}
          {[...Array(Math.ceil(days.length / 7)).keys()].map((week, i) => {
            return (
              <tr key={i}>
                {/* столбцы для каждого дня в неделе */}
                {[...Array(7).keys()].map((dayOfWeek, j) => {
                  const index = i * 7 + dayOfWeek;
                  const day = days[index];
                  if (!day) {
                    return <td key={j}></td>;
                  }
  
                  const isToday = moment().isSame(day, "day");
                  const isCurrentMonth = moment(day).isSame(currentDate, "month");
                  const isSelected = moment(day).isSame(selectedDate, "day");
  
                  const className = `
                    ${isToday ? "today" : ""}
                    ${isSelected ? "selected" : ""}
                    ${!isCurrentMonth ? "disabled" : ""}
                  `;
  
                  return (
                    <td key={j} className={className} onClick={() => onSelectDate(day)}>
                      {moment(day).format("D")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "month"));
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <CalendarHead
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarBody
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectDate={handleSelectDate}
      />
    </div>
  );
};

export default Calendar;
