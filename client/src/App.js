import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage';
import Profilepage from './pages/Profilepage';
import Signupoptionspage from './pages/Signupoptionspage';
import Studentsignup from './components/Forms/studentsignup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Profilepage/>
      <Signupoptionspage/>
      <Studentsignup/>
      <Footer/>
    </div>
  );
}

export default App;
