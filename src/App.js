import './App.css';
import React, { useState } from 'react';

import Greeting from './components/Greeting';
import ShowDate from './components/ShowDate';
import ShowMessage from './components/ShowMessage';
import ShowName from './components/ShowName';
import Loading from './components/Loading'; 
import Button from './components/Button'; 
import TextInput from './components/TextIn';
import PasswordInput from './components/PasswordIn';
import Counter from './components/Counter';
import LetterCounter from './components/LetterCounter';
import Stopwatch from './components/Stopwatch';
import LikeCounter from './components/LikeCounter';
import NamesComponent from './components/NamesComponent';
import NamesList from './components/NamesList';
import AgeList from './components/AgeList';
import Select from './components/Select';
import AtopeReact from './components/AtopeReact';
import FetchComponent from './components/FetchComponent';
import StrongPassword from './components/StrongPassword';
import UserForm from './components/UserForm';




function App() {

  const showMessage = true;
  const show = false;

  const [selectedValue, setSelectedValue] = useState('');
  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (

    <div className="App">
      <Greeting />
      <ShowName />
      <ShowDate />
      <ShowMessage showMessage={showMessage} />
      <Loading show={show}>
        <ShowMessage showMessage={showMessage} />
      </Loading>
      <Button onClick={() => console.log('holi')} />
      <TextInput />
      <PasswordInput />
      <Counter />
      <LetterCounter />
      <Stopwatch />
      <LikeCounter />
      <NamesComponent />
      <NamesList />
      <AgeList />

      <Select
        value={selectedValue}
        items={items}
        onChange={handleChange}
      />
      <div>Selected Value: {selectedValue}</div>
      {/* Visualizamos el valor seleccionado para verificar que el componente Select está funcionando */}

      <AtopeReact />
      <FetchComponent />
      <StrongPassword />
      <UserForm />
      

    </div>
  );
}

export default App;
