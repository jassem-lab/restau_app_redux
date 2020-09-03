import React from "react";
import List from './list'
import "./styles.css";


class App extends React.Component {  
    
  UNSAFE_componentWillMount(){
    console.log('component will mount')
  }

  componentDidMount(){
    console.log('component Did Mount') ;
  }
   render() {   
    
    console.log('render is called ')
    
    return (       
     <> 

     <center >
       <h1 className="mb-4">بسم الله الرحمان الرحيم  </h1> 
       <h4 className="mt-4"> Add an item to list </h4>
       <h4 className="my-4  text-primary">Restaurant menu </h4>
              
        <List/>
            
       </center>
     
  </>      
);  
} 
} 


export default App;


