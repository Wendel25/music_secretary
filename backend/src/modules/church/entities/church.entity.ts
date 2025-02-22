import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('churches')
export class ChurchEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 36 })
    name: string;

    @Column({ type: 'varchar', length: 36 })
    city: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}