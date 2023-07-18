import styles from './Map.module.scss';

const Map = () => {
  return (
    <>
      <div>
        <h2>Zjazd z bezmiechowej</h2>
        <iframe title='Map-1' className={styles.map} src='https://pl.frame.mapy.cz/s/bukegolero'></iframe>
        <a href='geo:49.5189208,22.4036506'>Nawiguj</a>
      </div>
    </>
  );
};

export default Map;
