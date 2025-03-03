import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('ministries')
export class MinistriesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100 })
    value: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
