import styles from './LevelIndicator.module.scss';

const LevelIndicator = (props) => {
  return (
    <>
      <div className={styles.green}>{props.children}</div>
    </>
  );
};

export default LevelIndicator;
