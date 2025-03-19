import { useDashboardStore } from "@/store/dashboard";
import { CardComponent } from "./card-component";
import { RechartTypeInstrument } from "./rechart-type-instrument";
import { RechartTypeMusician } from "./rechart-type-musician";

export function HeaderHomeComponent() {
  const { data } = useDashboardStore();
  const totalValues = data?.resultCalc;
  const typeInstrument = data?.resultCalcTypes;

  return (
    <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-6 md:grid-rows-5">
      <div className="col-span-1 md:col-span-2 md:row-span-2">
        <CardComponent title="Músicos" value={totalValues?.musicians.total || 0} linkImage="/musico.png" />
      </div>

      <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3">
        <CardComponent title="Organistas" value={totalValues?.organists.total || 0} linkImage="/organista.png" />
      </div>

      <div className="col-span-1 md:col-span-2 md:row-span-5 md:col-start-5">
        <RechartTypeInstrument data={typeInstrument} />
      </div>

      <div className="col-span-1 md:col-span-4 md:row-span-3 md:row-start-3">
        <RechartTypeMusician data={totalValues} />
      </div>
    </div>
  );
}
