import { CitiesEntity } from '../cities/cities.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('churches')
export class ChurchEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 36 })
    name: string;

    @ManyToOne(() => CitiesEntity, (city) => city.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'id_city' })
    id_city: CitiesEntity;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}