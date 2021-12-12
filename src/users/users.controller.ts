import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() newUser: CreateUserDto): Promise<Users> {
    const user = new Users();
    user.username = newUser.username;
    user.password = newUser.password;
    return await this.userService.createOrUpdate(user);
  }

  @Get()
  async findUsers(): Promise<Users[]>{
      return await this.userService.findAll();
  }
}
