import { ChartColumnDecreasing } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";
import { ResultCalcInterface } from "@/interfaces/dashboard";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { LegendGraphicsComponent } from "@/view/authenticated/home/graphics/legend-graphics";
import { FormattedDataForGraphic } from "@/view/authenticated/home/graphics/rechart-type-musician/formatted-data-for-graphic";

interface RechartTypeMusicianProps {
  data: ResultCalcInterface | undefined;
}

export function RechartTypeMusician({ data }: RechartTypeMusicianProps) {
  const { chartData, legendData } = FormattedDataForGraphic({ data });

  return (
    <Card className="w-full mt-1 sm:-mt-9">
      <CardHeader className="relative">
        <CardDescription>
          <div className="flex justify-between">
            Status
            <ChartColumnDecreasing />
          </div>
        </CardDescription>
        <CardContent className="p-0">
          <ChartContainer config={{}} className="min-h-[200px] max-h-[200px] w-full">
            <div className="w-full overflow-x-auto">
              <div className="flex flex-col mt-5">
                <BarChart width={720} height={150} data={chartData}>
                  <YAxis
                    width={40}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => value.toString()}
                    domain={[0, "dataMax + 2"]}
                  />
                  <XAxis dataKey="category" tickLine={false} tickMargin={10} axisLine={false} />
                  <Bar dataKey="musicians" fill="#0097b2" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="musicians" position="top" style={{ fontSize: 12 }} />
                  </Bar>
                  <Bar dataKey="organists" fill="#A8E6CF" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="organists" position="top" style={{ fontSize: 12 }} />
                  </Bar>
                </BarChart>

                <div className="flex justify-center">
                  <LegendGraphicsComponent legendData={legendData} />
                </div>
              </div>
            </div>
          </ChartContainer>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
