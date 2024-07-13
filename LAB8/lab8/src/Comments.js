import React, { useState } from 'react';
import "./index.css"

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    avatar: '',
    text: '',
    secretWord: '',
    date: '',
  });

  const handleAddComment = () => {
    const date = new Date().toLocaleString();
    setNewComment({ ...newComment, date });
    setComments([...comments, newComment]);
    setNewComment({
      name: '',
      email: '',
      avatar: '',
      text: '',
      secretWord: '',
      date: '',
    });
  };

  const CommentsEdit = (index, newText) => {
    const updatedComments = [...comments];
    updatedComments[index].text = newText;
    updatedComments[index].date = new Date().toLocaleString();
    setComments(updatedComments);
  };

  const CommentsDel = (index, word) => {
    if (comments[index].secretWord === word) {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    } else {
      alert('Ошибка!');
    }
  };

  const handleAvatarChange = (e) => {
    const selectedAvatar = e.target.value;
    setNewComment({ ...newComment, avatar: selectedAvatar });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  return (
    <div className='all'>
      <div className='com'>
      <h1>Comments</h1>
        <input  type="text"   name="name"    placeholder="Имя"   value={newComment.name}  onChange={handleInputChange} />
        <input type="email"  name="email"  placeholder="Email"   value={newComment.email}  onChange={handleInputChange} />
        <select value={newComment.avatar} onChange={handleAvatarChange}>
          <option>...</option>
          <option value="avatar1.jpg">Килуа</option>
          <option value="avatar2.jpg">Луффи</option>
          <option value="avatar3.png">Люк</option>
        </select>
        <p>Выбранное фото:</p>
        <img className="avatar" src={newComment.avatar} alt="" />
        <input   type="text"   name="text"   placeholder="Текст"  value={newComment.text} onChange={handleInputChange} />
        <input  type="text"   name="secretWord"   placeholder="Секретное слово"   value={newComment.secretWord}  onChange={handleInputChange} />
        <button onClick={handleAddComment}>Добавить</button>
      </div>
      <ul className='txt'>
        {comments.map((comment, index) => (
          <li key={index}>
           <img className="avatar" src={comment.avatar} alt="" />
            <div>{comment.name}</div>
            <div>{comment.text}</div>
            <div>{comment.date}</div>
            <button onClick={() => CommentsEdit(index, prompt('Новвый комментарий: '))}>Изменить</button>
            <button onClick={() => CommentsDel(index, prompt('Введите секретное слово: '))}>Удалить</button>
            <button onClick={() => alert(`Имя: ${comment.name}\nEmail: ${comment.email}\nДата изменения : ${comment.date}`)}>Информация</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
