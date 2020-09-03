import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup,Input } from 'reactstrap';

const ModalExample = (props) => {
  const {
    className,
    list,
    addDish
  } = props;

  const [modal, setModal] = useState(false);

  const [dish, setDish] = useState(
    {
    dishName : "",
    price : "" , 
    image : "" , 
    id : "" , 
  }
  );

  const toggle = () => setModal(!modal);

  const {dishName ,price ,image } = dish ; 

  const getAndSendNewValues =()=>{
  const id=list.length
  addDish({id,dishName,price,image})
  toggle();
     
 }
 
  return (
    <div>
      <Button className="btn-sm py-0 btn-info" onClick={toggle}>Add +</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add dish +</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label >Dish :</Label>
        <Input type="text" value={dishName}  onChange= {(e)=>setDish({...dish, dishName : e.target.value }) }  name="dish" id="dish" placeholder="Add dish Name" />
      </FormGroup>
      <FormGroup>
        <Label >Image :</Label>
        <Input type="text" value={image} onChange={(e)=>setDish({...dish, image :  e.target.value })} name="image" id="image" placeholder="Add image url" />
      </FormGroup>
      <FormGroup>
        <Label >Price :</Label>
        <Input type="text" value={price} onChange={(e)=>setDish({...dish, price : e.target.value })} name="price" id="price" placeholder="Add price" />
      </FormGroup>
      </Form> 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={getAndSendNewValues}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;