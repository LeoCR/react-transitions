import React from 'react'
import SlideIn from '../ui/SlideIn'
import Users from '../users/Users'

const Screen1 = props => (

  <SlideIn bg="tomato" in={props.in}>
    <h1>Screen 1</h1>
    <Users />
  </SlideIn>

)

export default Screen1