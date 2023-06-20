import { useSelector } from 'react-redux';
import { getCardById } from '../../../redux/cardReducer';
import PageTitle from '../../common/PageTitle/PageTitle';

const Card = () => {
  const cardId = useSelector(getCardById);
  console.log(cardId);
  return (
    <>
      {cardId.map((card) => (
        <PageTitle>{card.title}</PageTitle>
      ))}
    </>
  );
};

export default Card;
