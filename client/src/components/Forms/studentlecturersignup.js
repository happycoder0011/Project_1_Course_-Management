import React from 'react'
import { Container, Grid, Header , Checkbox,Form, Button} from 'semantic-ui-react'
import './studentsignup.css';

export default function Studentlecturersignup() {
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
            <Header as="h1">Sign Up For Student Lecturer</Header>
            <Grid>
                <Grid.Column width={8} className="Studentsignup__form">
                <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Email' />
                <Form.Input fluid  placeholder='Full name' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Password' />
                <Form.Input fluid  placeholder='ID' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Confirm Password' />
                <Form.Input fluid  placeholder='Phone Number' />
                </Form.Group>
                
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='GPA' />
                <Form.Input fluid  placeholder="Write the course code" />
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
                <Button size="large" primary>Sign Up</Button>
                </Form>
                </Grid.Column>
                <Grid.Column width={7}>
                <Header as="h3">Conditions for joining the program</Header>
                <Container textAlign="left" className="Studentsignup__terms">
                    <ol>
                        <li>The obligation to attend.</li>
                        <li>Not to voilate public morals regulations.</li>
                        <li>Follow the instructions and regulations of the education sector in jubail.</li>
                        <li>Atleast 14 hours must be given</li>
                        <li>The student's GPA must be 2.75 and above</li>
                        <li>The student grade for applying for course B or above.</li>
                        <li>All the Information received is correct.</li>
                    </ol>
                </Container>
                <Checkbox label='Agree' />
                </Grid.Column>
            </Grid>
       
        </div>
    )
}
