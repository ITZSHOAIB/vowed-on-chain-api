import { User } from '../database/schemas/user.schema';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { GetUserDto } from '../rest/dto/get-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import { UserDto } from '../rest/dto/user.dto';

export class UserMapper {
  static dbToGetUserDto(id: string, user: User): GetUserDto {
    const { fullName, email, verified } = user;
    return {
      id,
      fullName,
      email,
      verified,
    };
  }

  static dbToUserDto(id: string, user: User): UserDto {
    const { fullName, email, verified, password } = user;
    return {
      id,
      fullName,
      email,
      verified,
      password,
    };
  }

  static createUserDtoToDb(user: CreateUserDto): User {
    const { fullName, email, password } = user;
    return {
      fullName,
      email,
      password,
    };
  }

  static updateUserDtoToDb(user: UpdateUserDto): Partial<User> {
    const { fullName } = user;
    return {
      ...(fullName && { fullName }),
    };
  }
}
