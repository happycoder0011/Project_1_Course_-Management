import React from 'react'
import {Header, Grid } from 'semantic-ui-react'
import Coursecard from '../components/Course/Coursecard'

function Availablecoursespage() {
    return (
        <div>
            
            <Header as="h1">Available Courses</Header>
            <Grid stackable>
            <Grid.Column width={4}>
                <Coursecard/>
            </Grid.Column >
            <Grid.Column width={4}>
                <Coursecard/>
            </Grid.Column>
            <Grid.Column width={4}>
                <Coursecard/>
            </Grid.Column>
            <Grid.Column width={4}>
                <Coursecard/>
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default Availablecoursespage
