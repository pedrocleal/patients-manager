import { useState } from 'react';
import { Container } from './styles';

import PatientsList from '../PatientsList';
import Input from '../Input';

export default function Main() {

  const [ searchInputValue, setSearchInputValue ] = useState('');

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  return (
    <>
      <Container>
        <Input placeholder="Buscar..." value={searchInputValue} onChange={handleInputChange}/>
        <button className="addButton">+</button>
        <h1>Lista de Pacientes</h1>
        <PatientsList />    
      </Container>
    </>
  )
}