import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WeddingContract } from '../schemas/wedding-contract.schema';
import { Model } from 'mongoose';
import { IWeddingContractsRepository } from './wedding-contracts.repository.interface';

@Injectable()
export class WeddingContractsRepository implements IWeddingContractsRepository {
  constructor(
    @InjectModel(WeddingContract.name)
    private weddingContractModel: Model<WeddingContract>,
  ) {}

  async create(weddingContract: Omit<WeddingContract, '_id'>): Promise<string> {
    const newWeddingContract = new this.weddingContractModel(weddingContract);
    const createdWeddingContract = await newWeddingContract.save();
    return createdWeddingContract._id.toString();
  }

  async getByOwner(owner: string): Promise<WeddingContract[]> {
    return this.weddingContractModel.find({ owner });
  }
}
