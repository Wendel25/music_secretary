import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('churches')
export class ChurchEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    city: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
