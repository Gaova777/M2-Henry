import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) { //texto@texto.texto es lo que espera en este if con los caracterees... si el valor que entra el usuario no cumple con este formato entra en el if
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }
  return (
      <form>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {/* !error ? null : <span>{error}</span> */}
        {error && !error ? null : <span>{error}</span>}
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    );
}