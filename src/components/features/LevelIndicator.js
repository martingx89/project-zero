import { colorSwitcher } from '../../utils/colorSwitcher';
import styles from './LevelIndicator.module.scss';

const LevelIndicator = (props) => {
  const currentColor = colorSwitcher(props.children);

  console.log('dupa', currentColor);

  return (
    <>
      <div className={styles.box}>{props.children}</div>
    </>
  );
};

export default LevelIndicator;
