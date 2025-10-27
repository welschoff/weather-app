import DailyCard from './DailyCard';
import sunny from '../assets/images/icon-sunny.webp';

function DailyForecast() {
  return (
    <div>
      <h2 className="pt-5 pb-5">Daily forecast</h2>
      <div className="grid grid-cols-3 gap-3">
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
