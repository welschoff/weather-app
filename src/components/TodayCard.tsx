import today_small from '../assets/images/bg-today-small.svg';
import sunny from '../assets/images/icon-sunny.webp';

export default function TodayCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden">
      <img
        src={today_small}
        alt="Hintergrund"
        className="w-full h-auto block"
      />
      <div className="absolute inset-0 grid gap-2 h-full place-items-center">
        <div className="grid gap-2 place-items-center self-end">
          <span className="text-3xl font-semibold">Berlin, Germany</span>
          <span className="text-lg text-(--secondary-text-color)">
            Tuesday, Aug 5, 2025
          </span>
        </div>
        <div className="flex items-center self-start">
          <img className="w-35" src={sunny} alt="Sonnensymbol" />
          <span className="text-8xl font-semibold italic">20°</span>
        </div>
      </div>
    </div>
  );
}
