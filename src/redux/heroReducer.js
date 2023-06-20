import { API_URL } from '../config';

import { createActionName } from '../utils/createActionName';

// selectors
export const getAllImages = (state) => state.images;

// actions
export const GET_DATA = createActionName('GET_DATA');
// console.log(GET_DATA);

// action creators
export const getData = (payload) => ({ type: GET_DATA, payload });

export const fetchImages = () => {
  return (dispatch) => {
    fetch(`${API_URL}/images`)
      .then((res) => res.json())
      .then((images) => dispatch(getData(images)));
  };
};

const heroReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default heroReducer;
