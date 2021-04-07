import React,{useState} from 'react'
import { Button, Form, Header, Message, Segment,Select } from 'semantic-ui-react'
import './../Forms/Formlogin.css'
import {login, logout } from '../../firebase';
import { useHistory } from "react-router-dom";
import db from '../../firebase';
import * as ROUTES from './../../routes'

const roles = [
  { key: 'Student', value: 'Student', text: 'Student' },
  { key: 'Student Lecturer', value: 'Student Lecturer', text: 'Student Lecturer' },
  { key: 'Assistant Professor', value: 'Assistant Professor', text: 'Assistant Professor' },
  { key: 'Admin', value: 'Admin', text: 'Admin' },
]

function Formlogin() {

  const [data,setData] = useState({
    email:'',
    password:''
  })
  const [role,setRole] = useState('');
  var check = false;
  let history = useHistory();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       //use role.role
       const user = await login(data);
      //  check if user exists with the same role
     await  db.collection(role.role)
      .doc(user.uid)
      .get()
      .then((snaps) => {
                       if(!snaps.exists)
                       {
                               alert("User doesn't exists with the same role, check if you chose the correct role.")
                               logout(false);
                               localStorage.clear();
                               check = true
                       }
                  })

      //  console.log("this is check"+check)
       localStorage.setItem('uid',user.uid);
       localStorage.setItem('role',role.role);

     
       //to check admin rights
       const adminrights = db.collection('Admin').doc(user.uid);
         adminrights.get()
            .then((docsnapshot) => {
                    if(docsnapshot.exists)
                      return true
                    else
                      return false})

       //to check assistant professor
       const assistantrights = db.collection('Assistant Professor').doc(user.uid);
       assistantrights.get()
          .then((docsnapshot) => {
                  if(docsnapshot.exists)
                    return true
                  else
                    return false})

       if(check)
       history.push(ROUTES.HOME)
       else
       if(adminrights && role.role=='Admin')
       history.push(ROUTES.ADMINPANEL);
       else
       if(assistantrights && role.role=='Assistant Professor')
       history.push(ROUTES.ADDRECOMMENDATION);
       else
       history.push(ROUTES.PROFILE);
    }
    catch (e) {
      alert(e);
    }
  }
  // const [{},dispatch] = useStateValue();
  //     dispatch({
  //       type: actionTypes.SET_USER,
  //       user: localStorage.getItem('uid'),
  //   });

  
      return (
        <div className="Formlogin__container">
            <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <div className="Formlogin__usertype">
          <Header as='h3' textAlign='center'  content='User Type' />
          <Select placeholder='Select your country' options={roles}   onChange={(e,data) => setRole({...role,role:data.value})}/>
          </div>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' 
          onChange={(e) => setData({...data,email:e.target.value})}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => setData({...data,password:e.target.value})}
          />
          
          <a >Forgot Password?</a>
      
          <Button color='teal' fluid size='large'>
            Login
          </Button>

        </Segment>
      </Form>
      <Message>
        New to us? <a href={ROUTES.SIGNUPOPTIONS}>Sign Up</a>
      </Message>
        </div>
    )
}

export default Formlogin
