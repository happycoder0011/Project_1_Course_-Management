import React,{useState,useEffect} from 'react'
import { Button, Header,Checkbox, Table } from 'semantic-ui-react'
import db from './../firebase';

function Selectlecturerpage() {
  const [studentlecturerdata,setStudentlecturerdata]  = useState([{
    docid:'',
    name:'',
    id:'',
    phonenumber:'',
    gpa:'',
    coursecode:'',
    major:'',
    institute:'',
    recommendation:'',
    email:'',
    select:''
}])
let user = localStorage.getItem("uid");
function getstudentlecturer() {
         //get list of student lecturer to be recommended
         db.collection("Student Lecturer").onSnapshot(snapshot => (
          setStudentlecturerdata(snapshot.docs.map(doc => 
            ({docid:doc.id, 
              name:doc.data().studentname,
               recommendation:doc.data().recommendation,
               coursecode:doc.data().coursecode,
               id:doc.data().id,
               email:doc.data().email,
               phonenumber:doc.data().phonenumber,
               gpa:doc.data().lecturername,
               institute:doc.data().institute,
               major:doc.data().major,
               select:doc.data().selected
            })
          ))
          ))
 };

 useEffect(() => {
  getstudentlecturer();
 }, [])
 var rows = [];
 for(var i=0;i<studentlecturerdata.length;i++)
 {
     rows.push(
       <Table.Row>
         <Table.Cell>{studentlecturerdata[i].name}</Table.Cell>
         <Table.Cell>{studentlecturerdata[i].id}</Table.Cell>
         <Table.Cell>{studentlecturerdata[i].email}</Table.Cell>
         <Table.Cell>{studentlecturerdata[i].coursecode}</Table.Cell>
         <Table.Cell>{studentlecturerdata[i].phonenumber}</Table.Cell>
         <Table.Cell>{studentlecturerdata[i].gpa}</Table.Cell>
         <Table.Cell>{studentlecturerdata[i].institute}</Table.Cell>
         <Table.Cell> <Checkbox checked={studentlecturerdata[i].recommendation} /></Table.Cell>  
         <Table.Cell> <Checkbox toggle checked={studentlecturerdata[i].select}  id={studentlecturerdata[i].id} onChange={handlecheckbox}/></Table.Cell>
       </Table.Row>
     )
}


function handlecheckbox(e) {
  setStudentlecturerdata(studentlecturerdata.map(option => {
    if(e.target.id==option.id)
        option.select = !option.select
    return option
  }))
//   console.log(course)  
}

function handlesubmit(e) {
  var count=0;
          studentlecturerdata.map(option => {
    
              db.collection('Student Lecturer').doc(option.docid)
                .update({selected:option.select})
                .catch((e) => alert(e))
            
          })
          alert("Successfully updated select.");
}
    return (
        <div>
            <Header as="h1">Select Lecturer</Header>
            <Button onClick={handlesubmit} primary size="large" floated="right" style={{marginBottom:"20px"}}>Confirm</Button>
     
            <Table striped celled color="blue">
    <Table.Header>
    <Table.Row>
                      <Table.HeaderCell>Lecturer Name</Table.HeaderCell>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>E-mail</Table.HeaderCell>
                      <Table.HeaderCell>Course code</Table.HeaderCell>
                      <Table.HeaderCell>Phone number</Table.HeaderCell>
                      <Table.HeaderCell>GPA</Table.HeaderCell>
                      <Table.HeaderCell>Section</Table.HeaderCell>
                      <Table.HeaderCell>Recommendation</Table.HeaderCell>
                      <Table.HeaderCell>Select</Table.HeaderCell>
                      </Table.Row>
                      </Table.Header>

                      <Table.Body>
                      {rows}
                      </Table.Body>      
                      </Table> 
        </div>
    )
}

export default Selectlecturerpage
