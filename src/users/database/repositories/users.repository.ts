import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { IUsersRepository } from './users.repository.interface';
import { UserMapper } from 'src/users/mappers/user.mapper';
import { GetUserDto } from 'src/users/rest/dto/get-user.dto';
import { UserDto } from 'src/users/rest/dto/user.dto';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: User): Promise<string> {
    const newUser = new this.userModel(user);
    const createdUser = await newUser.save();
    return createdUser._id.toString();
  }

  async getById(id: string): Promise<GetUserDto> {
    const user = await this.userModel.findOne({ _id: id });
    return UserMapper.dbToGetUserDto(user._id.toString(), user);
  }

  async getByEmail(email: string): Promise<UserDto> {
    const user = await this.userModel.findOne({ email });
    return UserMapper.dbToUserDto(user._id.toString(), user);
  }

  async update(id: string, user: Partial<User>): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
