interface LegendItem {
  label: string;
  color: string;
}

interface ChartLegendProps {
  legendData: LegendItem[];
}

export function LegendGraphicsComponent({ legendData }: ChartLegendProps) {
  return (
    <div className="flex gap-4 mt-5 justify-center">
      {legendData.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center justify-center truncate">
          <div className="w-4 h-4 mr-2 rounded-sm" style={{ backgroundColor: entry.color }} />
          <span className="text-sm truncate w-[50px] sm:w-[90px]">{entry.label}</span>
        </div>
      ))}
    </div>
  );
}
