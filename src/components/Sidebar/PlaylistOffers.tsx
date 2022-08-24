import { FC } from 'react';
import block from 'bem-cn-lite';
import PlaylistOffer from './PlaylistOffer';
import playlist1 from '../../assets/img/playlist1.png';
import playlist2 from '../../assets/img/playlist2.png';
import playlist3 from '../../assets/img/playlist3.png';

const playlistOffers = block('playlist-offers');

const PlaylistOffers: FC = () => {
  return (
    <div className={playlistOffers()}>
      <PlaylistOffer text="Плейлист дня" imgSrc={playlist1} />
      <PlaylistOffer
        text="100 танцевальных
хитов"
        imgSrc={playlist2}
      />
      <PlaylistOffer text="Инди-заряд" imgSrc={playlist3} />
    </div>
  );
};

export default PlaylistOffers;
