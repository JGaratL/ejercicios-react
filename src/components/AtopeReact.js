// Entiendo q hasta q no escribas A tope con React tal cual no se quita el mensaje de error. Para hacer q cuando escribes la primera A no salga el mensaje habria q añadir un botón o hacer click fuera del box. Esto sería más complicado.
import React, { useState } from 'react';

function AtopeReact() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      {text !== 'A tope con React' && text !== '' && <p style={{ color: 'red' }}>Texto incorrecto</p>}
    </div>
  );
}

export default AtopeReact;
