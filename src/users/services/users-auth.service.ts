import { Inject, Injectable } from '@nestjs/common';
import {
  IUsersRepository,
  USERS_REPOSITORY,
} from '../database/repositories/users.repository.interface';
import { UserDto } from '../rest/dto/user.dto';

export const USERS_AUTH_SERVICE = 'USERS_AUTH_SERVICE';

@Injectable()
export class UsersAuthService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly usersRepository: IUsersRepository,
  ) {}

  async getUserByEmail(email: string): Promise<UserDto> {
    return this.usersRepository.getByEmail(email);
  }
}
