import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCardById } from '../../../redux/cardReducer';
import PageTitle from '../../common/PageTitle/PageTitle';

const Card = () => {
  const { id } = useParams();
  const selectedCard = useSelector((state) => getCardById(state, id));
  console.log(selectedCard);
  return (
    <>
      <PageTitle>{selectedCard.title}</PageTitle>
    </>
  );
};

export default Card;
