import React,{useState}  from 'react'
import Card from './item'
import ModalAdd from "./modalAdd"
import {useSelector} from 'react-redux' ;
import {getList , deleteItem , addItem , updateItem} from "./redux/actions/actions"

const List =(props)=>{
  
   
//UseSelector instead of Connect method ( REDUX HOOKS ) : 

const list = useSelector(state => state.items)
const dispatch = useDispatch() ; 

const deleteDish=(id)=>{
   dispatch(deleteItem(id));
   
   console.log("hello delete func !:",id)
}

  const modifyDish=(item)=>{
   dispatch(updateItem(item));
     console.log("item from List Component:",item)
  }


 const addDish=(item)=>{
  dispatch(addItem(item));
   console.log(item) ; 
   
}

  
 return (
   <div>
<ModalAdd list={list} addDish={addDish}/>
<div className="myStyle d-flex flex-wrap justify-content-center ">
   {list.length===0?<div style={{marginTop:20,fontSize:16}}>No items !</div>:props.list.map((element,index)=><Card key={element.id} item={element} deleteDish={deleteDish}  modifyDish={modifyDish}/>)}
   </div> 
   </div>
   )
}


// const mapStateToProps=(state)=>{
//    return{
//       list : state.items
//    }
// }
// const NewList = connect(mapStateToProps,{getList, deleteItem, updateItem, addItem})(List)

export default List ; 