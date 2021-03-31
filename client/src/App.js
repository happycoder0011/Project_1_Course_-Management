import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar/Navbar';
import Formlogin from './components/Forms/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Formlogin/>
    </div>
  );
}

export default App;
