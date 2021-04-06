import React,{useState} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import db from '../../firebase';

function Coursecard({unsubscribe,coursecode,coursename,lecturername,dayoflecture,lecturetime,institute}) {
  const [col,setCol] = useState();
  
  function handleclick(e,data)
  {
    let user = localStorage.getItem('uid');
    
    var query = db.collection("Student").doc(user).collection('course').doc(coursecode)

    query.get()
         .then((snapshot) => {
           if(snapshot.exists)
           {
           alert('You already have subsribed for this course.')
           }
           else
           {
            query.set({
              coursename:coursename,
              lecturername:lecturername,
              dayoflecture:dayoflecture,
              lecturetime:lecturetime,
              institute:institute
            })
          }

         })
    
   
  }
  
  
  return (
        <div>
            <Card onClick={handleclick} >
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
          <div className='ui two buttons'>
            <Button color='red'>
              Unsubscribe
            </Button>
          </div>
        </Card.Content>    
}
    </Card>
        </div>
    )
}

export default Coursecard
