import { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './contacts.json';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : initialContacts;
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const addContact = ({ name, number }) => {
        if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts.`);
            return;
        }

        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const deleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};