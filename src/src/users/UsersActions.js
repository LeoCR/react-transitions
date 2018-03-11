export const handleAdd = () => {
  return (dispatch, getState) => {

    let name = prompt('Add User')

    if (name && name.trim().length){
      let data = getState().users.data
      let id = Math.random().toString(4).substr(2, 10)
      data.push({ id, name })
      dispatch({ type: 'SET_USERS', payload: data })
    }

  }
}


export const handleRemove = id => {
  return (dispatch, getState) => {

    let data = getState().users.data
    data = data.filter(item => item.id !== id)
    dispatch({ type: 'SET_USERS', payload: data })
  
  }
}

export const handleSearch = e => {
  return (dispatch, getState) => {
    

    let data = getState().users.data
    let searchTerm = e.target.value

    if (searchTerm) {

      data.forEach((item, index) => {

        if (searchTerm.trim().length) {
          if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            data[index].hidden = false;
          } else {
            data[index].hidden = true;
          }
        }

      })

      console.log(data);
      
      dispatch({ type: 'SET_USERS', payload: data })

    } else {

      data.forEach((item, index) => {
        data[index].hidden = false
      });

      dispatch({ type: 'SET_USERS', payload: data })

    }

  }
}