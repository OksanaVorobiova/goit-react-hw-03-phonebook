import { ContactList } from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ContactList onClick={onClick}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" name="delete" id={id}>
            Delete
          </button>
        </li>
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
