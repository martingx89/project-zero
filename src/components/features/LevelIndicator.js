import styles from './LevelIndicator.module.scss';

const LevelIndicator = (props) => {
  return (
    <>
      <div className={styles.box}>{props.children}</div>
    </>
  );
};

export default LevelIndicator;
