import styles from './HeroPicture.module.scss';

const HeroPicture = () => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt='lesko'
        // eslint-disable-next-line no-undef
        src={`${process.env.PUBLIC_URL}/images/hero/hero_lesko_01.jpg`}
      />
    </div>
  );
};

export default HeroPicture;
