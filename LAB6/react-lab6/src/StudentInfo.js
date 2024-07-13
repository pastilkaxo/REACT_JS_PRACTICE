import React, { useState } from "react";
import StudentInfoHandler from "./StudentInfoHandler";
import './index.css'

function StudentInfo() {
  const [studentData, setStudentData] = useState({  // сохраняет внутри себя состояние и представляет собой снимок компонента и его стейта, то есть  замыкание  
    fullName: "",
    dateOfBirth: "",
    yearOfAdmission: "",
    faculty: "",
    group: "",
    specialty: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevState) => ({ // передается актуальное состояние стейта через коллбэк- без привязки к ререндерам компонентов
      ...prevState,    
      [name]: value,
    }));
  };

  return (
   <form>
    <fieldset>
    <label htmlFor="fullName">ФИО:</label> <br></br>
      <input type="text" name="fullName" onChange={handleChange} />
      <br></br>
      <label htmlFor="dateOfBirth">Дата рождения:</label><br></br>
      <input type="date" name="dateOfBirth" onChange={handleChange} />
      <br></br>
      <label htmlFor="yearOfAdmission">Год поступления:</label><br></br>
      <input type="text" name="yearOfAdmission" onChange={handleChange} /><br></br>

      <label htmlFor="faculty">Факультет:</label><br></br>
      <input type="text" name="faculty" onChange={handleChange} /><br></br>

      <label htmlFor="group">Группа:</label><br></br>
      <input type="number" name="group"  max={10} min={1}  onChange={handleChange} /><br></br>

      <label htmlFor="specialty">Специальность:</label><br></br>
      <input type="text" name="specialty" onChange={handleChange} /><br></br>

      <label htmlFor="email">Электронная почта:</label><br></br>
      <input type="mail" name="email" onChange={handleChange} /><br></br>

      <label htmlFor="phoneNumber">Номер телефона:</label><br></br>
      <input type="text" name="phoneNumber" onChange={handleChange} /><br></br>

     
    </fieldset>
    <StudentInfoHandler studentData={studentData} />
   </form>
  );
}

export default StudentInfo;