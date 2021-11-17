import ReactDom from "react-dom";
import { useState } from "react"
import { usePatients } from "../../context/PatientsContext";
import { ModalContainer, ModalOverlay } from "./styles";
import Input from "../Input"
import Select from "../Select";
import { GrClose } from 'react-icons/gr';
import toast from 'react-hot-toast';

const defaultValues = {
  name: '',
  birthDate: '',
  cpf: '',
  adress: '',
  gender: '',
  status: true
}

export default function RegisterModal({ isOpen, onRequestClose }) {

  const { patients, setPatients } = usePatients();
  const [ inputValues, setInputValues ] = useState(defaultValues)

  function handleInputChange(e) {
    const { name, value } =  e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleNewPatient(); // add new patients
    setInputValues(defaultValues); // set input values to default values ''
  }

  function handleNewPatient() {
    const hasCpf = cpfValidation();

    if (!hasCpf) {
      setPatients((prevState) => [
        {
          id: patients.length + 1,
          name: inputValues.name,
          birthDate: inputValues.birthDate,
          cpf: inputValues.cpf,
          gender: inputValues.gender,
          adress: inputValues.adress,
          status: inputValues.status
        },
        ...prevState
      ]);
      toast.success('Paciente cadastrado com sucesso!');
      onRequestClose();
    } else {
      toast.error('CPF JÁ REGISTRADO');
    }
  }

  if(!isOpen) {
    return null
  }

  function cpfValidation() {
    const { cpf } = inputValues;
    const cpfExists = patients.find(patient => patient.cpf === cpf);
    
    if (cpfExists) {
      return true;
    }

    return false;
  }
  
  return ReactDom.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <button onClick={onRequestClose} className="closeModal"><GrClose style={{ color: '#372db3'}}/></button>
        <h1>Cadastrar Paciente</h1>
        <form onSubmit={handleFormSubmit}>
          <Input label="Nome do paciente" value={inputValues.name} name="name" onChange={handleInputChange} required/>
          <Input label="Data de Nascimento" type="date" value={inputValues.birthDate} name="birthDate" onChange={handleInputChange} required/>
          <Input label="CPF do paciente" type="number" value={inputValues.cpf} name="cpf" onChange={handleInputChange} required/>
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
          <button className="submitBtn" type="submit">Cadastrar</button>
        </form> 
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('add-modal')
  );
}