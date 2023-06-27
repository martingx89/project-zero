import clsx from 'clsx';
import { colorSwitcher } from '../../utils/colorSwitcher';
import styles from './LevelIndicator.module.scss';

const LevelIndicator = (props) => {
  const currentColor = colorSwitcher(props.children);
  console.log(currentColor);

  return (
    <>
      <div className={clsx(styles.box, styles[`${currentColor}`])}>{props.children}</div>
    </>
  );
};

export default LevelIndicator;
