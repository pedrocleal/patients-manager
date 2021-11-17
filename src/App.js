import { GlobalStyle } from './styles/globals';
import Header from './components/Header';
import Main from './components/Main';
import PatientsProvider from './context/PatientsContext';
import Footer from './components/Footer';

function App() {
  return (
    <PatientsProvider>
      <GlobalStyle />
      <Header />
      <Main />      
      <Footer />
    </PatientsProvider>
  );
}

export default App;
