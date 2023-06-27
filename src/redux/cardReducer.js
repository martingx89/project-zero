import { createActionName } from '../utils/createActionName';

// selectors
export const getCardById = ({ cards }, cardId) => cards.find((card) => card.id === cardId);

const cardReducer = (statePart = [], action) => {
  switch (action.type) {
    // case SHOW_DATA:
    //   return [...action.payload];
    default:
      return statePart;
  }
};

export default cardReducer;
