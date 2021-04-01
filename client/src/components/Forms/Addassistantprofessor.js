import React from 'react'
import { Container, Grid, Header , Checkbox,Form, Button} from 'semantic-ui-react'
import './studentsignup.css';

export default function Addassistantprofessor() {
    const major = [
        { key: 'MIS', text: 'MIS', value: 'MIS' },
        { key: 'BA', text: 'Business Administration', value: 'Business Administration' },
        { key: 'CS', text: 'Computer Science', value: 'Computer Science' },
        { key: 'CE', text: 'Civil Engineering', value: 'Civil Engineering' },
        { key: 'ME', text: 'Mechanical Engineering', value: 'Mechanical Engineering' },
        { key: 'IT', text: 'Information Technology', value: 'Information Technology' },
        { key: 'CS', text: 'Chemical Engineering Technology', value: 'Chemical Engineering Technology' },
        { key: 'CS', text: 'Skill of IT', value: 'Skill of IT' },
        { key: 'CS', text: 'Skill of precision machinery and control', value: 'Skill of precision machinery and control' },
      ]
    const institute = [
        { key: 'JUC', text: 'JUC', value: 'JUC' },
        { key: 'JIC', text: 'JIC', value: 'JIC' },
        { key: 'JTI', text: 'JTI', value: 'JTI' },
      ]
        
    return (
        <div>
            <Header as="h1">Add Assistant Professor Account</Header>
            <Form style={{maxWidth:"600px",display:"relative",margin:"0 auto"}}>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Assistant Professor name' />
                <Form.Input fluid  placeholder='E-mail' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Assistant professor ID' />
                <Form.Input fluid  placeholder='Phone number' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Password' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Select
                             fluid
                             label='Educational Institution'
                             options={institute}
                             placeholder='Enter'
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             options={major}
                             placeholder='Enter'
                 />
                
                </Form.Group> 
                <Button size="large" primary>Activate Account</Button>
                </Form>
                
        </div>
    )
}
