import { useDispatch, useSelector } from 'react-redux';
import { getAllImages } from '../../../redux/heroReducer';
import { randomGenerator } from '../../../utils/randomGenerator';

const Hero = () => {
  // const images = useSelector(getAllImages);
  // console.log(images);
  // const dispatch = useDispatch();
  const number = randomGenerator(1, 3);
  return (
    <>
      <h1>{number}</h1>
    </>
  );
};

export default Hero;
