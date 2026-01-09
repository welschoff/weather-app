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
      <div className="p-5 sm:p-10 xl:px-20 lg:h-screen lg:grid">
        <Header />
        <div
          className="
        lg:grid 
        lg:grid-rows-[auto_1fr]
        lg:content-center
        "
        >
          <div className="pb-5 2xl:pb-10">
            <Title />
            <Search />
          </div>

          <div
            className="
          gap-5 flex flex-col
          lg:grid lg:grid-cols-[2fr_1fr]
          "
          >
            <div className="flex flex-col gap-5 lg:max-h-[540px] lg:justify-between">
              <TodayCard />
              <Details />
              <DailyForecast />
            </div>
            <aside className="">
              <HourlyForecast />
            </aside>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
