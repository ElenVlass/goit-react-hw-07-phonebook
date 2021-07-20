import React, { Component } from "react";

import PhonebookForm from "./components/PhonebookForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import { ReactComponent as AddContactIcon } from "./icons/user-plus.svg";
import { ReactComponent as DeleteContactIcon } from "./icons/user-minus.svg";

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        {/* <PhonebookForm
          aria-label="Add contact"
          children={<AddContactIcon width="25" height="25" fill="#fff" />}
        />

        <h2>Contacts</h2>
        <Filter />
        <ContactList
          aria-label="Delete contact"
          children={<DeleteContactIcon width="25" height="25" />}
        /> */}
      </Container>
    );
  }
}

export default App;
