import { useState } from 'react';
import Filter from '../components/Filter/Filter';
import Playlist from '../components/Playlist/Playlist';
import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/Sidebar';
import Title from '../components/Title/Title';
import { useGetTracksQuery } from '../store/tracksAPI';

const MainPage = () => {
  const { data = [], isLoading } = useGetTracksQuery();
  const [search, setSearch] = useState('');

  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value.toLowerCase());
  };

  return (
    <main className="main">
      <div className="main-content">
        <Search query={search} onChange={changeValueHandler} />
        <Title text="Треки" />
        <Filter tracks={data} />
        <Playlist tracks={data} loading={isLoading} />
      </div>
      <Sidebar />
    </main>
  );
};

export default MainPage;
