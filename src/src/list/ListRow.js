import React, { Component } from 'react'
import styled from 'styled-components'
import Person from 'react-icons/lib/md/person'
import Delete from 'react-icons/lib/md/delete'
import {Transition} from 'react-transition-group'

const Row = props => {

    return (
      <Transition
        unmountOnExit
        mountOnEnter
        in={props.in}
        timeout={{ enter: 0, exit: 250 }}>

        {status => (
          <Li hidden={props.data.hidden} status={status}>
            <div>
            <PersonIco size={28} />
            {props.data.name}
            </div>
            <DeleteIco onClick={() => { props.handleRemove(props.data.id) }} size={28}/>
          </Li>
          )
        }

      </Transition>
    ) 

}

export default Row

const DeleteIco = styled(Delete) `
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    fill: #555;
  }
}
`

const PersonIco = styled(Person)`
  margin: 0 10px 0 0;
  background: #e4e4e4;
  border-radius: 50%;
  padding: 3px;
`

const Li = styled.li`
  background: #fff;
  color: #999;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  max-height: 60px;
  transform: translate3d(0,10px,0);
  padding: 0;
  overflow: hidden;
  font-size: 16px;
  border-bottom: 1px solid #e2e0e0;
  display: ${props => props.hidden ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border: none;
    border-radius: 0 0 4px 4px;
  }

  &:only-child {
    border-radius: 4px;
  }

  &>div {
    padding: 15px;
  }

  ${props => props.status === 'exiting' && `
    transition: all 250ms cubic-bezier(0.77, 0, 0.175, 1);
    transform: translate3d(0, 0, 0);
    opacity: 1;
    max-height: 0;
  `}

  ${props => props.status === 'entered' && `
    transition: all 250ms cubic-bezier(0.77, 0, 0.175, 1);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  `}
`
