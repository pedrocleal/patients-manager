import Patients from "../Patients"
import { usePatients } from "../../context/PatientsContext"
import { Container } from "../PatientsList/styles"

export default function PatientsList({ searchInputValue }) {

  const { patients } = usePatients();

  const filteredPatients = patients.filter(patient => patient.name.toLowerCase().includes(searchInputValue));

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Sexo</th>
            <th>Endereço</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <Patients 
            name={patient.name}
            cpf={patient.cpf}
            birthDate={patient.birthDate}
            gender={patient.gender}
            adress={patient.adress}
            status={patient.status}
            />
          ))}
        </tbody>
      </table>
      
    </Container>
  )
}