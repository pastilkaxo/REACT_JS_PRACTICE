import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [warning, setWarning] = useState(false);

  const addNote = () => {
    if (notes.length >= 8) {
      setWarning(true);
    } else {
      setNotes([...notes, { title, date, text }]);  // оператор расширения
      setTitle('');
      setDate('');
      setText('');
      setWarning(false);
    }
  };

  const deleteFirstNote = () => {
    setNotes(notes.slice(1));
  };

  const deleteLastNote = () => {
    setNotes(notes.slice(0, -1));
  };


       /*  добавил все заметки из newNotes, необходимо создать новый массив, 
  который будет содержать все заметки из notes и все заметки из newNotes. Это можно сделать, используя оператор расширения ... для обоих массивов:*/
 
  const addNewNotes = (newNotes) => { 
    setNotes([...notes, ...newNotes]);
  };

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button onClick={addNote}>Add Note</button>
      </div>
      {warning && <div className="warning">У вас слишком много заметок</div>}
      {notes.length >= 3 && (
        <div className="button-container">
          <button onClick={deleteFirstNote}>Удалить первую заметку</button>
          <button onClick={deleteLastNote}>Удалить последнюю заметку</button>
        </div>
      )}
      <div className="notes">
        {notes.map((note, index) => (
          <div
            className="note"
            key={index}
            style={{ backgroundColor: index >= 7 ? 'red' : 'yellow' }}
          >
            <div className="note-title">{note.title}</div>
            <div className="note-date">{note.date}</div>
            <div className="note-text">{note.text}</div>
          </div>
          
        ))}
      </div>
      <div className="form-container">
        <button onClick={() => addNewNotes([{title: "New Note 1", date: "2023-04-10", text: "Bye"}, {title: "New Note 2", date: "2023-04-11", text:"Hello"}])}>Add some</button>
        </div>
    </div>
  );
};

export default Notes;