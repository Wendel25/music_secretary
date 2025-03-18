import { ChartPie } from "lucide-react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { TypesCalcInterface } from "@/interfaces/api/dashboard";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface RechartTypeInstrumentProps {
  data: TypesCalcInterface | undefined;
}

export function RechartTypeInstrument({ data }: RechartTypeInstrumentProps) {
  const colors = ["#0097b2", "#A8E6CF", "#FF6F61"];
  
  const chartData = data ? Object.entries(data).map(([key, value], index) => ({ name: key, value: value, fill: colors[index % colors.length] })) : [];

  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <CardDescription>
          <div className="flex justify-between">
            Naipes
            <ChartPie />
          </div>
        </CardDescription>
        <CardContent>
          <ChartContainer config={{}} className="mx-auto aspect-square max-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent nameKey="value" hideLabel />} />
                <Pie data={chartData} dataKey="value" labelLine={false} nameKey="name" />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="flex gap-4 mt-5 justify-center">
            {chartData.map((entry, index) => (
              <div key={`legend-${index}`} className="flex items-center justify-center">
                <div className="w-4 h-4 mr-2 rounded-sm" style={{ backgroundColor: colors[index % colors.length] }} />
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
