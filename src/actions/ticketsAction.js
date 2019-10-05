export const addTicketAction = ticket => ({
    type: 'ADD_TICKET',
    ticket
});

export const modifyTicketAction = (ticketId, ticketUpdate) => ({
    type: 'MODIFY_TICKET',
    id: ticketId,
    ticketUpdate
});

export const deleteTicketAction = ticketId => ({
    type: 'DELETE_TICKET',
    id: ticketId
});