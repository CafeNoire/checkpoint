import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from "./components/SimpleForm";
import Container from 'react-bootstrap/esm/Container';
import './App.css'


function App() {
    return (
      <div>
        <Container>
          <SimpleForm></SimpleForm>
        </Container>

      </div>
    );   
}


export default App;