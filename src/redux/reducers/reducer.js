const INITIAL_STATE = {
  items : 
[
    {
       id:0,
       dish:"Couscous",
       image:"couscous.jpg",
       price:"20000 dt"
    },
    {   id:1,
        dish:"Pizza",
        image:"pizza.jpg",
        price:"15000 dt"
     },
     {  id:2,
        dish:"Mixed grill",
        image:"mixed-grill.jpeg",
        price:"20000 dt"
     },
     {
        id:3,
        dish:"Seafood ",
        image:"seafood.jpg",
        price:"45000 dt"
     },
    
    ] 
} ; 



const reducer =  (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case "GET_LIST" : 
       return {...state}
    case "DELETE_ITEM":
       return {...state, items : state.items.filter((el)=>el.id!==action.payload)}
    case "UPDATE_ITEM" : 
       return {...state, items : state.items.map((el)=>el.id==action.payload.id?el=action.payload:el)}
    case "ADD_ITEM" : 
       return{...state,items:[...state.items,action.payload]}
    default  : 
  
    return state
  }
}
export default reducer ; 
