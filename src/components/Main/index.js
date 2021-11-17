import { useState } from 'react';
import { Container } from './styles';
import RegisterModal from '../RegisterModal';
import { Toaster } from 'react-hot-toast';

import PatientsList from '../PatientsList';
import Input from '../Input';

export default function Main() {

  const [ searchInputValue, setSearchInputValue ] = useState('');
  
  const [ AddModalOpen, setAddModalOpen ] = useState(false);

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  return (
    <>
      <RegisterModal isOpen={AddModalOpen} onRequestClose={() => setAddModalOpen(false)}/>
      <Container>
        <Input placeholder="Buscar paciente..." value={searchInputValue} onChange={handleInputChange}/>
        <button className="addButton" onClick={() => setAddModalOpen(prevState => !prevState)}>+</button>
        <h1>Lista de Pacientes</h1>
        <PatientsList searchInputValue={searchInputValue}/>    
      </Container>
      <Toaster toastOptions={{
        style: {
          fontSize: '16px',
          fontWeight: '600'
        }
      }}/>
    </>
  )
}