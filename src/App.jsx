import { useState } from 'react'
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import data from "./data/contacts.json";
import { nanoid } from "nanoid";
import css from "./App.module.css";


function App() {
  const [contact, setContact] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || data
  );

  const [searchValue, setSearchValue] = useState("");

  const handleDelete = (id) => {
    setContact(contact.filter((cont) => cont.id !== id));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const searchedContacts = contact.filter((cont) =>
    cont.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContact([...contact, newContact]);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox searchValue={searchValue} onSearch={handleSearch} />
      <ContactList contacts={searchedContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
