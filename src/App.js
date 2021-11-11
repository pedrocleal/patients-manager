import { GlobalStyle } from './styles/globals';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      {/* <Register /> */}
    </div>
  );
}

export default App;
