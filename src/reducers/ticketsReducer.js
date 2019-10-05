const initialState = {
    tickets: [
        {
            id: 1,
            title: 'title1',
            description: 'plop1',
            state: 'DOING'
        },
        {
            id: 2,
            title: 'title2',
            description: 'plop2',
            state: 'DONE'
        }
    ]
}

export const tickets = (state = initialState, {type, ticket, ticketUpdate, id}) => {
    switch(type) {
        case 'ADD_TICKET':
            return {
                ...state,
                tickets: [...state.tickets, ticket]
            };
        case 'MODIFY_TICKET':
            return {
                ...state,
                tickets: state.tickets.map((ticket) => (ticket.id !== id) ? ticket : ticket = ticketUpdate)
            };
        case 'DELETE_TICKET':
        return {
            ...state,
            tickets: state.tickets.filter(ticket => ticket.id !== id)
        };
        default:
            return state;
    }
}