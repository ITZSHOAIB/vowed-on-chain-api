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

  async create(owner: string): Promise<string> {
    const newWeddingContract = new this.weddingContractModel({
      owner,
    });
    const createdWeddingContract = await newWeddingContract.save();
    return createdWeddingContract._id.toString();
  }

  async update(
    id: string,
    weddingContract: Partial<WeddingContract>,
  ): Promise<void> {
    await this.weddingContractModel.findByIdAndUpdate(id, weddingContract, {
      new: true,
    });
  }
}
