import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Search from './components/Search';
import Title from './components/Title';
import TodayCard from './components/TodayCard';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Search />
      <TodayCard />
      <Details />
    </div>
  );
}

export default App;
