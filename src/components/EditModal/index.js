import ReactDom from "react-dom";
import { useState } from "react";
import { GrClose } from 'react-icons/gr';
import Input from "../Input";
import Select from "../Select";
import { usePatients } from "../../context/PatientsContext";

import toast from 'react-hot-toast';
import { ModalContainer, ModalOverlay } from "./styles";

const defaultValues = {
  name: '',
  birthDate: '',
  cpf: '',
  adress: '',
  gender: '',
  status: true
}

export default function EditModal({ clickedId, isOpen, onRequestClose }) {

  const { patients, setPatients } = usePatients();

  const [ inputValues, setInputValues ] = useState(defaultValues);
  
  function handleInputChange(e) {
    const { name, value } =  e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleEditPatient(clickedId);
    setInputValues(defaultValues);
  }

  function handleEditPatient(clickedId) {
    const formatDate = handleDateFormat(inputValues.birthDate);
    const hasCpf = cpfValidation();

    if (!hasCpf) {
      setPatients(prevState => (
        prevState.map((patient) => (
          patient.id === clickedId ? (
            {
              id: patient.id,
              name: inputValues.name,
              birthDate: formatDate,
              cpf: inputValues.cpf,
              gender: inputValues.gender,
              adress: inputValues.adress,
              status: inputValues.status
            }
          ) : patient
        ))
      ));
      toast.success('Dados atualizados!');
      onRequestClose();
    } else {
      toast.error('CPF já registrado');
    }
  }

  function handleDateFormat(str) {
    return str.split('-').reverse().join("/");
  }
  
  function cpfValidation() {
    const { cpf } = inputValues;
    const cpfExists = patients.find(patient => patient.cpf === cpf);
    
    if (cpfExists) {
      return true;
    }
    
    return false;
  }

  if(!isOpen) {
    return null
  }
  
  return ReactDom.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <button onClick={onRequestClose} className="closeModal"><GrClose style={{ color: '#372db3'}}/></button>
        <h1>Editar Paciente</h1>
        <form onSubmit={handleFormSubmit}>
          <Input label="Nome do paciente" value={inputValues.name} name="name" onChange={handleInputChange} required/>
          <Input label="Data de Nascimento" type="date" value={inputValues.birthDate} name="birthDate" onChange={handleInputChange} required/>
          <Input label="CPF do paciente" type="number" value={inputValues.cpf} name="cpf" onChange={handleInputChange} maxLength={11} required/>
          <Input label="Endereço do paciente" value={inputValues.adress} name="adress" onChange={handleInputChange} required/>
          <Select label="Sexo do paciente" value={inputValues.gender} name="gender" onChange={handleInputChange} required>
            <option value="">Selecione o gênero do paciente</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </Select>
          <Select label="Status" value={inputValues.status} name="status" onChange={handleInputChange} required>
              <option value="">Selecione o status do paciente</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
          </Select>
          <button className="submitBtn" type="submit">Editar</button>
        </form> 
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('edit-modal')
  );
}