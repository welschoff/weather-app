type DetailCardProps = {
  header: string;
  value: string;
};

function DetailCard({ header, value }: DetailCardProps) {
  return (
    <div className="grid gap-2 p-2 bg-(--card-bg) w-full items-center rounded-lg pl-5">
      <span className="font-extralight">{header}</span>
      <span className="text-3xl font-light">{value}</span>
    </div>
  );
}

export default DetailCard;
