import { ChartColumnDecreasing } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { ResultCalcInterface } from "@/interfaces/api/dashboard";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { LegendGraphicsComponent } from "@/view/authenticated/home/header/legende-graphics";
import { FormattedDataForGraphic } from "./formatted-data-for-graphic";

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
              <ResponsiveContainer width="100%" height="100%">
                <div className="flex flex-col mt-5">
                  <BarChart width={720} height={150} data={chartData}>
                    <YAxis
                      width={40}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => value.toString()}
                      domain={["dataMin", "dataMax"]}
                      ticks={Array.from({ length: 4 }, (_, index) => index * 1)}
                    />
                    <XAxis dataKey="category" tickLine={false} tickMargin={10} axisLine={false} />
                    <Bar dataKey="musicians" fill="#0097b2" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="organists" fill="#A8E6CF" radius={[4, 4, 0, 0]} />
                  </BarChart>

                  <div className="flex justify-center">
                    <LegendGraphicsComponent legendData={legendData} />
                  </div>
                </div>
              </ResponsiveContainer>
            </div>
          </ChartContainer>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
