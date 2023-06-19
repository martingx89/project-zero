import { useSelector } from 'react-redux';
import { getAllImages } from '../../../redux/heroReducer';

const Home = () => {
  const images = useSelector(getAllImages);
  console.log(images);
  return;
};

export default Home;
