import { Types } from 'mongoose';
import { WeddingContract } from '../database/schemas/wedding-contract.schema';
import { WeddingContractDto } from '../rest/dto/wedding-contract.dto';
import { CreateWeddingContractsDto } from '../rest/dto/create-wedding-contracts.dto';

export class WeddingContractsMapper {
  static dbToWeddingContractDto(
    weddingContract: WeddingContract,
  ): WeddingContractDto {
    const { _id, owner, smartContractAddress } = weddingContract;
    return {
      id: _id.toString(),
      owner: owner.toString(),
      smartContractAddress,
    };
  }

  static createWeddingContractsDtoToDb(
    owner: string,
    weddingContract: CreateWeddingContractsDto,
  ): Omit<WeddingContract, '_id'> {
    const { smartContractAddress } = weddingContract;
    return {
      owner: new Types.ObjectId(owner),
      smartContractAddress,
    };
  }
}
