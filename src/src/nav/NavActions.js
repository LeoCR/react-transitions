export const nextScreen = () => (
  (dispatch, getState) => {

    let nav = getState().nav.screens
    let i = null

    nav.forEach((item, index) => {
      if(item.open === true){ i = index}
      item.open = false;
    })


    let next = i + 1
    i = next < nav.length ? next : i
    nav[i].open = true
    
    dispatch({
      type: 'SET_SCREENS',
      payload: nav
    })

  }
)

export const prevScreen = () => (
  (dispatch, getState) => {

    let nav = getState().nav.screens
    let i = null

    nav.forEach((item, index) => {
      if (item.open === true) { i = index }
      item.open = false
    })

    let prev = i - 1
    i = prev >= 0 ? prev : i
    nav[i].open = true
   
    dispatch({
      type: 'SET_SCREENS',
      payload: nav
    })

  }
)

export const toScreen = name => (
  (dispatch, getState) => {

    let nav = getState().nav.screens

    nav.forEach((item, index) => {
      item.open = false
      if (item.name === name) { 
        item.open = true
      }
    })


    dispatch({
      type: 'SET_SCREENS',
      payload: nav
    })

  }
)

export const getScreen = name => (
  (dispatch, getState) => {

    let nav = getState().nav.screens
    let open = null

    nav.forEach((item, index) => {
      if (item.name === name) {
         open = item.open
      }
    })

    return open

  }
)
