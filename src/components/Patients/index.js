import { EditButton, RemoveButton, TableRowData } from "./styles"

export default function Patients({ name, cpf, birthDate, gender, adress, status, id, onRemove, onEdit}) {
  return (
    <>
      <TableRowData>
        <td>{name}</td>
        <td>{cpf}</td>
        <td>{birthDate}</td>
        <td>{gender}</td>
        <td>{adress}</td>
        <td>{status}</td>
        <td>
          <EditButton onClick={() => onEdit(id)}>EDITAR</EditButton>   
          <RemoveButton onClick={() => onRemove(id)}>REMOVER</RemoveButton>   
        </td>
      </TableRowData>
    </>
  )
}