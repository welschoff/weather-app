import DailyCard from './DailyCard';
import sunny from '../assets/images/icon-sunny.webp';

function DailyForecast() {
  return (
    <div className="mt-5">
      <h2 className="mb-3">Daily Forecast</h2>
      <div className="flex gap-3 justify-between">
        <DailyCard day="Tue" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
        <DailyCard day="Wed" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
        <DailyCard day="Thu" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
        <DailyCard day="Fri" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
        <DailyCard day="Sat" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
        <DailyCard day="Sun" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
        <DailyCard day="Mon" weatherImg={sunny} maxTemp="20°" minTemp="14°" />
      </div>
    </div>
  );
}

export default DailyForecast;
