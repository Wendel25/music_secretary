import { useDashboardStore } from "@/store/dashboard";
import { CardComponent } from "./card-component";
import { RechartTypeInstrument } from "./rechart-type-instrument";

export function HeaderHomeComponent() {
  const { data } = useDashboardStore();
  const totalValues = data?.resultCalc;
  const typeIbstrument = data?.resultCalcTypes;

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-1/2">
        <CardComponent title="Músicos" value={totalValues?.musicians.total || 0} linkImage="/musico.png" />
        <CardComponent title="Organistas" value={totalValues?.organists.total || 0} linkImage="/organista.png" />
      </div>

      <div className="w-full md:w-1/2">
        <RechartTypeInstrument data={typeIbstrument} />
      </div>
    </div>
  );
}
