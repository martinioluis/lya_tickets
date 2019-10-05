import React from 'react';
import './App.css';
import TicketList from './manageTickets/TicketList';
import { Col } from 'reactstrap';
import AddForm from './AddForm';

function App() {
  return (
    <div className="App">
      <h1>Add Ticket:</h1>
      <Col lg={6}>
        <AddForm />
      </Col>
      <h2>Ticket List:</h2>
      <TicketList />
    </div>
  );
}

export default App;
