import block from 'bem-cn-lite';

import { Link } from 'react-router-dom';
import playlist1 from '../../assets/img/playlist1.png';
import playlist2 from '../../assets/img/playlist2.png';
import playlist3 from '../../assets/img/playlist3.png';

const playlistOffers = block('playlist-offers');
const playlistOffer = block('playlist-offer');

// const collections = [playlist1, playlist2, playlist3];
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
    <div className={playlistOffers()}>
      {collections.map((collection, index) => (
        <Link
          className={playlistOffer()}
          to={`/collection/${index + 1}`}
          key={collection.name}
        >
          <img
            className={playlistOffer('img')}
            src={collection.picture}
            alt={collection.picture}
          />
          <span className={playlistOffer('text')}>{collection.name}</span>
        </Link>
      ))}
    </div>
  );
};
