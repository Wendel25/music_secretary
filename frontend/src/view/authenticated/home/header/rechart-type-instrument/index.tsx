import { ChartPie } from "lucide-react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { TypesCalcInterface } from "@/interfaces/api/dashboard";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LegendGraphicsComponent } from "@/view/authenticated/home/header/legende-graphics";

interface RechartTypeInstrumentProps {
  data: TypesCalcInterface | undefined;
}

export function RechartTypeInstrument({ data }: RechartTypeInstrumentProps) {
  const colors = ["#0097b2", "#A8E6CF", "#FF6F61"];

  const chartData = data
    ? Object.entries(data).map(([key, value], index) => ({
        name: key,
        value: value,
        fill: colors[index % colors.length],
      }))
    : [];

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
          <ChartContainer config={{}} className="mx-auto aspect-square min-h-[270px] max-h-[270px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent nameKey="value" hideLabel />} />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central" fontSize={14}>
                        {value}%
                      </text>
                    );
                  }}
                  labelLine={false}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          <LegendGraphicsComponent
            legendData={chartData.map((entry, index) => ({
              label: entry.name,
              color: colors[index % colors.length],
            }))}
          />
        </CardContent>
      </CardHeader>
    </Card>
  );
}
