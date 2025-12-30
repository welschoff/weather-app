type DetailCardProps = {
  header: string;
  value: number;
  unit: string;
};

function DetailCard({ header, value, unit }: DetailCardProps) {
  return (
    <div className="grid gap-5 p-3 bg-(--card-bg) w-full items-center rounded-lg pl-5 font-extralight">
      <span className="text-(--secondary-text-color) text-lg">{header}</span>
      <span className="text-4xl">
        {value}
        {unit}
      </span>
    </div>
  );
}

export default DetailCard;
