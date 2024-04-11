import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import NovoAluno from './pages/NovoAluno';

import NavBar from './components/NavBar';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Container>

          <NovoAluno/>

        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
