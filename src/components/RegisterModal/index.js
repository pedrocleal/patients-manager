import ReactDom from "react-dom";
import { useState } from "react"
import { usePatients } from "../../context/PatientsContext";
import { ModalContainer, ModalOverlay } from "./styles";
import Input from "../Input"
import Select from "../Select";

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
    e.preventDefault()
    handleNewPatient(); // add new patients
    setInputValues(defaultValues); // set input values to default values ''
    onRequestClose(); //to close modal when submit the form
  }

  function handleNewPatient() {
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
  }

  if(!isOpen) {
    return null
  }
  
  return ReactDom.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <button onClick={onRequestClose} className="closeModal">fechar</button>
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
          <button class="submitBtn" type="submit">Cadastrar</button>
        </form> 
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('add-modal')
  );
}