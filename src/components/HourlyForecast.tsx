import HourCard from './HourCard';
import sunny from '../assets/images/icon-sunny.webp';
import dropdown from '../assets/images/icon-dropdown.svg';

function HourlyForecast() {
  return (
    <div className="bg-(--card-bg) p-4 rounded-lg">
      <div className="flex justify-between mb-3">
        <h2>Hourly Forecast</h2>
        <div className="flex gap-2 bg-[#3D3B5B] px-4 py-1 rounded-lg">
          <span>Tuesday</span>
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="grid gap-2">
        <HourCard weatherImg={sunny} time="3 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="4 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="5 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="6 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="7 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="8 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="9 PM" temp="20°" />
        <HourCard weatherImg={sunny} time="10 PM" temp="20°" />
      </div>
    </div>
  );
}

export default HourlyForecast;
