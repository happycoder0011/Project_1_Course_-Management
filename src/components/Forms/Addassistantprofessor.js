import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { Container, Grid, Header , Checkbox,Form, Button} from 'semantic-ui-react';
import './studentsignup.css';
import db, { register } from '../../firebase';
import * as ROUTES from './../../routes';
const major = [
  { key: 'MIS', text: 'MIS', value: 'MIS' },
  { key: 'BA', text: 'Business Administration', value: 'Business Administration' },
  { key: 'CS', text: 'Computer Science', value: 'Computer Science' },
  { key: 'CE', text: 'Civil Engineering', value: 'Civil Engineering' },
  { key: 'ME', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
  { key: 'IT', text: 'Information Technology', value: 'Information Technology' },
  { key: 'CET', text: 'Chemical Engineering Technology', value: 'Chemical Engineering Technology' },
  { key: 'SIT', text: 'Skill of IT', value: 'Skill of IT' },
  { key: 'spm', text: 'Skill of precision machinery and control', value: 'Skill of precision machinery and control' },
]
  const institute = [
      { key: 'JUC', text: 'JUC', value: 'JUC' },
      { key: 'JIC', text: 'JIC', value: 'JIC' },
      { key: 'JTI', text: 'JTI', value: 'JTI' },
    ]
export default function Addassistantprofessor() {
  let history = useHistory();
  const [assistantdata,setAssistantdata] = useState({
    name:'',
    email:'',
    password:'',
    id:'',
    phonenumber:'',
    institute:'',
    major:''
  })
     const handleSubmit = async(e) => {
                e.preventDefault();
              //  console.log(assistantdata)
                const reg = {
                  email:assistantdata.email,
                  password:assistantdata.password
                }
        try{
          const user = await register(reg);
         // console.log(user.uid)
          alert("registered successfully")
          db.collection('Assistant Professor').doc(user.uid).set({
            email:assistantdata.email,
            name:assistantdata.name,
            id:assistantdata.id,
            phonenumber:assistantdata.phonenumber,
            major:assistantdata.major,
            institute:assistantdata.institute
        })

        history.push(ROUTES.ADMINPANEL)
        }   
        catch(e) {
          console.log(e);
        }}
    return (
        <div>
            <Header as="h1">Add Assistant Professor Account</Header>
            <Form onSubmit={handleSubmit} style={{maxWidth:"600px",display:"relative",margin:"0 auto"}}>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Assistant Professor name' onChange={(e) => setAssistantdata({...assistantdata,name: e.target.value})}/>
                <Form.Input fluid  placeholder='E-mail' onChange={(e) => setAssistantdata({...assistantdata,email: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Assistant professor ID' onChange={(e) => setAssistantdata({...assistantdata,id: e.target.value})} />
                <Form.Input fluid  placeholder='Phone number' onChange={(e) => setAssistantdata({...assistantdata,phonenumber: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Password' onChange={(e) => setAssistantdata({...assistantdata,password: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Select
                             fluid
                             label='Educational Institution'
                             options={institute}
                             placeholder='Enter'
                             onChange={(e,data) => setAssistantdata({...assistantdata,institute: data.value})}
                 
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             options={major}
                             placeholder='Enter'
                             onChange={(e,data) => setAssistantdata({...assistantdata,major: data.value})}
                 
                 />
                
                </Form.Group> 
                <Button size="large" primary>Activate Account</Button>
                </Form>
                
        </div>
    )
}
