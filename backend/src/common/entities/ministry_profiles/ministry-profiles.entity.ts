import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';

@Entity('ministry_profiles')
export class MinistryProfilesEntities {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 20 })
    phone: string;

    @OneToOne(() => ChurchEntity, (church) => church.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_church' })
    id_church: ChurchEntity;

    @OneToOne(() => MinistriesEntity, (ministry) => ministry.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_ministry' })
    id_ministry: MinistriesEntity;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
