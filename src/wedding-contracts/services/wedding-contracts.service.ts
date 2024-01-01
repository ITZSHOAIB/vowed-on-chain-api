import { Inject, Injectable } from '@nestjs/common';
import {
  IWeddingContractsRepository,
  WEDDING_CONTRACTS_REPOSITORY,
} from '../database/repositories/wedding-contracts.repository.interface';

@Injectable()
export class WeddingContractsService {
  constructor(
    @Inject(WEDDING_CONTRACTS_REPOSITORY)
    private readonly weddingContractsRepository: IWeddingContractsRepository,
  ) {}

  async createWeddingContract(owner: string) {
    return await this.weddingContractsRepository.create(owner);
  }
}
