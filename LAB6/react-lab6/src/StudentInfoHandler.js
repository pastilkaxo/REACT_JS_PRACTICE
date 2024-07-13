import React from "react";

function StudentInfoHandler(props) {
  const { fullName, dateOfBirth, yearOfAdmission, faculty, group, specialty, email, phoneNumber } = props.studentData;

  // Расчет возраста студента на основе его даты рождения
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  else if (age <= 16){
    age = "Мало"
  }
else if(age === 0){
  age = "Да"
} 
  

  // Расчет курса студента на основе года его поступления
  const currentYear = new Date().getFullYear();
  let course = currentYear - yearOfAdmission ;
  if (course > 4) {
    course = "Окончил университет";
  }
  else if (course < 0 ){
    course = "Еще не поступает"
    
  }
  else if (course === 0){
    course = "Поступает в  этом году"
  }

  // Определение операторов услуг электронной почты и мобильной связи
  const emailOperator = email.split("@")[1];
  const phoneOperator = (() => {
    const phoneOperators = {
      "29": "A1",
      "33": "LIFE",
      "44": "MTC",
      "01": "Мегафон",

    };
    const phonePrefix = phoneNumber.slice(4, 6);
    return phoneOperators[phonePrefix] || "Неизвестный оператор";
  })();

  return (
  <table>
  <tbody>
  <tr>
  <td>ФИО студента:</td>
  <td>{fullName}</td>
  </tr>
  <tr>
  <td>Дата рождения:</td>
  <td>{dateOfBirth}</td>
  </tr>
  <tr>
  <td>Возраст студента:</td>
  <td>{age} лет</td>
  </tr>
  <tr>
  <td>Год поступления:</td>
  <td>{yearOfAdmission}</td>
  </tr>
  <tr>
  <td>Курс:</td>
  <td>{course}</td>
  </tr>
  <tr>
  <td>Факультет:</td>
  <td>{faculty}</td>
  </tr>
  <tr>
  <td>Группа:</td>
  <td>{group}</td>
  </tr>
  <tr>
  <td>Специальность:</td>
  <td>{specialty}</td>
  </tr>
  <tr>
  <td>Email:</td>
  <td>{email}</td>
  </tr>
  <tr>
  <td>Оператор услуг эл. почты:</td>
  <td>{emailOperator}</td>
  </tr>
  <tr>
  <td>Телефон:</td>
  <td>{phoneNumber}</td>
  </tr>
  <tr>
  <td>Оператор мобильной связи:</td>
  <td>{phoneOperator}</td>
  </tr>
  </tbody>
  </table>
  );
  }
  
  export default StudentInfoHandler;