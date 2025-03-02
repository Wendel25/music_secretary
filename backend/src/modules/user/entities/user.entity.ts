import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { StatusEntity } from 'src/modules/user/entities/status.entity';
import { ChurchEntity } from 'src/modules/church/entities/church.entity';
import { MinistriesEntity } from 'src/modules/user/entities/ministries.entity';
import { InstrumentEntity } from 'src/modules/instrument/entities/instrument.entity';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password_hash: string;

    @OneToOne(() => ChurchEntity, (church) => church.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_church' })
    id_church: ChurchEntity;

    @OneToOne(() => MinistriesEntity, (ministry) => ministry.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_ministry' })
    id_ministry: MinistriesEntity;

    @OneToOne(() => InstrumentEntity, (instrument) => instrument.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_instrument' })
    id_instrument?: InstrumentEntity;

    @OneToOne(() => StatusEntity, (status) => status.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_status' })
    id_status?: StatusEntity;

    @Column({ type: 'boolean', default: true })
    first_access: boolean;

    @Column({ type: 'timestamp', nullable: true })
    first_access_at: Date;

    @Column({ type: 'boolean', default: false })
    password_changed: boolean;

    @Column({ type: 'timestamp', nullable: true })
    password_changed_at: Date;

    @Column({ type: 'timestamp', nullable: true })
    last_login_at: Date;

    @Column({ type: 'int', default: 0 })
    login_attempts: number;

    @Column({ type: 'timestamp', nullable: true })
    block_at: Date;

    @Column({ type: 'boolean', default: true })
    active: boolean;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
