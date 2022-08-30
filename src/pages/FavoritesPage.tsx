import { useState } from 'react';
import Playlist from '../components/Playlist/Playlist';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Title from '../components/Title/Title';
import { MUSIC_DATA } from '../data';

const FavoritesPage = () => {
  const data = MUSIC_DATA.slice(-10);

  const [search, setSearch] = useState('');

  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
  };
  return (
    <main className="main">
      <div className="main-content">
        <Search query={search} onChange={changeValueHandler} />
        <Title text="Мои треки" />
        <Playlist tracks={data} loading={false} />
      </div>
      <Sidebar isOffersShown={false} />
    </main>
  );
};

export default FavoritesPage;
