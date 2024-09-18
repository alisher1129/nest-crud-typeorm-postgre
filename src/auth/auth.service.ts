import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  public users: Auth[] = [ 
    {
      username: 'User1',
      password: 'admin',
      email: 'user1@gmail.com',
    },
    {
      username: 'User2',
      password: 'admin',
      email: 'user2@gmail.com',
    },
    {
      username: 'User3',
      password: 'admin',
      email: 'user3@gmail.com',
    },
  ];

  getUserByName(userName: string): Auth {
    // console.log("first", userName)
    const userData = this.users.find((user: Auth) => user.username === userName);
    return userData;
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
