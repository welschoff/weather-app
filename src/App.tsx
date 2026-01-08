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
      <div className="lg:h-screen lg:grid lg:place-content-center">
        <div
          className="
        p-5 
        lg:px-15 
        lg:grid 
        lg:grid-rows-[auto_auto_1fr]
        "
        >
          <Header />

          <div>
            <Title />
            <Search />
          </div>

          <div
            className="
          gap-5 flex flex-col pt-5
          lg:grid lg:grid-cols-[2fr_1fr]"
          >
            <div className="flex flex-col gap-5 lg:max-h-[516px]">
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
