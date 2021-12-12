import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;
}
