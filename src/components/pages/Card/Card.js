import { useSelector } from 'react-redux';
import { getCardById } from '../../../redux/cardReducer';

const Card = () => {
  const cardId = useSelector(getCardById);
  console.log(cardId);
  return <></>;
};

export default Card;
