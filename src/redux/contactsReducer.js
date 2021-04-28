import { combineReducers } from 'redux';
import actionTypes from './types';

const contacts = {

    items: [],
    filter: '',
};

const items = (state = contacts.items, {type, payload}) => {
switch (type) {
  case actionTypes.ADD:
// console.log(payload)
   return [ ...state,payload];


    case actionTypes.DELETE:
      return state.filter(
        ({id}) => id !== payload,
      );
  default: return state;
}
};
const filter = (state = contacts.filter, action) => {
  return state;
};

//eslint-disable-next-line
export default combineReducers ({
    items, filter
})