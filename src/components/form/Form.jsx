import React, { useState } from "react";
import { AddForm, Input, Label, Button } from './Form.styled'
import PropTypes from 'prop-types';



export function Form({ inSubmit }) {

  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChahge(event) {
    const { name, value } = event.target
    switch (name) {
      case "name":
        setName(value)
      
        break;
      case "number":
        setNumber(value)
        break;
      default:
        throw new console.error('something went wrong');
    }
  }
  
    function handleSubmit(event) {
    event.preventDefault()
    inSubmit({ name, number})
    reset()
  }
    
  function reset() {
    setName('')
    setNumber('')
  }
  
  return (
    <>
      <AddForm onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          value={name}
          onChange={handleChahge}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
        />
          
        <Label htmlFor="number">Number</Label>
        <Input
          type="text"
          value={number}
          onChange={handleChahge}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
        />
        <Button type="submit"> add contact </Button>
      </AddForm>
    </>
  )

} 


Form.propTypes = {
  inSubmit: PropTypes.func.isRequired
}