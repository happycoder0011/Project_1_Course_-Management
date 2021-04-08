import React,{useState} from 'react'
import { Grid, Header , Form, Button, Divider} from 'semantic-ui-react'
import db from '../../firebase';
import * as ROUTES from './../../routes'
import {major,institute} from './../../options'
import { Link } from 'react-router-dom';

export default function Uploadcourseform() {
    
    let INITIAL_STATE = {
        coursename:'',
        coursecode:'',
        lecturerid:'',
        email:'',
        phonenumber:'',
        lecturername:'',
        dayoflecture:'',
        lecturetime:'',
        institute:'',
        major:''
    }
    const [coursedata,setCoursedata] = useState(INITIAL_STATE)
    const handleSubmit = (e) => {
        e.preventDefault();
      
        try{
         const dbcall = db.collection('Courses').doc(coursedata.coursecode)
         dbcall.get()
            .then((docsnapshot) => {
                    if(docsnapshot.exists)
                    {
                        alert("this course id already exists!")
                    }
                    else
                    {
                        dbcall.set({
                            coursename:coursedata.coursename,
                            coursecode:coursedata.coursecode,
                            lecturerid:coursedata.lecturerid,
                            email:coursedata.email,
                            phonenumber:coursedata.phonenumber,
                            lecturername:coursedata.lecturername,
                            dayoflecture:coursedata.dayoflecture,
                            lecturetime:coursedata.lecturetime,
                            institute:coursedata.institute,
                            major:coursedata.major,
                            approved:false
                        })
                         setCoursedata(INITIAL_STATE);
                        alert("registered successfully")
                    }
            })
}   
catch(e) {
  alert(e.message)
}}
    return (
        <div>
             <Grid>
               <Grid.Row>
               <Link to={ROUTES.ADMINPANEL}><Button as="div" size="large"  floated="left" as="div" primary icon="leftarrow">Back</Button></Link>
               </Grid.Row>
                <Grid.Row centered>
                <Header as="h1" textAlign="center" >Upload Courses</Header>
                <Divider/>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width={16} className="Studentsignup__form">
                <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input fluid value={coursedata.coursename} placeholder='Course name' onChange={(e) => setCoursedata({...coursedata,coursename: e.target.value})}/>
                <Form.Input fluid value={coursedata.lecturerid} placeholder='Lecturer ID' onChange={(e) => setCoursedata({...coursedata,lecturerid: e.target.value})}/>
                <Form.Input fluid value={coursedata.email} placeholder='E-mail' onChange={(e) => setCoursedata({...coursedata,email: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid value={coursedata.coursecode} placeholder='Course code' onChange={(e) => setCoursedata({...coursedata,coursecode: e.target.value})}/>
                <Form.Input fluid value={coursedata.phonenumber} placeholder='Phone Number' onChange={(e) => setCoursedata({...coursedata,phonenumber: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid value={coursedata.lecturername} placeholder='Lecturer name' onChange={(e) => setCoursedata({...coursedata,lecturername: e.target.value})} />
                <Form.Input fluid value={coursedata.dayoflecture} placeholder='The day of the lecturer' onChange={(e) => setCoursedata({...coursedata,dayoflecture: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid type="time" value={coursedata.lecturetime} label="Lecture Time" placeholder='Lecture Time' onChange={(e) => setCoursedata({...coursedata,lecturetime: e.target.value})}/>
               
                <Form.Select
                             fluid
                             label='Educational Institution'
                             value={coursedata.institute}
                             options={institute}
                             placeholder='Enter'
                             onChange={(e,data) => setCoursedata({...coursedata,institute: data.value})}
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             value={coursedata.major}
                             options={major}
                             placeholder='Enter'
                             onChange={(e,data) => setCoursedata({...coursedata,major: data.value})}
                 />
                
                </Form.Group> 
                <Button size="large" primary>Upload</Button>
                </Form>
                </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </div>
    )
}
