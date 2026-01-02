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
      <div className="p-5 lg:grid h-screen overflow-hidden">
        <Header />
        <div className="lg:px-50">
          <Title />
          <Search />
        </div>
        <div className="flex flex-col gap-5 lg:grid grid-cols-2">
          <div className="lg:col-start-1">
            <TodayCard />
            <Details />
            <DailyForecast />
          </div>
          <div className="lg:col-start-2">
            <HourlyForecast />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
