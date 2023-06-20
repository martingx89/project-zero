import { useSelector } from 'react-redux';
import { Carousel, Accordion } from 'react-bootstrap';
import { getAllCards } from '../../../redux/homeReducer';

const Home = () => {
  const cards = useSelector(getAllCards);
  console.log(cards);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={`${process.env.PUBLIC_URL}/images/hero/hero_lesko_01.jpg`}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={`${process.env.PUBLIC_URL}/images/hero/hero_lesko_02.jpg`}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={`${process.env.PUBLIC_URL}/images/hero/hero_lesko_03.jpg`}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Accordion defaultActiveKey='1' flush>
        {cards.map((card) => (
          <Accordion.Item eventKey={card.cardId}>
            <Accordion.Header>{card.title}</Accordion.Header>
            <Accordion.Body>{card.descriptionShort}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Home;
