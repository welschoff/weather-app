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
    <div className="grid h-dvh max-h-dvh overflow-hidden px-10 py-5 gap-5">
      <Header />
      <Title />
      <Search />
      <div className="grid grid-cols-[70%_auto] gap-5 overflow-hidden">
        <div className="grid grid-rows-[1fr_auto_auto] gap-5 overflow-hidden">
          <TodayCard />
          <Details />
          <DailyForecast />
        </div>
        <div className="overflow-hidden">
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
