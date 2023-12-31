import { useSelector } from 'react-redux';
import { Carousel, Accordion, Button, Stack, Container, Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCards } from '../../../redux/homeReducer';
import LevelIndcator from '../../features/LevelIndicator';

const Home = () => {
  const cards = useSelector(getAllCards);
  // console.log(cards);

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

      <Accordion defaultActiveKey='0' flush>
        {cards.map((card) => (
          <Accordion.Item eventKey={card.id} key={card.id}>
            <Accordion.Header>
              <Container as='div'>
                <Row className='justify-content-md-center'>
                  <Col sm={2}>
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        alt={card.title}
                        src={`${process.env.PUBLIC_URL}/images/map/${card.thumbnail}.png`}></Figure.Image>
                    </Figure>
                  </Col>
                  <Col sm={8}>
                    {card.title}
                    <Col>{card.params.distance}</Col>
                  </Col>
                  <Col sm={2}>
                    <LevelIndcator>{card.params.level}</LevelIndcator>
                  </Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <Stack gap={3}>
                <div></div>
                {card.descriptionShort}
                <Link className='ms-auto' to={`/card/${card.id}`}>
                  <Button variant='info'>Więcej informacji</Button>
                </Link>
              </Stack>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Home;
