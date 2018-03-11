import React, { Component } from 'react'
import styled from 'styled-components'
import Search from 'react-icons/lib/md/search'

const ListSearch = props => (
    <SearchWrap>
      <SearchIcon size={30} color="#ccc" />
      <SearchInput placeholder="Search" onChange={e=>props.handleSearch(e)} type="text"/>
    </SearchWrap>
  )


export default ListSearch


const SearchIcon = styled(Search)`

`

const SearchWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`
const SearchInput = styled.input`
  outline: none;
  padding: 0 0 0 10px;
  font-family: Roboto;
  font-size: 16px;
  color: #666;
  width: 100%;
  border: none;
  appearance: none;
`