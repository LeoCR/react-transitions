const defaults = {
  screens: [
    {name: 'screen1', open: true},
    {name: 'screen2', open: false},
    {name: 'screen3', open: false}
  ]
}

const NavReducer = (state = defaults, action) => {
  switch(action.type){
    case 'SET_SCREENS':
    state = {
      screens: action.payload
    }
    break;
  }

  return state;
}

export default NavReducer