import { FC } from 'react';
import block from 'bem-cn-lite';

import './Sidebar.css';

const playlistOffer = block('playlist-offer');

type PlaylistOfferProps = {
  text?: string;
  imgSrc?: string;
  onClick?: VoidFunction;
};

const PlaylistOffer: FC<PlaylistOfferProps> = ({ text, imgSrc, onClick }) => {
  return (
    <a className={playlistOffer()} href="/">
      <img className={playlistOffer('img')} src={imgSrc} alt={text} />
      <span className={playlistOffer('text')}>{text}</span>
    </a>
  );
};

export default PlaylistOffer;
