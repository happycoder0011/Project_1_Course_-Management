import React,{useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Select } from 'semantic-ui-react'
import './../Forms/Formlogin.css'
import {login,checkalongrole } from '../../firebase';
import { actionTypes } from './../../reducer';
import {useStateValue} from './../../StateProvider';
import { useHistory } from "react-router-dom";

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
  let history = useHistory();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       //use role.role
       const user = await login(data);
       console.log(user.uid);
       const check = checkalongrole(user.uid,role.role);
       console.log("this is check"+check)
       localStorage.setItem('uid',user.uid);
       localStorage.setItem('role',role.role);
       if(role.role=='Admin')
       history.push(ROUTES.ADMINPANEL);
       else
       history.push(ROUTES.PROFILE);
    }
    catch (e) {
      alert(e);
    }
  }


  
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
          
          <a href='#'>Forgot Password?</a>
      
          <Button color='teal' fluid size='large'>
            Login
          </Button>

        </Segment>
      </Form>
      <Message>
        New to us? <a href='/studentsignup'>Sign Up</a>
      </Message>
        </div>
    )
}

export default Formlogin
