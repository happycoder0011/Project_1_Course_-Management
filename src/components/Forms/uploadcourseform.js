import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { Grid, Header , Form, Button} from 'semantic-ui-react'
import db, { register } from '../../firebase';

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
  

export default function Uploadcourseform() {
    let history = useHistory();
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
            <Header as="h1">Upload Courses</Header>
            <Grid>
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
                <Button size="large" primary>Sign Up</Button>
                </Form>
                </Grid.Column>
            </Grid>
       
        </div>
    )
}
