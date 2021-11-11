import { GlobalStyle } from './styles/globals';
import Header from './components/Header';
import Main from './components/Main';
import PatientsProvider from './context/PatientsContext';

function App() {
  return (
    <PatientsProvider>
      <GlobalStyle />
      <Header />
      <Main />      
    </PatientsProvider>
  );
}

export default App;
