import React,{useState,useEffect} from 'react'
import { Button, Form, Grid, Header, Icon, Table } from 'semantic-ui-react'
import db from './../firebase';
import {institute,major} from './../options'

function Editcoursepage() {
  const [editmode,setEditmode] = useState(false);
 
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
    major:''
  })
 
  const [editcourse,setEditcourse] = useState({
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
                      lecturetime:doc.data().lecturetime,
                      institute:doc.data().institute,
                      major:doc.data().major
      })))
   ))
   }, [])

   for(var i=0;i<course.length;i++)
    {rows.push(
      <Table.Row>
        <Table.Cell>{course[i].lecturername}</Table.Cell>
        <Table.Cell>{course[i].lecturerid}</Table.Cell>
        <Table.Cell>{course[i].email}</Table.Cell>
        <Table.Cell>{course[i].coursecode}</Table.Cell>
        <Table.Cell>{course[i].coursename}</Table.Cell>
        <Table.Cell>{course[i].phonenumber}</Table.Cell>
        <Table.Cell>{course[i].lecturetime}</Table.Cell>
        <Table.Cell>{course[i].major}</Table.Cell> 
        <Table.Cell><Button icon="edit" id={course[i].coursecode} onClick={handleeditclick}></Button></Table.Cell>
      </Table.Row>
    )}
    function handleeditclick(e) {
          course.map(option => {
            if(this.id== option.coursecode)
            {
              setEditcourse({
                coursename:option.coursename,
                coursecode:option.coursecode,
                lecturerid:option.lecturerid,
                email:option.email,
                phonenumber:option.phonenumber,
                lecturername:option.lecturername,
                lecturetime:option.lecturetime,
                institute:option.institute,
                major:option.major
              })
            }
          })
          setEditmode(true);
          console.log(editcourse)
   }
   function handleSubmit(e)
   {
    course.map(option => {
      if(editcourse.coursecode==option.coursecode)
      {
        db.collection('Courses').doc(option.coursecode)
          .update({
            coursename:editcourse.coursename,
            coursecode:editcourse.coursecode,
            lecturerid:editcourse.lecturerid,
            email:editcourse.email,
            phonenumber:editcourse.phonenumber,
            lecturername:editcourse.lecturername,
            lecturetime:editcourse.lecturetime,
            institute:editcourse.institute,
            major:editcourse.major
          })
          .catch((e) => alert(e))
      }
    })
    setEditmode(false)
    console.log("Successfully")
   }

    return (
        <div>
            <Header as="h1">Edit Courses</Header>
            <Grid stretched>
            <Grid.Row>
            <Grid.Column floated="left">
            <Table striped celled unstackable color="blue">
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Lecturer Name</Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Course code</Table.HeaderCell>
                <Table.HeaderCell>Course Name</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Section</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
             {rows}  
            </Table.Body>
              </Table>
            </Grid.Column>
          
            <Grid.Row>


            {
              editmode &&
              <Grid.Column floated="right" stretched>
               <Form onSubmit={handleSubmit} >
                <Form.Group widths='equal'>
                <Form.Input fluid value={editcourse.coursename} placeholder='Course name' onChange={(e) => setEditcourse({...editcourse,coursename: e.target.value})}/>
                <Form.Input fluid value={editcourse.lecturerid} placeholder='Lecturer ID' onChange={(e) => setEditcourse({...editcourse,lecturerid: e.target.value})}/>
                <Form.Input fluid value={editcourse.email} placeholder='E-mail' onChange={(e) => setEditcourse({...editcourse,email: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input disabled fluid value={editcourse.coursecode} placeholder='Course code' onChange={(e) => setEditcourse({...editcourse,coursecode: e.target.value})}/>
                <Form.Input fluid value={editcourse.phonenumber} placeholder='Phone Number' onChange={(e) => setEditcourse({...editcourse,phonenumber: e.target.value})}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid value={editcourse.lecturername} placeholder='Lecturer name' onChange={(e) => setEditcourse({...editcourse,lecturername: e.target.value})} />
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid type="time" value={editcourse.lecturetime} label="Lecture Time" placeholder='Lecture Time' onChange={(e) => setEditcourse({...editcourse,lecturetime: e.target.value})}/>
               
                <Form.Select
                             fluid
                             label='Educational Institution'
                             value={editcourse.institute}
                             options={institute}
                             placeholder='Enter'
                             onChange={(e,data) => setEditcourse({...editcourse,institute: data.value})}
                 />
                 <Form.Select
                             fluid
                             label='Major'
                             value={editcourse.major}
                             options={major}
                             placeholder='Enter'
                             onChange={(e,data) => setEditcourse({...editcourse,major: data.value})}
                 />
                
                </Form.Group> 
                <Button size="large" primary type="submit">Confirm</Button>
                </Form>
               
              </Grid.Column>}
              </Grid.Row>
            
            </Grid.Row>
            
            </Grid>
            

        </div>
    )
}



function Editform(){
  return (
    <Form>

    </Form>
  )
}
export default Editcoursepage
