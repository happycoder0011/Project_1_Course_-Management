import React,{useState} from 'react'
import { Header ,Form, Button} from 'semantic-ui-react'
import './Formlogin.css';

export default function Addadmin() {
    const [admindata,setAddadmin] = useState({
        name:'',
        email:'',
        id:'',
        phonenumber:'',
    })

    return (
        <div className="Formlogin__container">
            <Header as="h1">Add Admin Account</Header>
             
            <Form >
                <Form.Group widths='equal'>
                <Form.Input  placeholder='Admin name' />
                <Form.Input  placeholder='E-mail' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input placeholder='Admin ID' />
                <Form.Input placeholder='Phone number' />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input  placeholder='Password' />
                </Form.Group>
                <Button size="massive" primary>Activate Account</Button>
                </Form>
            
        </div>
    )
}
