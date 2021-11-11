import { TableRowData } from "./styles"

export default function Patients({ name, cpf, birthDate, gender, adress, status}) {
  return (
    <TableRowData>
      <td>{name}</td>
      <td>{cpf}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{adress}</td>
      <td>{status}</td>
    </TableRowData>        
  )
}