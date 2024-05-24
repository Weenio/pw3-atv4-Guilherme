import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import NovoAluno from './pages/NovoAluno';
import Aluno from './pages/Alunos';
import CadEdit from './pages/EditCad'

import NavBar from './components/NavBar'
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Container>

          <Routes>
            <Route path="/" element={<NavBar/>}>
              <Route index element={<Home/>}/>
              <Route path="Alunos" element={<Aluno/>}/>
              <Route path="novoAluno" element={<NovoAluno/>}/>
              <Route path="editarCad/:id" element={<CadEdit/>}/>
            </Route>
          </Routes>

        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
