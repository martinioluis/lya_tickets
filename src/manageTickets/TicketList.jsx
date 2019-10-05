import React from 'react';
import Ticket from './Ticket';
import { useSelector } from 'react-redux';

const TicketList = () => {
    const tickets = useSelector(state => state.tickets.tickets);
    return (
        <div className="TicketList">
            {tickets.map(ticket => <Ticket {...ticket} key={ticket.id}/>)}
        </div>
    );
}

export default TicketList;