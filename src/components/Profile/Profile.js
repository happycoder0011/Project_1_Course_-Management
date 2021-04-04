import React,{useState,useEffect} from 'react'
import { Button,Icon, Grid, Header, Segment } from 'semantic-ui-react'
import Coursecard from "../Course/Coursecard";
import "./Profile.css"
import { useStateValue } from './../../StateProvider';
import db from './../../firebase';

function Profile() {
    const [data,setData] = useState({
          id:'',
          name:"",
          email:'',
          phone:'',
          major:''  
    })    
    
  
    const uid = localStorage.getItem("uid");
    const role = localStorage.getItem("role");
    console.log(uid,role)
    useEffect(async() => {
           db.collection(role)
             .doc(uid)
             .onSnapshot(
                     snaps => (
                             setData({
                                id:snaps.data().id,
                                name:snaps.data().studentname,
                                email:snaps.data().email,
                                phone:snaps.data().phonenumber,
                                major:snaps.data().major   
                             })
                     )
             )
    },[])
    return (
        <div>
            <Grid divided>
                          <Grid.Column width={6}>
                              
                           <Button size='massive' disabled >Profile Information</Button>
                          <Segment>
                          <Grid>
                          <Grid.Column width={8}>
                          <Header as='h4'>Student ID :</Header>
                          <Header as='h4'>Student Name :</Header>
                          <Header as='h4'>Student Email :</Header>
                          <Header as='h4'>Phone :</Header>
                          <Header as='h4'>Major :</Header>
                          </Grid.Column>
                          <Grid.Column width={8}>
                          <Header as='h5'>{data.id}</Header>
                          <Header as='h5'>{data.name}</Header>
                          <Header as='h5'>{data.email}</Header>
                          <Header as='h5'>{data.phone}</Header>
                          <Header as='h5'>{data.major}</Header>
                          
                          </Grid.Column>
                          </Grid>
                          </Segment>
                          </Grid.Column>






                    <Grid.Column width={10}>
                    <Button size='massive' disabled >Registered Courses</Button>
                    <Button  icon labelPosition="right" primary floated="right">Add courses<Icon name="plus"/></Button>
                    <div className="Profile__courses">
                    <Grid stackable>
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    
                    </Grid>        
                    </div>
                    </Grid.Column>
                
            </Grid>
        </div>
    )
}

export default Profile
