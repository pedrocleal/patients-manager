import { createContext, useContext, useState } from 'react';

export const PatientsContext = createContext()

export default function PatientsProvider({children}) {
  const [ patients, setPatients ] = useState(() => {
    const storedPatients = localStorage.getItem('patients');

    if(storedPatients) {
      return JSON.parse(storedPatients);
    }

    return [];
  });

  return (
    <PatientsContext.Provider value={{patients, setPatients}}>
      {children}
    </PatientsContext.Provider>
  )
}

export function usePatients() {
  return useContext(PatientsContext);
}