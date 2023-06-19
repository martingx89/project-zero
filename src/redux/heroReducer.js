import { createActionName } from '../utils/createAtionName';

// selectors
export const getAllImages = (state) => state.images;

// actions
export const GET_DATA = createActionName('GET_DATA');
// console.log(GET_DATA);

// action creators
export const getData = (payload) => ({ type: GET_DATA, payload });

const heroReducer = (statePart = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default heroReducer;
