import { randomGenerator } from '../../../utils/randomGenerator';
import HeroPicture from './HeroPicture/HeroPicture';

const Hero = () => {
  const number = randomGenerator(1, 3);
  return (
    <>
      <HeroPicture id={number} title='lesko' type='hero'></HeroPicture>
    </>
  );
};

export default Hero;
