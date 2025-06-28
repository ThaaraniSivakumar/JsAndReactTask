import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const AddTransactionForm =(props)=>{

    const [customerAmount , setCustomerAmount] = useState('')
    const [customerDescription , setCustomerDescription] = useState('')
    const [type , setType] = useState('')
    const handleSave = () => {
        const customer = {
      customerAmount: customerAmount,
      customerName: customerDescription,
      type: type,
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
          <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>David</option>
            <option>Soniya</option>
            <option>John</option>
            <option>Prabha</option>

          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' placeholder="Enter Description" onChange={(e)=> setCustomerDescription(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control  placeholder="Enter Amount" onChange={(e)=> setCustomerAmount(e.target.value)}/>
        </Form.Group>
              
          <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelectoption" onChange={(e)=> setType(e.target.value)}>
            <option>Debit</option>
            <option>Credit</option>
          </Form.Select>
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
