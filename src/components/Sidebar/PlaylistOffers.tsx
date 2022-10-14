import { Link } from 'react-router-dom';
import playlist1 from '../../assets/img/playlist1.png';
import playlist2 from '../../assets/img/playlist2.png';
import playlist3 from '../../assets/img/playlist3.png';

import styles from './styles.module.css';

const collections = [
  {
    picture: playlist1,
    name: 'Плейлист дня',
  },
  {
    picture: playlist2,
    name: '100 танцевальных хитов',
  },
  {
    picture: playlist3,
    name: 'Инди-заряд',
  },
];

export const PlaylistOffers = () => {
  return (
    <div className={styles.offers}>
      {collections.map((collection, index) => (
        <Link
          className={styles.offer}
          to={`/collection/${index + 1}`}
          key={collection.name}
        >
          <img
            className={styles.offerImg}
            src={collection.picture}
            alt={collection.picture}
          />
          <span className={styles.offerText}>{collection.name}</span>
        </Link>
      ))}
    </div>
  );
};
