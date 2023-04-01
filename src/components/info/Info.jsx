import PropTypes from 'prop-types';
import { ContactList, ContactItem } from './Info.styled'

export function Info ({ contacts, onDelBtnClick }) {
    
    return (
        <ContactList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <span>{`${name}: ${number}`}</span>
                    <button onClick={()=>{onDelBtnClick(id)}} type="button">Delete</button>
                </ContactItem>
            ) )}
        </ContactList>
    )
}

Info.prototype = {
    contacts: PropTypes.func.isRequired,
    onDelBtnClick: PropTypes.func.isRequired,
}
 