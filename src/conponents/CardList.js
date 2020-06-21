import React from 'react';

import Card from './Card';
import ErrorBoundry from './ErrorBoundry';

const CardList = ({ robots }) => {
  return (
    <div>
      <ErrorBoundry>
        { 
          robots.map(robot => {
            return (
              
              <Card 
                key={ robot.id } 
                id={ robot.id } 
                name={ robot.name } 
                email={ robot.email }
              />
            )
          }) 
        }
      </ErrorBoundry>
    </div>
  )
}

export default CardList;