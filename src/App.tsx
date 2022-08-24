import './App.css';

import { FC } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LoginForm from './components/Form/LoginForm';
// import SignUpForm from './components/Form/SignUpForm';
import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import Title from './components/Title/Title';
import Filter from './components/Filter/Filter';
import Playlist from './components/Playlist/Playlist';
import Sidebar from './components/Sidebar/Sidebar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

const App: FC = () => {
  return (
    <div className="App">
      <div className="content">
        <Navigation />
        <main className="main">
          <Search />
          <Title text="Треки" />
          <Filter />
          <Playlist />
        </main>
        <Sidebar />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;
