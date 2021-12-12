import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async createOrUpdate(user: Users): Promise<Users> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }
}
