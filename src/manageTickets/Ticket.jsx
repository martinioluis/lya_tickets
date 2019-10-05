import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTicketAction } from '../actions/ticketsAction'
import ModifyForm from '..//ModifyForm';
import { Button, Col } from 'reactstrap';
import './Ticket.css';

const Ticket = ({id, title, description, state }) => {
    const dispatch = useDispatch();
    const deleteTicket = (ticketId) => dispatch(deleteTicketAction(ticketId));
    return (
        <div className="Ticket">
            <h1>title: {title}</h1>
            <p>description: {description}</p>
            <p>{state}</p>
            <Button color='danger' onClick={() => deleteTicket(id)}>X</Button>

            <h2>Modify Ticket {id}</h2>
            <Col lg={12}>
            <ModifyForm id={id} title={title} description={description} state={state}/>
            </Col>
        </div>
    );
}

export default Ticket;