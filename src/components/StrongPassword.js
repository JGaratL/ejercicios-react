import React, { useState } from 'react';

function StrongPassword() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('Indefinido');

  const checkPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/\d/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[\$\%\&\/\(\)\+\-\:]/.test(password)) score++;

    if (score === 1) setStrength('Débil');
    else if (score >= 2 && score <= 3) setStrength('Normal');
    else if (score === 4) setStrength('Fuerte');
    else setStrength('Muy débil');
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Ingrese su contraseña"
      />
      <p>Password {strength}</p>
    </div>
  );
}

export default StrongPassword;
