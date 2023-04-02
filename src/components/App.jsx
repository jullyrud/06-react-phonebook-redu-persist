import { Form } from './form/Form'
import { Info } from './info/Info'
import { Filter } from './filter/Filter'
import { nanoid } from 'nanoid'
import { Wrap } from './App.styled'
import { useSelector, useDispatch } from "react-redux"
import { addContact, deleteContact } from './reduce/contactsSlice'
import { setFilter } from './reduce/filtersSlice'



export function App () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filters)

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
    dispatch(addContact(contact))
    console.log(contacts);
  }
  
  function deleteContactFunct(id) {
    dispatch(deleteContact(id))
  }
  
  function onFilterChange(e) {
   dispatch(setFilter(e.target.value))
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
      <Filter onFilterChange={onFilterChange} filter={filter} />
            <Info contacts={filteredContacts()}
              onDelBtnClick={deleteContactFunct} />
          </Wrap>
       </>
    ) 

}