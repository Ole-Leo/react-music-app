import { Link } from 'react-router-dom';
import playlist1 from '../../assets/img/playlist1.png';
import playlist2 from '../../assets/img/playlist2.png';
import playlist3 from '../../assets/img/playlist3.png';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

type Props = {
  isLoading?: boolean;
};

export const PlaylistOffers = ({ isLoading }: Props) => {
  return (
    <div className={styles.offers}>
      {isLoading ? (
        <Skeleton
          count={3}
          baseColor="#202020"
          highlightColor="#444"
          className={styles.skeleton}
        />
      ) : (
        collections.map((collection, index) => (
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
        ))
      )}
    </div>
  );
};
