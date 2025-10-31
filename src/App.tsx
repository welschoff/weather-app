import './App.css';
import DailyForecast from './components/DailyForecast';
import Details from './components/Details';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
import Search from './components/Search';
import Title from './components/Title';
import TodayCard from './components/TodayCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-5 p-5">
        <Header />
        <Title />
        <Search />
        <TodayCard lat={52.52} lon={13.41} city="Berlin" />
        <Details />
        <DailyForecast />
        <HourlyForecast />
      </div>
    </QueryClientProvider>
  );
}

export default App;
