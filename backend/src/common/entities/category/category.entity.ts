import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from 'typeorm';
import { InstrumentEntity } from 'src/common/entities/instrument/instrument.entity';

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100 })
    value: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @OneToOne(() => InstrumentEntity, (instrument) => instrument.id_category)
    instruments: InstrumentEntity[];
}
