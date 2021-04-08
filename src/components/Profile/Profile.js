import React,{useState,useEffect} from 'react'
import { Button,Icon, Grid, Header, Segment } from 'semantic-ui-react'
import Coursecard from "../Course/Coursecard";
import "./Profile.css"
import db from './../../firebase';
import { Link,useHistory } from 'react-router-dom';
import * as ROUTES from './../../routes'

function Profile() {
let history= useHistory();
const [data,setData] = useState({
          id:'',
          name:"",
          email:'',
          phone:'',
          major:''  
        })  
const [course,setCourse] = useState({
                coursecode:'',
                coursename:'',
                lecturername:'',
                dayoflecture:'',
                lecturetime:'',
                institute:''
              })
var rows = [];

    
  
    const uid = localStorage.getItem("uid");
    const role = localStorage.getItem("role");
    console.log(uid,role)
    useEffect(() => {
       //fetch student subscribed course data
        db.collection('Student').doc(uid).collection("course").onSnapshot(snap => (
        setCourse(snap.docs.map(doc => ({
            coursecode:doc.id,
            coursename:doc.data().coursename,
            lecturername:doc.data().lecturername,
            dayoflecture:doc.data().dayoflecture,
            lecturetime:doc.data().lecturetime,
            institute:doc.data().institute
        } 
        ))
    ))) 
    
        //fetch student profile data if it exists
          db.collection(role)
            .doc(uid)
            .get()
            .then((snaps) => {
                             if(snaps.exists)
                             {
                                setData({
                                        id:snaps.data().id,
                                        name:snaps.data().studentname,
                                        email:snaps.data().email,
                                        phone:snaps.data().phonenumber,
                                        major:snaps.data().major   
                                     })
                             }
                             else
                             {
                                   history.push(ROUTES.HOME)
                             }
                        })
             
    },[])
    console.log(course)
    for(var i=0;i<course.length;i++)
    {
        if(course[i].approved!=false)
        {
        rows.push(
            <Grid.Column stretched largeScreen={6} mobile={16} tablet={16}>
            <Coursecard   coursename={course[i].coursename}
                          lecturername={course[i].lecturername}
                          lecturetime={course[i].lecturetime}
                          dayoflecture={course[i].dayoflecture}
                          institute={course[i].institute}
                          coursecode={course[i].coursecode}
                          unsubscribe={true}/>
            </Grid.Column >)
        }
    }

    return (
        <div>
            <Grid divided>
                          <Grid.Column largeScreen={6} mobile={16}>
                              
                           <Button size='massive' disabled >Profile Information</Button>
                          <Segment>
                          <Grid>
                          <Grid.Column largeScreen={8} mobile={8} textAlign="left">
                          <Header as='h4'>Student ID :</Header>
                          <Header as='h4'>Student Name :</Header>
                          <Header as='h4'>Student Email :</Header>
                          <Header as='h4'>Phone :</Header>
                          <Header as='h4'>Major :</Header>
                          </Grid.Column>
                          <Grid.Column largeScreen={8}  mobile={8} textAlign="left">
                          <Header as='h5'>{data.id}</Header>
                          <Header as='h5'>{data.name}</Header>
                          <Header as='h5'>{data.email}</Header>
                          <Header as='h5'>{data.phone}</Header>
                          <Header as='h5'>{data.major}</Header>
                          </Grid.Column>
                          </Grid>
                          </Segment>
                          </Grid.Column>

                    <Grid.Column  largeScreen={10} mobile={16} tablet={16}>
                   
                    <div className="Profile__courses">
                    <Grid stackable>
                        <Grid.Row centered>
                        <Button size='massive' disabled >Registered Courses</Button>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column floated="right">
                            <Link to={ROUTES.AVAILABLECOURSE}> <Button  icon labelPosition="right" primary floated="right">Add courses<Icon name="plus"/></Button></Link>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        {rows}
                        </Grid.Row>     
                    </Grid>        
                    </div>
                    </Grid.Column>
                
            </Grid>
        </div>
    )
}

export default Profile
