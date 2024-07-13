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



const NoteEditor = ({ notes, onNoteChange, onNoteDelete }) => {
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    onNoteChange(note);
    setNote("");
  };

  const handleDeleteNote = (noteDate) => {
    onNoteDelete(noteDate);
  };

  return (
    <div className="note-editor">
      {Object.entries(notes).map(([noteDate, noteText]) => (
        <div key={noteDate} className="note-item">
          <p>{noteText}</p>
          <button onClick={() => handleDeleteNote(noteDate)}>Delete</button>
        </div>
      ))}
      <textarea value={note} onChange={handleNoteChange} />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};


const CalendarBody = ({ currentDate, selectedDate, onSelectDate }) => {
  const [isNoteShown, setIsNoteShown] = useState(false);
  const [notes, setNotes] = useState({});

  const startOfMonth = moment(currentDate).startOf("month");
  const endOfMonth = moment(currentDate).endOf("month");
  const startDate = moment(startOfMonth).startOf("week");
  const endDate = moment(endOfMonth).endOf("week");

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = moment(day).add(1, "day");
  }

  const firstDay = days[0];
  const emptyCellsAtStart = moment(firstDay).diff(startDate, "days");
  for (let i = 0; i < emptyCellsAtStart; i++) {
    days.unshift(null);
  }

  const lastDay = days[days.length - 1];
  const emptyCellsAtEnd = moment(endDate).diff(lastDay, "days");
  for (let i = 0; i < emptyCellsAtEnd; i++) {
    days.push(null);
  }

  const handleSelectDate = (day) => {
    selectedDate(day);
    setIsNoteShown(true);
    setNotes({}); // сбросить состояние заметок
  };
  
  const notesForSelectedDate = notes[moment(selectedDate).format("YYYY-MM-DD")] || {};
  

  return (
    <>
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
          {[...Array(Math.ceil(days.length / 7)).keys()].map((week, i) => {
            return (
              <tr key={i}>
                {[...Array(7).keys()].map((dayOfWeek, j) => {
                  const index = i * 7 + dayOfWeek;
                  const day = days[index];
                  if (!day) {
                    return <td key={j}></td>;
                  }

                  const isToday = moment().isSame(day, "day");
                  const isCurrentMonth = moment(day).isSame(currentDate, "month");
                  const isSelected = moment(day).isSame(selectedDate, "day");
                  const classNames = [];

                  if (isToday) {
                    classNames.push("today");
                  }
                  if (!isCurrentMonth) {
                    classNames.push("other-month");
                  }
                  if (isSelected) {
                    classNames.push("selected");
                  }
    
                  return (
                    <td
                      key={j}
                      className={classNames.join(" ")}
                      onClick={() => handleSelectDate(day)}
                    >
                      {moment(day).format("D")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isNoteShown && (
      <>
        <div className="note">
          <p>Note for {moment(selectedDate).format("MMMM Do YYYY")}</p>
        </div>
        <NoteEditor
          notes={notesForSelectedDate}
          onSaveNote={(newNote) => {
          const updatedNotes = {...notes};
          updatedNotes[selectedDate] = newNote;
          setNotes(updatedNotes);
          }}
          onDeleteNote={() => {
          const updatedNotes = {...notes};
          delete updatedNotes[selectedDate];
          setNotes(updatedNotes);
          }}
          />
          </>
          )}
          </>
          );
        };





const Calendar = () => {
const [currentDate, setCurrentDate] = useState(moment());
const [selectedDate, setSelectedDate] = useState(moment());

const handlePrevMonth = () => {
setCurrentDate(moment(currentDate).subtract(1, "month"));
};

const handleNextMonth = () => {
setCurrentDate(moment(currentDate).add(1, "month"));
};

const handleSelectDate = (day) => {
setSelectedDate(day);
};

return (
<div className="calendar">
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