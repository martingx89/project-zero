import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCardById } from '../../../redux/cardReducer';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import Map from '../../views/Map/Map';

const Card = () => {
  const { id } = useParams();
  const selectedCard = useSelector((state) => getCardById(state, id));
  const navigate = useNavigate();
  // console.log(selectedCard);
  const returnHandle = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <>
      <PageTitle>{selectedCard.title}</PageTitle>
      <Map></Map>
      <Button onClick={returnHandle}>Back</Button>
    </>
  );
};

export default Card;
