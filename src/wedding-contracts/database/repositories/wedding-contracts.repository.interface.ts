import { WeddingContract } from '../schemas/wedding-contract.schema';

export const WEDDING_CONTRACTS_REPOSITORY = 'WEDDING_CONTRACTS_REPOSITORY';

export interface IWeddingContractsRepository {
  create(weddingContract: Omit<WeddingContract, '_id'>): Promise<string>;
  getByOwner(owner: string): Promise<WeddingContract[]>;
}
