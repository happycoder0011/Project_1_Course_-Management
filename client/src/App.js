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
import Uploadcourseform from './components/Forms/uploadcourseform';
import Adminpanelpage from './pages/Adminpanelpage';
import Dropcoursepage from './pages/Dropcoursepage';
import Approvecoursepage from './pages/Approvecoursepage';
import Selectlecturerpage from './pages/Selectlecturerpage';
import Editcoursepage from './pages/Editcoursepage';
import Addadmin from './components/Forms/Addadminform';
import Addassistantprofessor from './components/Forms/Addassistantprofessor';
import Addrecommendationpage from './pages/Addrecommendationpage';


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
      <Route path={ROUTES.UPLOADCOURSE} component={Uploadcourseform}/>
      <Route path={ROUTES.THANKYOU} component={Thankyoupage}/>
      <Route path={ROUTES.ADMINPANEL} component={Adminpanelpage}/>
      <Route path={ROUTES.DROPCOURSE} component={Dropcoursepage}/>
      <Route path={ROUTES.APPROVECOURSE} component={Approvecoursepage}/>
      <Route path={ROUTES.SELECTLECTURER} component={Selectlecturerpage}/>
      <Route path={ROUTES.EDITCOURSE} component={Editcoursepage}/>
      <Route path={ROUTES.ADDADMIN} component={Addadmin}/>
      <Route path={ROUTES.ADDASSISTANT} component={Addassistantprofessor}/>
      <Route path={ROUTES.ADDRECOMMENDATION} component={Addrecommendationpage}/>
      
      </div>
      <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
