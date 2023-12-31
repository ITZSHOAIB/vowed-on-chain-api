import { User } from '../database/schemas/user.schema';
import { CreateUserDto } from '../rest/dto/create-user.dto';
import { GetUserDto } from '../rest/dto/get-user.dto';
import { UpdateUserDto } from '../rest/dto/update-user.dto';
import { UserDto } from '../rest/dto/user.dto';

export class UserMapper {
  static dbToGetUserDto(id: string, user: User): GetUserDto {
    const { fullName, email, phoneNumber, verified } = user;
    return {
      id,
      fullName,
      email,
      phoneNumber,
      verified,
    };
  }

  static dbToUserDto(id: string, user: User): UserDto {
    const { fullName, email, phoneNumber, verified, password } = user;
    return {
      id,
      fullName,
      email,
      phoneNumber,
      verified,
      password,
    };
  }

  static createUserDtoToDb(user: CreateUserDto): User {
    const { fullName, email, phoneNumber, password } = user;
    return {
      fullName,
      email,
      phoneNumber,
      password,
    };
  }

  static updateUserDtoToDb(user: UpdateUserDto): Partial<User> {
    const { fullName, email, phoneNumber, verified } = user;
    return {
      ...(fullName && { fullName }),
      ...(email && { email }),
      ...(phoneNumber && { phoneNumber }),
      ...(verified && { verified }),
    };
  }
}
