import { Component } from 'react';
//import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Contacts/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts!`)
      : this.setState({
          contacts: [data, ...contacts],
        });
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = e => {
    const { contacts } = this.state;

    if (e.target.name === 'delete') {
      this.setState({
        contacts: contacts.filter(contact => contact.id !== e.target.id),
      });
    }
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.handleFilterChange} value={filter} />
          <Contacts contacts={visibleContacts} onClick={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
