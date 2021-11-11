import { useState } from 'react';
import Input from '../Input';

export default function Main() {

  const [ searchInputValue, setSearchInputValue ] = useState('');

  function handleInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  return (
    <div>
      <Input placeholder="Buscar..." value={searchInputValue} onChange={handleInputChange}/>
    </div>
  )
}