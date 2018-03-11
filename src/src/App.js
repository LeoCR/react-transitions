import React, { Component } from 'react'
import * as NavActions from './nav/NavActions'
import {connect} from 'react-redux'
import styled, {injectGlobal} from 'styled-components'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Nav from './nav/Nav'
import {global} from './ui/Styles'

injectGlobal`${global}`

class App extends Component {
  

  render() {
    
    const {getScreen} = this.props

    return (
      <Wrap>

        <Nav/>
        
        <Screens>
          <Screen1 in={getScreen('screen1')} />
          <Screen2 in={getScreen('screen2')} />
          <Screen3 in={getScreen('screen3')} />
        </Screens>

      </Wrap>
      )
  }
}


const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps, { ...NavActions })(App)

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`
const Screens = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
` 

