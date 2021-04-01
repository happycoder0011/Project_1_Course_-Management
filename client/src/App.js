import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage';
import Profilepage from './pages/Profilepage';
import Signupoptionspage from './pages/Signupoptionspage';
import Studentsignup from './components/Forms/studentsignup';
import Studentlecturersignup from './components/Forms/studentlecturersignup';
import Availablecoursespage from './pages/Availablecoursespage';
import Thankyoupage from './pages/Thankyoupage';
import * as ROUTES from './routes';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Route path={ROUTES.HOME} component={Homepage}/>
      <Route path={ROUTES.PROFILE} component={Profilepage}/>
      <Route path={ROUTES.SIGNUPOPTIONS} component={Signupoptionspage}/>
      <Route path={ROUTES.STUDENTSIGNUP} component={Studentsignup}/>
      <Route path={ROUTES.STUDENTLECTURERSIGNUP} component={Studentlecturersignup}/>
      <Route path={ROUTES.AVAILABLECOURSE} component={Availablecoursespage}/>
      <Route path={ROUTES.THANKYOU} component={Thankyoupage}/>
      </div>
      <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
