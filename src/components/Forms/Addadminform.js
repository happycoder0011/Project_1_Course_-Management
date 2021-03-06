import React,{useState} from 'react'
import { Header ,Form, Button,Grid, GridColumn} from 'semantic-ui-react'
import './Formlogin.css';
import db, { register } from '../../firebase';
import * as ROUTES from './../../routes';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Addadmin() {
    let history = useHistory();
    const [admindata,setAdmindata] = useState({
        name:'',
        email:'',
        id:'',
        phonenumber:'',
        password:''
    })
    const handleSubmit = async(e) => {
        e.preventDefault();
        const reg = {
            email:admindata.email,
            password:admindata.password
        }

        try{
            const user = await register(reg);
            alert("registered successfully")

            db.collection('Admin').doc(user.uid).set({
                email:admindata.email,
                name:admindata.name,
                id:admindata.id,
                phonenumber:admindata.phonenumber
            })
            history.push(ROUTES.ADMINPANEL)
        }
        catch(e) {
            alert(e.message)
        }
    }
    return (
        <div className="Formlogin__container">
            <Grid >
                <Grid.Row >
                    <Link to={ROUTES.ADMINPANEL}><Button size="large"  floated="left" as="div" primary icon="arrow left">Back</Button></Link>
                </Grid.Row>
                <Grid.Row centered>
                <Header as="h1">Add Admin Account</Header>
                </Grid.Row>
                <Grid.Row  >
                <Grid.Column>
                <Form  onSubmit={handleSubmit} style={{maxWidth:"600px",display:"relative",margin:"0 auto"}}>
                <Form.Group widths='equal'>
                <Form.Input  placeholder='Admin name' onChange={(e) => setAdmindata({...admindata,name: e.target.value})}/>
                <Form.Input  placeholder='E-mail' onChange={(e) => setAdmindata({...admindata,email: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input placeholder='Admin ID' onChange={(e) => setAdmindata({...admindata,id: e.target.value})}/>
                <Form.Input placeholder='Phone number' onChange={(e) => setAdmindata({...admindata,phonenumber: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input  placeholder='Password' type="password" onChange={(e) => setAdmindata({...admindata,password: e.target.value})}/>
                </Form.Group>
                <Button size="massive" primary>Activate Account</Button>
                </Form>
                </Grid.Column>
                </Grid.Row>
                
            </Grid>
            
        </div>
    )
}
