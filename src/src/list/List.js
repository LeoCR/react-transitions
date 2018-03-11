import React, {Component} from 'react'
import styled from 'styled-components'
import ListRow from './ListRow'
import ListSearch from './ListSearch'
import Add from 'react-icons/lib/md/add'
import {TransitionGroup} from 'react-transition-group'

const List = props => {
  
  const renderRow = item => (
    <ListRow key={item.id} handleRemove={props.handleRemove} data={item} />
  )

  return (
    <Col>
      
      <FlexCenter>
        <ListSearch handleSearch={props.handleSearch}/>
        <AddItem onClick={props.handleAdd}><Add size={26} /></AddItem>
      </FlexCenter>

      <TransitionGroup component={Ul}>
        {props.source.map(item => renderRow(item))}
      </TransitionGroup>
      
    </Col>
  )

}

export default List


const Flex = styled.div`
  display: flex;
`

const FlexCenter = Flex.extend`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Col = Flex.extend`
  flex-direction: column;
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 4px;
  margin: 20px 0;
`

const AddItem = styled.button`
  background: #444;
  color: #fff;
  width: 40px;
  margin: 0 0 0 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  &:hover {
    background: #555
  }
`