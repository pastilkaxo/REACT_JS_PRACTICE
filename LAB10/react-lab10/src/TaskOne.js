import React, { useState } from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';

import './index.css'

const SignUpEmailInput = () => {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <label>
      <legend>Введите почту:</legend>
      <input type="email" onChange={handleChangeEmail} value={email} required />
    </label>
  );
};

const SignUpPasswordInput = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordStrength = zxcvbn(password);
  const isPasswordMatching = password === confirmPassword;
  const isButtonDisabled = !isPasswordMatching;

  return (
    <label>
      <label htmlFor="password">
        <legend>Введите пароль:</legend>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          required
        />
      </label>

      <label htmlFor="confirm-password">
        <legend>Подтвердите пароль:</legend>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          required
        />
      </label>

      {!isPasswordMatching && <p className="no-pass">Passwords do not match</p>}

      <label>
        <legend>Надежность:</legend>
        <progress value={passwordStrength.score} max="4" />
      </label>
      <br />
      <button disabled={isButtonDisabled}>Submit</button>
    </label>
  );
};

SignUpEmailInput.propTypes = {
  email: PropTypes.string,
};

SignUpPasswordInput.propTypes = {
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};


function SignUpForm({ email, password, confirmPassword, onChangeEmail, onChangePassword, onChangeConfirmPassword }) {
    return (
      <form>
        <fieldset>
          <h2>Вход:</h2>
          <SignUpEmailInput email={1234} onChange={onChangeEmail} />  !!!!!!!!!
          <br />
<SignUpPasswordInput
  password={123}
  confirmPassword={confirmPassword}
  onChangePassword={onChangePassword}
  onChangeConfirmPassword={onChangeConfirmPassword}
/>
          <h2>Дополнительно:</h2>
          <label>
            <legend>ФИО:</legend>
            <input type="text" placeholder="Имя" required />
            <br />
            <input type="text" placeholder="Фамилия" required />
            <br />
            <input type="text" placeholder="Отчество" />
          </label>
          <label>
            <legend>Выберите пол:</legend>
            <input type="radio" name="gender" value="male" required />м
            <input type="radio" name="gender" value="female" required />ж
          </label>
          <label>
            <legend>Введите дату рождения:</legend>
            <input type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
          </label>
          <label>
            <legend>Введите номер телефона:</legend>
            <input type="text" placeholder="Phone" />
          </label>
        </fieldset>
      </form>
    );
  }
  
  SignUpForm.propTypes = {
    onChangeEmail: PropTypes.string,
    onChangePassword: PropTypes.func,
    onChangeConfirmPassword: PropTypes.func,
    password: PropTypes.string,
  };

export default SignUpForm;
