import React,{useState,useEffect} from 'react'
import { Button, Header, Table ,Checkbox,Grid} from 'semantic-ui-react'
import db from './../firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from './../routes'

function Dropcoursepage() {
    const [course,setCourse] = useState({
      coursename:'',
      coursecode:'',
      lecturerid:'',
      email:'',
      phonenumber:'',
      lecturername:'',
      dayoflecture:'',
      lecturetime:'',
      institute:'',
      major:'',
      delete: false
    })
    var rows = []
     useEffect(() => {
      db.collection("Courses").onSnapshot(snapshot => (
        setCourse(snapshot.docs.map(doc => ({
                        coursename:doc.data().coursename,
                        coursecode:doc.data().coursecode,
                        lecturerid:doc.data().lecturerid,
                        email:doc.data().email,
                        phonenumber:doc.data().phonenumber,
                        lecturername:doc.data().lecturername,
                        dayoflecture:doc.data().dayoflecture,
                        lecturetime:doc.data().lecturetime,
                        institute:doc.data().institute,
                        major:doc.data().major,
                        delete:false
        })))
     ))
     }, [])

     for(var i=0;i<course.length;i++)
      {rows.push(
        <Table.Row>
          <Table.Cell>{course[i].coursecode}</Table.Cell>
          <Table.Cell>{course[i].coursename}</Table.Cell>
          <Table.Cell>{course[i].email}</Table.Cell>
          <Table.Cell>{course[i].dayoflecture}</Table.Cell>
          <Table.Cell>{course[i].institute}</Table.Cell>
          <Table.Cell>{course[i].lecturerid}</Table.Cell>
          <Table.Cell>{course[i].lecturername}</Table.Cell>
          <Table.Cell>{course[i].lecturetime}</Table.Cell>
          <Table.Cell>{course[i].major}</Table.Cell> 
          <Table.Cell> <Checkbox  checked={!course[i].delete} onClick={handlecheckbox} id={course[i].coursecode}/></Table.Cell>
        </Table.Row>
      )}
      function handlecheckbox(e) {
          setCourse(course.map(option => {
            if(e.target.id==option.coursecode)
                option.delete = !option.delete
            return option
          }))
       //   console.log(course)  
       }

       function handlesubmit(e) {
         var count=0;
                 course.map(option => {
                   if(option.delete == true)
                   {
                     db.collection('Courses').doc(option.coursecode).delete();
                   }
                 })
                 alert("Dropped courses successfully!!");
       }

         return (
        <div>
          <Grid>
            <Grid.Row>
            <Link to={ROUTES.ADMINPANEL}><Button size="large"  floated="left" as="div" primary icon="leftarrow">Back</Button></Link>
            </Grid.Row>
            
            <Grid.Row centered>
            <Header as="h1">Drop Courses</Header>
            </Grid.Row>
            
            <Grid.Row>
                    
                  <Table striped celled unstackable color="blue">
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Course Code</Table.HeaderCell>
              <Table.HeaderCell>Course Name</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>Day of Lecture</Table.HeaderCell>
              <Table.HeaderCell>Institute</Table.HeaderCell>
              <Table.HeaderCell>Lecturer ID</Table.HeaderCell>
              <Table.HeaderCell>Lecturer Name</Table.HeaderCell>
              <Table.HeaderCell>Lecture Time</Table.HeaderCell>
              <Table.HeaderCell>Major</Table.HeaderCell>
              <Table.HeaderCell>Drop(uncheck to drop)</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {rows}     
          </Table.Body>
            </Table> 
            <Button primary size="large" onClick={handlesubmit}>Confirm</Button>
              
            </Grid.Row>
          </Grid>
           </div>
    )
}

export default Dropcoursepage
