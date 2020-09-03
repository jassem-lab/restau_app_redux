import React from "react"
import ModifyModal from "./modal" 

import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button,
  } from 'reactstrap';
  

  
const Item=(props)=>{
const {id,dish,image,price}=props.item;
const {deleteDish,modifyDish}=props;

return (<div>

    <Card className="shadow m-2" style={{width:250}}>
        <CardImg top width="100%" height="150px" src={require(`./images/${image}`)} alt="Card image cap" />
        <CardBody>
           <CardTitle><strong>{dish}</strong></CardTitle>
           <CardSubtitle><strong>{price}</strong> </CardSubtitle>
           <div className="d-flex justify-content-between">
           <Button className="mt-2 btn-sm" color="danger" onClick={()=>deleteDish(id)}>Delete</Button>
           <ModifyModal modifyDish={modifyDish} item={props.item} titleButton="Modify"/>
           </div>
        </CardBody>
    </Card>

</div>)
}
export default Item