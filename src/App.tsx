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
    <div>
      <Header />
      <Title />
      <Search />
      <div className="grid grid-cols-[70%_30%] gap-5 mt-10">
        <div>
          <TodayCard />
          <Details />
          <DailyForecast />
        </div>
        <div>
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
