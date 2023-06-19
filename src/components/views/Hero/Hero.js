import { randomGenerator } from '../../../utils/randomGenerator';

const Hero = () => {
  const number = randomGenerator(1, 3);
  return (
    <>
      <h1>{number}</h1>
    </>
  );
};

export default Hero;
