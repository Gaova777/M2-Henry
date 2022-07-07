import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Username is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  
  return errors;
};




export default function  Form() {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')
//la forma de hacer un estado para muchos inputs sería





const [input, setInput] = React.useState({
    username: '',
    password: ''
  });//input será un objeto que tendra una propiedad username, que será un string vacío e igual con password--> 

    //{username: '', password:''}


  const [errors, setErrors] = React.useState({})

    const handleInputChange = function(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value //seria cambiar el estado de usuario y paswword, colocando todo en un objeto, de la manera: trayendo lo que tenia ...input, e.target.name -> el name del estado puede ser usuario o password : al valor
      });

      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }));
    }



  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
        
        type="text" 
        name="username" 
        value = {input.username} 
        onChange={handleInputChange} />{/* y la que tenemos usa la funcion creada para evitar escribir  el estado y su setestate las veces que crea el inputotra forma de colocar el  onChange---> onChange={(e)=>setUsername(e.target.value) y el value debe ser value = {input.username} o sin el input */}
        
        {errors.username && (
           <p className="danger">{errors.username}</p>
           )}
      </div>
      
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
        
        type="password" 
        name="password" 
        value = {input.password} 
        onChange={handleInputChange}/>{/* onChange={(e)=>setPassword(e.target.value)} y el value debe cambiar a value={input.password}*/}

          {errors.password && (
           <p className="danger">{errors.password}</p>
              )}
      </div>
    
    <input type = "submit" value='Submit'/>
    </form>

  )
}
