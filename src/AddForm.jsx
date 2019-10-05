import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTicketAction } from './actions/ticketsAction';

const AddForm = () => {
  const id = useSelector(state => state.tickets.tickets[state.tickets.tickets.length - 1].id);
  const [ticket, setTicket] = useState({});
  const dispatch = useDispatch();
  const addTicket = (ticket) => dispatch(addTicketAction(ticket));

  const onChange = event => {
    setTicket({
      ...ticket,
      [event.target.name]: event.target.value
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    
    addTicket({
      id: id + 1,
      title: ticket.title,
      description: ticket.description,
      state: ticket.state
    });

    setTicket({});
  }
  return (
      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <Label>Title </Label>
          <Input name='title' type='text' placeholder='Title' onChange={onChange}/>
        </FormGroup>
        <FormGroup row>
          <Label>Description </Label>
          <Input name='description' type='textarea' placeholder='Description' onChange={onChange}/>
        </FormGroup>
        <FormGroup tag='fieldset'>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="state"  value='TODO' onChange={onChange} checked/>
              Todo
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="state" value='DOING' onChange={onChange}/>
              Doing
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="state" value='DONE' onChange={onChange}/>
              Done
            </Label>
          </FormGroup>
        </FormGroup>
        <Button type='submit'>Add Ticket</Button>
      </Form>
  )
}

export default AddForm;