import { ResultCalcInterface } from "@/interfaces/dashboard";

interface RechartTypeMusicianProps {
    data: ResultCalcInterface | undefined;
}

export function FormattedDataForGraphic({ data }: RechartTypeMusicianProps) {
    const chartData = [
        {
            category: "Culto Oficial",
            musicians: data?.musicians?.status.culto_oficial || 0,
            organists: data?.organists?.status.culto_oficial || 0,
        },
        {
            category: "Ensaio",
            musicians: data?.musicians?.status.ensaio || 0,
            organists: data?.organists?.status.ensaio || 0,
        },
        {
            category: "Oficializado",
            musicians: data?.musicians?.status.oficializado || 0,
            organists: data?.organists?.status.oficializado || 0,
        },
        {
            category: "Reunião Jovens",
            musicians: data?.musicians?.status.reuniao_jovens || 0,
            organists: data?.organists?.status.reuniao_jovens || 0,
        },
    ];

    const legendData = [
        { label: "Músicos", color: "#0097b2" },
        { label: "Organistas", color: "#A8E6CF" },
    ];

    return { chartData, legendData };
}