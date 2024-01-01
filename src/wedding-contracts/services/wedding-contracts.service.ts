import { Inject, Injectable } from '@nestjs/common';
import {
  IWeddingContractsRepository,
  WEDDING_CONTRACTS_REPOSITORY,
} from '../database/repositories/wedding-contracts.repository.interface';
import { CreateWeddingContractsDto } from '../rest/dto/create-wedding-contracts.dto';
import { WeddingContractsMapper } from '../mappers/wedding-contracts.mapper';
import { WeddingContractDto } from '../rest/dto/wedding-contract.dto';

@Injectable()
export class WeddingContractsService {
  constructor(
    @Inject(WEDDING_CONTRACTS_REPOSITORY)
    private readonly weddingContractsRepository: IWeddingContractsRepository,
  ) {}

  async createWeddingContract(
    owner: string,
    createWeddingContractsDto: CreateWeddingContractsDto,
  ) {
    const weddingContractdb =
      WeddingContractsMapper.createWeddingContractsDtoToDb(
        owner,
        createWeddingContractsDto,
      );
    return await this.weddingContractsRepository.create(weddingContractdb);
  }

  async getWeddingContractsByOwner(
    owner: string,
  ): Promise<WeddingContractDto[]> {
    const weddingContractsDb =
      await this.weddingContractsRepository.getByOwner(owner);
    return weddingContractsDb.map((contract) =>
      WeddingContractsMapper.dbToWeddingContractDto(contract),
    );
  }
}
