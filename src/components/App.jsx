import React, { useState, useEffect } from "react"
import { Form } from './form/Form'
import { Info } from './info/Info'
import { Filter } from './filter/Filter'
import { nanoid } from 'nanoid'
import { Wrap } from './App.styled'
 

export function App () {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts'))
    ?? [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]);
  const [filter, setFilter] = useState('');
 
  useEffect(() => {
   
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  function onSubmitHandler (data) {
   
    for (let cont of contacts) {
      if (data.name === cont.name) {
        return alert (`${data.name} is already in contacts`)
      } 
}

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }

    setContacts([...contacts, contact])
    console.log(contacts);
  }
  
  function deleteContact(id) {
    setContacts(contacts.filter(cont => cont.id !== id))
  }
  
  function onFilterChange(e) {
    setFilter(e.target.value)
  }
  
  function filteredContacts() {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase()))
    
  }

return (
        <>
          <Wrap>
            <h1>Phonebook</h1>
            <Form inSubmit={onSubmitHandler} />
            <h2>Contacts</h2>
            <Filter onFilterChange={onFilterChange} />
            <Info contacts={filteredContacts()}
              onDelBtnClick={deleteContact} />
          </Wrap>
       </>
    ) 

}