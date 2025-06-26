import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const AddTransactionForm =(props)=>{

    const [customerId , setCustomerId] = useState('')
    const [customerName , setCustomerName] = useState('')
    const [customerEmail , setCustomerEmail] = useState('')
    const handleSave = () => {
        const customer = {
      customerId: customerId,
      customerName: customerName,
      customerEmail: customerEmail,
    }
    props.save(customer)
    props.hide()
  }

    return(

    <div>
        <Modal show={true} size='lg'>
        <Modal.Header closeButton onClick={()=>props.hide()}>
        <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control  placeholder="Enter ID" onChange={(e)=> setCustomerId(e.target.value)}/>
        </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type='text' placeholder="Enter name" onChange={(e)=> setCustomerName(e.target.value)}/>
        </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Customer Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setCustomerEmail(e.target.value)}/>
        </Form.Group>
            </Form>    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>props.hide()}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
          </Modal>
    </div>
)
}
