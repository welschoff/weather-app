import './App.css';
import DailyForecast from './components/DailyForecast';
import Details from './components/Details';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import Search from './components/Search';
import Title from './components/Title';
import TodayCard from './components/TodayCard';

function App() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Header />
      <Title />
      <Search />
      <TodayCard />
      <Details />
      <DailyForecast />
      <HourlyForecast />
    </div>
  );
}

export default App;
