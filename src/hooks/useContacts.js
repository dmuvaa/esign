import { useState } from 'react';

function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [contactEmail, setContactEmail] = useState('');

  const addContact = () => {
    if (contactEmail && !contacts.includes(contactEmail)) {
      setContacts([...contacts, contactEmail]);
      setContactEmail(''); // Reset input after adding
    }
  };

  return {
    contacts,
    addContact,
    contactEmail,
    setContactEmail
  };
}

export default useContacts;
