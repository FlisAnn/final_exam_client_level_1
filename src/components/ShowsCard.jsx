import { mapSeries } from 'cypress/types/bluebird';
import React from 'react'
import { Card } from "semantic-ui-react";

const ShowsCard = ({ shows }) => {
  return (
    <Card 
      data-cy='shows-index'>
{}    
    </Card>
  )
}

export default ShowsCard
