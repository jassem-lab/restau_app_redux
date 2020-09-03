//GET LIST 
const getList = () =>{

  return dispatch =>{
    dispatch({type : "GET_LIST"})
  }
}
//DELETE ITEM

const deleteItem=(id) =>{

  return dispatch =>(
    dispatch({type : "DELETE_ITEM", payload : id})
  )
}

// UPDATE ITEM 

const updateItem=(item) => {

  return dispatch => (
    dispatch({type : "UPDATE_ITEM", payload : item })
  )
}

// ADD NEW ITEM 

const addItem =(item) =>{
  
  return dispatch => (
    dispatch({type :"ADD_ITEM", payload : item})
  )
}

export {getList, deleteItem , updateItem, addItem} 