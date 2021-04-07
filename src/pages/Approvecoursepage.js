import React,{useEffect,useState} from 'react'
import { Button, Header, Table, Checkbox } from 'semantic-ui-react'
import db from './../firebase';

import { Link } from 'react-router-dom';
import * as ROUTES from './../routes'
function Approvecoursepage() {
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
    approved:false
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
                      approved:doc.data().approved
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
        <Table.Cell> <Checkbox toggle checked={course[i].approved} onClick={handlecheckbox} id={course[i].coursecode}/></Table.Cell>
      </Table.Row>
    )}
    function handlecheckbox(e) {
        setCourse(course.map(option => {
          if(e.target.id==option.coursecode)
              option.approved = !option.approved
          return option
        }))
     //   console.log(course)  
     }

     function handlesubmit(e) {
       var count=0;
               course.map(option => {
                 if(option.approved == true)
                 {
                   db.collection('Courses').doc(option.coursecode)
                     .update({approved:true})
                     .catch((e) => alert(e))
                 
               }
               alert("Approved courses successfully!!");
     })}




    return (
        <div>
           <Link to={ROUTES.ADMINPANEL}><Button size="large"  floated="left" as="div" primary icon="arrow left">Back</Button></Link>
          
            <Header as="h1">Approve Courses</Header>
            <Button size="large" floated="right" style={{marginBottom:"20px"}}>Select all</Button>
            <Table striped celled color="blue">
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
        <Table.HeaderCell>Approve</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {rows}
      </Table.Body>
      </Table> 
      <Button primary size="large" onClick={handlesubmit}>Confirm</Button>
        </div>
    )
}

export default Approvecoursepage
