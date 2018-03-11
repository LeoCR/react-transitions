import React, {Component} from 'react'
import {connect} from 'react-redux'
import List from '../list/List'
import * as UsersActions from './UsersActions'

class Users extends Component {
  
  render(){
    return (
      <List
        handleSearch={this.props.handleSearch}
        handleAdd={this.props.handleAdd}
        handleRemove={this.props.handleRemove}
        source={this.props.users.data}
      />
    )
  }

}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, {...UsersActions})(Users)