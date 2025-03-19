import { ResultCalcInterface } from "@/interfaces/api/dashboard";

interface RechartTypeMusicianProps {
  data: ResultCalcInterface | undefined;
}

export function RechartTypeMusician({ data }: RechartTypeMusicianProps) {
  console.log(data);

  return (
    <div className="">
      <p>teste</p>
    </div>
  );
}
