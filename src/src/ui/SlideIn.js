import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

const SlideIn = props => {

  return (

    <Transition 
      appear
      unmountOnExit
      mountOnEnter
      in={props.in}
      timeout={{ enter: 0, exit: 500 }}>

      {status => (
        <Panel
          bg={props.bg}
          status={status}>
          {props.children}
        </Panel>
      )}

    </Transition>
  )

}


const Panel = styled.div`
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
  min-height: 100%;
  padding: 20px;
  top: 0;
  left: 0;
  font-size: 24px;
  position: absolute;
  color: #fff;
  display: inline-block;
  background-color: ${props=>props.bg ? props.bg : '#cccccc'};
  transform: translate3d(0, 20px, 0);
  opacity: 0;
  ${props => props.status === 'entered' && `
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}

`

export default SlideIn