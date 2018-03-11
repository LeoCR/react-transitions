import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import * as NavActions from './NavActions'

class Nav extends Component {

  render(){

    const {getScreen, toScreen, nextScreen, prevScreen} = this.props

    return (

      <Links>
        <Link onClick={prevScreen}>Prev Screen</Link>
        <Link onClick={nextScreen}>Next Screen</Link>
        <Link onClick={() => { toScreen('screen1') }}>Screen 1</Link>
        <Link onClick={() => { toScreen('screen2') }}>Screen 2</Link>
        <Link onClick={() => { toScreen('screen3') }}>Screen 3</Link>
      </Links>

    )
  }

}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps, {...NavActions})(Nav)


const Links = styled.div`
  display: flex;
  margin: 1px;
  flex-wrap: wrap;
`

const Link = styled.a`
  flex: 1 0 auto;
  background: #555;
  font-family: Roboto;
  padding: 8px;
  text-align: center;
  margin: 1px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #666;
  }
`