import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'
import * as ROUTE from './../routes'

function Adminpanelpage() {
    return (
        <div>
            <Grid padded columns="equal">
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.UPLOADCOURSE}><Button size="massive" basic>Upload Courses</Button></Link>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.DROPCOURSE}><Button size="massive" basic>Drop Courses</Button></Link>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.SELECTLECTURER}><Button size="massive" basic>Select Lecturer</Button></Link>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.APPROVECOURSE}>
                <Button size="massive" basic>Approve courses</Button>
                </Link>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.EDITCOURSE}>
                <Button size="massive" basic>Edit courses</Button>
                </Link>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.ADDADMIN}>
                <Button size="massive" basic>Add admin account</Button>
                </Link>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Link to={ROUTE.ADDASSISTANT}>
                <Button size="massive" basic>Add Assistant professor account</Button></Link>
                </Grid.Column>
                
            </Grid>
            
        </div>
    )
}

export default Adminpanelpage
