import { useState } from "react";
import EditModal from "../EditModal";
import { EditButton, RemoveButton, TableRowData } from "./styles";

export default function Patients({ name, cpf, birthDate, gender, adress, status, id, onRemove }) {

  const [ editModalOpen, setEditModalOpen ] = useState(false);

  return (
    <>  
      <EditModal clickedId={id} isOpen={editModalOpen} onRequestClose={() => setEditModalOpen(false)}/>
      <TableRowData>
        <td>{name}</td>
        <td>{cpf}</td>
        <td>{birthDate}</td>  
        <td>{gender}</td>
        <td>{adress}</td>
        <td>{status}</td>
        <td>
          <EditButton onClick={() => setEditModalOpen(prevState => !prevState)}>EDITAR</EditButton>   
          <RemoveButton onClick={() => onRemove(id)}>REMOVER</RemoveButton>   
        </td>
      </TableRowData>
    </>
  )
}