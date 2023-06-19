import { useDispatch, useSelector } from 'react-redux';
import { getAllImages } from '../../../redux/heroReducer';

const Hero = () => {
  const images = useSelector(getAllImages);
  console.log(images);
  const dispatch = useDispatch();
  return (
    <>
      <h1>IMG is here</h1>
    </>
  );
};

export default Hero;
