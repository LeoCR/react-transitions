const defaults = {
  data: [
    { id:0, name: 'Sami' },
    { id: 1, name: 'Kellie' }
  ]
}

const UsersReducer = (state = defaults, action) => {

  switch(action.type){
      case 'SET_USERS':
      state = {
        data: action.payload
      }
  }

  return state

}

export default UsersReducer
