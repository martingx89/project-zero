import { API_URL } from '../config';

import { createActionName } from '../utils/createActionName';

// selectors
export const getAllCards = (state) => state.cards;

// actions
export const GET_DATA = createActionName('GET_DATA');
// console.log(GET_DATA);

// action creators
export const getData = (payload) => ({ type: GET_DATA, payload });

export const fetchCards = () => {
  return (dispatch) => {
    fetch(`${API_URL}/cards`)
      .then((res) => res.json())
      .then((cards) => dispatch(getData(cards)));
  };
};

const homeReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default homeReducer;
