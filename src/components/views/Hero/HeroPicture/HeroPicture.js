import styles from './HeroPicture.module.scss';
import PropTypes from 'prop-types';

const HeroPicture = ({ id, title, type }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={`${title}`}
        src={`${process.env.PUBLIC_URL}/images/hero/${type}_${title}_0${id}.jpg`}
      />
    </div>
  );
};

HeroPicture.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default HeroPicture;
