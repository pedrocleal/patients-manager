import Patients from "../Patients"
import { Container } from "../PatientsList/styles"

const patients = [
  {
    name: 'joao',
    cpf: 2131,
    birthDate: '29-03-1992',
    gender: 'masculino',
    adress: 'rua juarez tavora',
    status: 'Ativo'
  },
  {
    name: 'joao',
    cpf: 2131,
    birthDate: '29-03-1992',
    gender: 'masculino',
    adress: 'rua juarez tavora',
    status: 'Ativo'
  },
  {
    name: 'joao',
    cpf: 2131,
    birthDate: '29-03-1992',
    gender: 'masculino',
    adress: 'rua juarez tavora',
    status: 'Ativo'
  },
  {
    name: 'joao',
    cpf: 2131,
    birthDate: '29-03-1992',
    gender: 'masculino',
    adress: 'rua juarez tavora',
    status: 'Ativo'
  }
]

export default function PatientsList() {
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
          {patients.map((patient) => (
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