import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input} from 'reactstrap';

class ModalExample extends React.Component {


  constructor(props){
      super(props);
      const {dish,price,image,id}=this.props.item
      this.state={
         modal:false,
         dish,
         price,
         image,
         id
      }
  }
    
  toggle = () => this.setState({modal:!this.state.modal});
  
    getInputValues=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }

    getLastInputValues=()=>{
        const {id,dish,price,image}=this.state;
        console.log("item from Modal Component:",{dish,price,image})
        this.props.modifyDish({id,dish,price,image})
        this.toggle();
    }

  //   <-----------------------------data----------------------------------                                                                    
    // ListComponent   -------->  ItemComponent  -----------> ModalComponent
  // ----------------------------import----------------------------------->


  
  componentDidUpdate(){
    console.log('component Did Update')
  }


render(){




    const {
          className,titleButton
      } =this.props;
  return (
    <div>
      <Button className=" mt-2 btn-sm" color="primary" onClick={this.toggle}>{titleButton}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}>Modify dish</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label >Name :</Label>
        <Input type="text" name="dish" id="dish" placeholder="Add dish name" onChange={this.getInputValues} value={this.state.dish} />
      </FormGroup>
      <FormGroup>
        <Label >Image :</Label>
        <Input type="text" name="image" id="image" placeholder="Add image" onChange={this.getInputValues} value={this.state.image} />
      </FormGroup>
      <FormGroup>
        <Label >Price :</Label>
        <Input type="text" name="price" id="price" placeholder="Add price" onChange={this.getInputValues} value={this.state.price} />
      </FormGroup>
     
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.getLastInputValues}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
}

export default ModalExample;