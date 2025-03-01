import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('instruments')
export class InstrumentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => CategoryEntity, (category) => category.instruments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_category' })
    id_category: CategoryEntity;

    @Column({ type: 'varchar', length: 36 })
    value: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
