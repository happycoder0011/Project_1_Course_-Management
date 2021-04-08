import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Header, Grid, Button } from 'semantic-ui-react'
import Coursecard from '../components/Course/Coursecard'
import db from './../firebase';
import * as ROUTES from './../routes'

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
console.log(rows)
    return (
        <div>
            
            <Link to={ROUTES.PROFILE}><Button size="large"  floated="left" as="div" primary icon="leftarrow">Back</Button></Link>
            <Header as="h1">Available Courses</Header>
            <Grid stackable>
             {rows}
            </Grid>
        </div>
    )
}

export default Availablecoursespage
