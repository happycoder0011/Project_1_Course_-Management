import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment,Select } from 'semantic-ui-react'
import './../Forms/Formlogin.css'
function Formlogin() {
    const countryOptions = [
        { key: 'Student', value: 'Student', text: 'Student' },
        { key: 'Student Lecturer', value: 'Student Lecturer', text: 'Student Lecturer' },
        { key: 'Assistant Professor', value: 'Assistant Professor', text: 'Assistant Professor' }]
    return (
        <div className="Formlogin__container">
            <Form size='large'>
        <Segment stacked>
          <div className="Formlogin__usertype">
          <Header as='h3' textAlign='center'  content='User Type' />
          <Select placeholder='Select your country' options={countryOptions} />
          </div>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          
          <a href='#'>Forgot Password?</a>
      
          <Button color='teal' fluid size='large'>
            Login
          </Button>

        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
        </div>
    )
}

export default Formlogin
