import React, { useState } from 'react';

function PasswordInput() {
  const [passwordVisibility, setPasswordVisibility] = useState('password');

  const toggleVisibility = () => {
    setPasswordVisibility(passwordVisibility === 'password' ? 'text' : 'password');
  };

  return (
    <div>
      <input type={passwordVisibility} placeholder="Ingrese su contraseña" />
      <button onClick={toggleVisibility}>
        {passwordVisibility === 'password' ? 'Mostrar' : 'Ocultar'}
      </button>
    </div>
  );
}

export default PasswordInput;
