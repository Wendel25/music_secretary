import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/common/entities/user/user.entity';

@Injectable()
export class CalcAmountMusicianService {
    public calc(all: UserEntity[]) {
        const ministryGroups = {
            musicians: ['Músico', 'Músico - Instrutor', 'Encarregado - Local', 'Encarregado - Regional'],
            organists: ['Organista', 'Organista - Instrutora'],
        };

        const statusCounts = {
            'Ensaio': 0,
            'Reunião de Jovens': 0,
            'Culto Oficial': 0,
            'Oficializado': 0,
        };

        const countStatus = (users: UserEntity[]) => {
            return users.reduce((counts, user) => {
                const statusValue = user.id_status?.value;
                if (statusValue && counts[statusValue] !== undefined) {
                    counts[statusValue]++;
                }
                return counts;
            }, { ...statusCounts });
        };

        const musicians = {
            total: 0,
            status: { ...statusCounts },
        };

        const organists = {
            total: 0,
            status: { ...statusCounts },
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

        const musiciansWithStatus = all.filter(user => ministryGroups.musicians.includes(user.id_ministry?.value));
        musicians.status = countStatus(musiciansWithStatus);

        const organistsWithStatus = all.filter(user => ministryGroups.organists.includes(user.id_ministry?.value));
        organists.status = countStatus(organistsWithStatus);

        return {
            musicians,
            organists,
        };
    }
}
