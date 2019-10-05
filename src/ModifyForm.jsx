import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { modifyTicketAction } from './actions/ticketsAction';

const ModifyForm = ({id, title, description, state}) => {
  const [ticket, setTicket] = useState({
      id: id,
      title: title,
      description: description,
      state: state
  });
  const dispatch = useDispatch();
  const modifyTicket = (id, ticket) => dispatch(modifyTicketAction(id, ticket));

  const onChange = event => {
    setTicket({
      ...ticket,
      [event.target.name]: event.target.value
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    
    modifyTicket(id, {
        id: id,
        title: ticket.title,
        description: ticket.description,
        state: ticket.state
    });

    setTicket({
        id: id,
        title: ticket.title,
        description: ticket.description,
        state: ticket.state
    });
  }
  return (
      <div className='ModifyForm'>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
            <Label>Title </Label>
            <Input name='title' type='text' placeholder={title} onChange={onChange}/>
            </FormGroup>
            <FormGroup row>
            <Label>Description </Label>
            <Input name='description' type='textarea' placeholder={description} onChange={onChange}/>
            </FormGroup>
            <FormGroup tag='fieldset'>
            <FormGroup check>
                <Label check>
                <Input type="radio" name="state"  value='TODO' onChange={onChange}/>
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
            <Button type='submit'>Modify Ticket</Button>
        </Form>
      </div>
      
  )
}

export default ModifyForm;