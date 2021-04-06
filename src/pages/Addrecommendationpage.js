import React,{useState,useEffect} from 'react'
import { Button,Icon,Checkbox, Grid, Header, Segment,Table } from 'semantic-ui-react'
import db from './../firebase';


function Addrecommendationpage() {
  const [assistant,setAssistant] = useState({
    name:'',
    id:'',
    email:'',
    phonenumber:'',
    institute:'',
    major:''
  })
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
    email:''
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
            })
          ))
          ))
 };

 function getassistantdetails(){
 
  //get assistant professor profile details  
  db.collection("Assistant Professor").doc(user).onSnapshot(doc => (
    setAssistant({
                  
                    name:doc.data().name,
                    id:doc.data().id,
                    email:doc.data().email,
                    phonenumber:doc.data().phonenumber,
                    institute:doc.data().institute,
                    major:doc.data().major,
                   
    },getstudentlecturer())))
}

  useEffect(() => {
   getassistantdetails()

   }, [])
  var rows = [];
  for(var i=0;i<studentlecturerdata.length;i++)
  {
    if(assistant.major ==studentlecturerdata[i].major)
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
          <Table.Cell> <Checkbox toggle checked={studentlecturerdata[i].recommendation}  id={studentlecturerdata[i].id} onChange={handlecheckbox}/></Table.Cell>
        </Table.Row>
      )
    }
}

function handlecheckbox(e) {
  setStudentlecturerdata(studentlecturerdata.map(option => {
    if(e.target.id==option.id)
        option.recommendation = !option.recommendation
    return option
  }))
//   console.log(course)  
}
function handlesubmit(e) {
  var count=0;
          studentlecturerdata.map(option => {
    
              db.collection('Student Lecturer').doc(option.docid)
                .update({recommendation:option.recommendation})
                .catch((e) => alert(e))
            
          })
          alert("Successfully updated recommendation.");
}
 

function selectall(){
  setStudentlecturerdata(studentlecturerdata.map(option => {
    
        option.recommendation = true
    return option
  }))
}
    return (
        <div>
            <Grid divided>
                          <Grid.Column width={6}>
                              
                           <Button size='massive' disabled >Profile Information</Button>
                          <Segment>
                          <Grid>
                          <Grid.Column width={8} textAlign="left">
                          <Header as='h4'>Assistant Professor ID :</Header>
                          <Header as='h4'>Name :</Header>
                          <Header as='h4'>Email :</Header>
                          <Header as='h4'>Phone :</Header>
                          <Header as='h4'>Specialization :</Header>
                          <Header as='h4'>Institute :</Header>
                          </Grid.Column>
                          <Grid.Column width={8} textAlign="left">
                          <Header as='h5'>{assistant.id}</Header>
                          <Header as='h5'>{assistant.name}</Header>
                          <Header as='h5'>{assistant.email}</Header>
                          <Header as='h5'>{assistant.phonenumber}</Header>
                          <Header as='h5'>{assistant.major}</Header>
                          <Header as='h5'>{assistant.institute}</Header>
                          </Grid.Column>
                          </Grid>
                          </Segment>
                          </Grid.Column>

                    <Grid.Column width={10}>
                    <Button size='massive' disabled >Add recommendation</Button>
                    <Button size="large" floated="right" style={{marginBottom:"20px"}} onClick={selectall}>Select all</Button>
          
                   <div className="Profile__courses">
                    <Grid stackable>
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
                      
                      </Table.Row>
                      </Table.Header>

                      <Table.Body>
                      {rows}
                      </Table.Body>
      </Table> 
      <Button primary size="large" onClick={handlesubmit}>Confirm</Button>
                    
                    </Grid>        
                    </div>
                    </Grid.Column>
                
            </Grid>
          
        </div>
    )
}

export default Addrecommendationpage
