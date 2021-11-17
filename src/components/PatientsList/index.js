import Patients from "../Patients"
import { usePatients } from "../../context/PatientsContext"
import { Container } from "../PatientsList/styles"

export default function PatientsList({ searchInputValue }) {

  const { patients, setPatients } = usePatients();

  const filteredPatients = patients.filter(patient => patient.name.toLowerCase().includes(searchInputValue));

  function handleRemovePatients(clickedId) {
    setPatients(prevState => prevState.filter(patient => patient.id !== clickedId))
  }

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
            key={patient.id}
            id={patient.id} 
            name={patient.name}
            cpf={patient.cpf}
            birthDate={patient.birthDate}
            gender={patient.gender}
            adress={patient.adress}
            status={patient.status}
            onRemove={handleRemovePatients}
            />
          ))}
        </tbody>
      </table>
    </Container>
  )
}