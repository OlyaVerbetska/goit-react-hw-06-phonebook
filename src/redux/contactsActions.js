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

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const changeFilter = (value)=> ({
type: actionTypes.CHANGE_FILTER,
payload: value,
})

//eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
