import today_bg from '../assets/images/bg-today-large.svg';
import sunny from '../assets/images/icon-sunny.webp';

export default function TodayCard() {
  const backgroundStyle = {
    backgroundImage: `url(${today_bg})`,
  };

  return (
    <div
      className="
        relative 
        bg-cover bg-center bg-no-repeat 
        rounded-3xl
      "
      style={backgroundStyle}
    >
      <div className="absolute inset-0 grid grid-cols-2 place-items-center">
        <div className="grid gap-1 justify-self-start ml-5">
          <span className="text-2xl font-semibold">Berlin, Germany</span>
          <span className="text-sm font-extralight">Tuesday, Aug 5, 2025</span>
        </div>
        <div className="flex justify-self-end items-center mr-5">
          <img className="w-20" src={sunny} alt="Sonnensymbol" />
          <span className="text-7xl italic">20°</span>
        </div>
      </div>
    </div>
  );
}
