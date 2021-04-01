import React from 'react'
import { Container, Grid, Header , Checkbox,Form} from 'semantic-ui-react'
import './studentsignup.css';

export default function Studentsignup() {
    const institute = [
        { key: 'MIS', text: 'MIS', value: 'MIS' },
        { key: 'BA', text: 'Business Administration', value: 'Business Administration' },
        { key: 'o', text: 'Computer Science', value: 'Computer Science' },
      ]
    const major = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]
        
    return (
        <div>
            <Header as="h1">Sign Up For Student</Header>
            <Grid>
                <Grid.Column width={8} className="Studentsignup__form">
                <Form>
                <Form.Group widths='equal'>
                <Form.Input fluid  placeholder='Email' />
                <Form.Input fluid  placeholder='Student name' />
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
                <Form.Select
                             fluid
                             label='Educational Institution'
                             options={institute}
                             placeholder='Gender'
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             options={major}
                             placeholder='Gender'
                 />
                
                </Form.Group> 
                </Form>
                </Grid.Column>
                <Grid.Column width={7}>
                <Header as="h3">Conditions for joining the program</Header>
                <Container textAlign="left" className="Studentsignup__terms">
                    <ol>
                        <li>The obligation to attend.</li>
                        <li>Not to voilate public morals regulations.</li>
                        <li>Follow the instructions and regulations of the education sector in jubail.</li>
                        <li>Absence is counted and the student will be banned from the program if the permitted hours are 3 hours only.</li>
                    </ol>
                </Container>
                <Checkbox label='Agree' />
                </Grid.Column>
            </Grid>
       
        </div>
    )
}
