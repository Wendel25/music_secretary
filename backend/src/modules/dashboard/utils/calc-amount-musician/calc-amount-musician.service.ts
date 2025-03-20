import { Injectable } from '@nestjs/common';
import { MusicianAndOrganistEntities } from 'src/common/entities/musician-and-organists/musician-and-organist.entity';

@Injectable()
export class CalcAmountMusicianService {
    public calc(all: MusicianAndOrganistEntities[]) {
        const ministryGroups = {
            musicians: ['Músico', 'Músico - Instrutor', 'Encarregado - Local', 'Encarregado - Regional'],
            organists: ['Organista', 'Organista - Instrutora'],
        };

        const statusMapping = {
            'Ensaio': 'ensaio',
            'Reunião de Jovens': 'reuniao_jovens',
            'Culto Oficial': 'culto_oficial',
            'Oficializado': 'oficializado',
        };

        const initializeStatusCounts = () => ({
            'ensaio': 0,
            'reuniao_jovens': 0,
            'culto_oficial': 0,
            'oficializado': 0,
        });

        const countStatus = (users: MusicianAndOrganistEntities[]) => {
            return users.reduce((counts, user) => {
                const statusValue = user.id_status?.value;
                if (statusValue === undefined) {
                    return counts;
                }
                const normalizedStatus = statusMapping[statusValue as keyof typeof statusMapping];

                if (normalizedStatus && counts[normalizedStatus] !== undefined) {
                    counts[normalizedStatus]++;
                }
                return counts;
            }, initializeStatusCounts());
        };

        const musicians = {
            total: 0,
            status: initializeStatusCounts(),
        };

        const organists = {
            total: 0,
            status: initializeStatusCounts(),
        };

        all.forEach(user => {
            const ministryValue = user.id_ministry?.value;

            if (ministryGroups.musicians.includes(ministryValue)) {
                musicians.total++;
            }

            if (ministryGroups.organists.includes(ministryValue)) {
                organists.total++;
            }
        });

        musicians.status = countStatus(all.filter(user => ministryGroups.musicians.includes(user.id_ministry?.value)));
        organists.status = countStatus(all.filter(user => ministryGroups.organists.includes(user.id_ministry?.value)));

        return {
            musicians,
            organists,
        };
    }
}
