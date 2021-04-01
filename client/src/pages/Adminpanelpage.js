import React from 'react'
import { Button, Grid } from 'semantic-ui-react'

function Adminpanelpage() {
    return (
        <div>
            <Grid padded columns="equal">
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Upload Courses</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Drop Courses</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Select Lecturer</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Approve courses</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Edit courses</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Add assessment</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Add admin account</Button>
                </Grid.Column>
                <Grid.Column  mobile={16} tablet={8} computer={4}>
                <Button size="massive" basic>Add Assistant professor account</Button>
                </Grid.Column>
                
            </Grid>
            
        </div>
    )
}

export default Adminpanelpage
