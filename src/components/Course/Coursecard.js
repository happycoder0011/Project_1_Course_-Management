import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import db from '../../firebase';

function Coursecard({unsubscribe=false,coursecode,coursename,lecturername,dayoflecture,lecturetime,institute}) {
  
  let user = localStorage.getItem('uid');
  function addtostudentcourses(e)
  {
    var courseid = e.currentTarget.id;
    var query = db.collection("Student").doc(user).collection('course').doc(courseid)
    query.get()
         .then((snapshot) => {
           if(snapshot.exists)
           {alert('You already have subsribed for this course.')}
           else
           {query.set({
              coursename:coursename,
              lecturername:lecturername,
              dayoflecture:dayoflecture,
              lecturetime:lecturetime,
              institute:institute
            })}})
  }

  function deletefromstudentcourses(e) 
  {
   var courseid = e.currentTarget.id;
   db.collection('Student').doc(user).collection('course').doc(courseid).delete();

  }
  
  
  return (
        <div>
         <Card >   
            <Card.Content>
        <Card.Header>{coursename}</Card.Header>
        <Card.Meta>{institute}</Card.Meta>
        <Card.Description>
         <strong>{lecturername}</strong>
        </Card.Description>
        <Card.Meta  textAlign="left">Time :{lecturetime} </Card.Meta>
        <Card.Meta  textAlign="left">Day of Lecture : {dayoflecture}</Card.Meta>
        
      </Card.Content>
      {
          unsubscribe &&
          <Card.Content extra>
          <div className='ui two buttons' id={coursecode} onClick={deletefromstudentcourses}>
            <Button   color='red' >
              Unsubscribe
            </Button>
          </div>
        </Card.Content> 
}
{ !unsubscribe &&
        <Card.Content extra>
        <div className='ui two buttons' id={coursecode} onClick={addtostudentcourses}  >
          <Button   color='green' >
            Subscribe
          </Button>
        </div>
      </Card.Content>   
      }
    </Card>
        </div>
    )
}

export default Coursecard
