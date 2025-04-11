import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { StatusEntity } from 'src/common/entities/status/status.entity';
import { ChurchEntity } from 'src/common/entities/church/church.entity';
import { MinistriesEntity } from 'src/common/entities/ministries/ministries.entity';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';

@Entity('musician')
export class MusicianAndOrganistEntities {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 20 })
    phone: string;

    @OneToOne(() => ChurchEntity, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_church' })
    id_church: ChurchEntity;

    @OneToOne(() => MinistriesEntity, (ministry) => ministry.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_ministry' })
    id_ministry: MinistriesEntity;

    @OneToOne(() => InstrumentEntity, (instrument) => instrument.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_instrument' })
    id_instrument: InstrumentEntity;

    @OneToOne(() => StatusEntity, (status) => status.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_status' })
    id_status: StatusEntity;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
 }
