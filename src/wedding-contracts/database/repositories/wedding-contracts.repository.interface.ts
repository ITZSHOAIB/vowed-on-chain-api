import { WeddingContract } from '../schemas/wedding-contract.schema';

export const WEDDING_CONTRACTS_REPOSITORY = 'WEDDING_CONTRACTS_REPOSITORY';

export interface IWeddingContractsRepository {
  create(owner: string): Promise<string>;
  update(id: string, weddingContract: Partial<WeddingContract>): Promise<void>;
}
