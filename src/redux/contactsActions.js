import actionTypes from './types';
import { v4 as uuidv4 } from 'uuid';


const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    name,
    number,
    id:uuidv4()
  },
});

const deleteContact = contactName => ({
  type: actionTypes.DELETE,
  payload: contactName,
});

//eslint-disable-next-line
export default { addContact, deleteContact };
