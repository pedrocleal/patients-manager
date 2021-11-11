import { useState } from "react"
import Input from "../Input"
import { Container } from "./styles";

const defaultValues = {
  name: '',
  birthDate: '',
  cpf: '',
  gender: '',
  status: true
}

export default function Register() {
  const [ inputValues, setInputValues ] = useState(defaultValues)

  function handleInputChange(e) {
    const { name, value } =  e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  
  return (
    <Container>
      <h1>Cadastrar paciente</h1>
      <form>
        <Input label="Nome do paciente" value={inputValues.name} name="name" onChange={handleInputChange} required/>
        <Input label="Data de Nascimento" value={inputValues.birthDate} name="birthDate" onChange={handleInputChange} required/>
        <Input label="CPF do paciente" value={inputValues.cpf} name="cpf" onChange={handleInputChange} required/>
        <Input label="Sexo do paciente" value={inputValues.gender} name="gender" onChange={handleInputChange} required/>
      </form> 
    </Container>
  )
}