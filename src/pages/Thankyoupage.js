import React from 'react'
import { Button, Header } from 'semantic-ui-react'

function Thankyoupage() {
    return (
        <div >
            <Button style={{marginTop:"100px"}} size="massive" color="orange">Thank you</Button>
            <Header style={{margin: '80px',}} as="h3">We have received your request and it is reviewed and evaluated. If you are accepted, you will be contacted by email to conduct the personal interview. Please pay attention to your email.</Header>
        </div>
    )
}

export default Thankyoupage
