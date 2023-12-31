import { UserDto } from 'src/users/rest/dto/user.dto';
import { User } from '../schemas/user.schema';
import { GetUserDto } from 'src/users/rest/dto/get-user.dto';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export interface IUsersRepository {
  create(user: User): Promise<string>;
  getById(id: string): Promise<GetUserDto>;
  getByEmail(email: string): Promise<UserDto>;
  update(id: string, User: Partial<User>): Promise<void>;
  delete(id: string): Promise<void>;
}
