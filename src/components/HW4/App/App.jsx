import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from '../ContactForm/ContactForm';
import SearchFilter from '../SearchFilter/SearchFilter';
import ContactList from '../ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function handleFormSubmit(data) {
    const existingContact = contacts.some(
      contact => contact.name === data.name
    );
    const existingNumber = contacts.some(
      contact => contact.number === data.number
    );
    if (existingNumber || existingContact) {
      Notify.failure('Contact already exists');
    } else {
      setContacts(contacts => [
        { id: data.id, name: data.name, number: data.number },
        ...contacts,
      ]);
    }
  }

  function handleDeleteContact(contactID) {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactID)
    );
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={data => handleFormSubmit(data)} />
      <h1>Contacts</h1>
      <SearchFilter searchChange={e => setFilter(e.currentTarget.value)} />
      <ContactList
        items={contacts}
        filterVal={filter}
        deleteContact={handleDeleteContact}
      />
    </>
  );
}
