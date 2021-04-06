import React,{useState,useEffect} from 'react'
import {Header, Grid } from 'semantic-ui-react'
import Coursecard from '../components/Course/Coursecard'
import db from './../firebase';

function Availablecoursespage() {
    const [course,setCourse] = useState({
        coursecode:'',
        coursename:'',
        lecturername:'',
        dayoflecture:'',
        lecturetime:'',
        institute:'',
        approved:false
      })
    var rows = [];
    useEffect(() => {
        db.collection('Courses').onSnapshot(snap => (
            setCourse(snap.docs.map(doc => ({
                coursecode:doc.data().coursecode,
                coursename:doc.data().coursename,
                lecturername:doc.data().lecturername,
                dayoflecture:doc.data().dayoflecture,
                lecturetime:doc.data().lecturetime,
                institute:doc.data().institute,
                approved:doc.data().approved
            }  
            ))
        )))       
    }, [])

    console.log(course)
    
    for(var i=0;i<course.length;i++)
    {
        if(course[i].approved!=false)
        {
        rows.push(
            <Grid.Column width={4}>
            <Coursecard  coursename={course[i].coursename}
                          lecturername={course[i].lecturername}
                          lecturetime={course[i].lecturetime}
                          dayoflecture={course[i].dayoflecture}
                          institute={course[i].institute}
                          coursecode={course[i].coursecode}/>
            </Grid.Column >)
        }
    }

    return (
        <div>
            
            <Header as="h1">Available Courses</Header>
            <Grid stackable>
             {rows}
            </Grid>
        </div>
    )
}

export default Availablecoursespage
