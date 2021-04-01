import React from 'react'
import { Button, Divider,Icon, Form, Grid, GridColumn, Header, Image, Message, Segment } from 'semantic-ui-react'
import Coursecard from "../Course/Coursecard";
import "./Profile.css"

function Profile() {
    return (
        <div>
            <Grid divided>
                          <Grid.Column width={6}>
                              
                           <Button size='massive' disabled color="white">Profile Information</Button>
                          <Segment>
                          <Grid>
                          <Grid.Column width={8}>
                          <Header as='h4'>Student ID :</Header>
                          <Header as='h4'>Student Name :</Header>
                          <Header as='h4'>Student Email :</Header>
                          <Header as='h4'>Phone :</Header>
                          <Header as='h4'>Major :</Header>
                          </Grid.Column>
                          <Grid.Column width={8}>
                          <Header as='h5'>361308</Header>
                          <Header as='h5'>Abdullah Bushlaibi</Header>
                          <Header as='h5'>abdullah@gmail.com</Header>
                          <Header as='h5'>03298759935</Header>
                          <Header as='h5'>MIS</Header>
                          
                          </Grid.Column>
                          </Grid>
                          </Segment>
                          </Grid.Column>






                    <Grid.Column width={10}>
                    <Button size='massive' disabled color="white">Registered Courses</Button>
                    <Button  icon labelPosition="right" primary floated="right">Add courses<Icon name="plus"/></Button>
                    <div className="Profile__courses">
                    <Grid stackable>
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                            <Coursecard unsubscribe/>
                    </Grid.Column>
                    
                    </Grid>        
                    </div>
                    </Grid.Column>
                
            </Grid>
        </div>
    )
}

export default Profile
