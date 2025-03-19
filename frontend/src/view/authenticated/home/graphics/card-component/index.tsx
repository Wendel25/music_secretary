import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CardHomComponent {
  title: string;
  value: number;
  linkImage: string;
}

export function CardComponent({ title, value, linkImage }: CardHomComponent) {
  return (
    <Card className="w-full max-h-[130px]">
      <CardHeader className="relative">
        <CardDescription>
          <div className="flex justify-between">
            {title}
            <img src={linkImage} alt="icons card" width={30} height={30} />
          </div>
        </CardDescription>
        <CardTitle>
          <NumberTicker value={value} startValue={0} className="text-4xl font-semibold tabular-nums text-color_logo" />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
