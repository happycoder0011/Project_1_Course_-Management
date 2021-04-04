import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

function Coursecard({unsubscribe}) {
    return (
        <div>
            <Card>
            <Card.Content>
        <Card.Header>Math for management 1</Card.Header>
        <Card.Meta>JUC</Card.Meta>
        <Card.Description>
         <strong>Ahamed Saaed</strong>
        </Card.Description>
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
