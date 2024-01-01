import { Module } from '@nestjs/common';
import { WeddingContractsController } from './rest/wedding-contracts.controller';
import { WeddingContractsService } from './services/wedding-contracts.service';
import { WEDDING_CONTRACTS_REPOSITORY } from './database/repositories/wedding-contracts.repository.interface';
import { WeddingContractsRepository } from './database/repositories/wedding-contracts.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WeddingContract,
  WeddingContractSchema,
} from './database/schemas/wedding-contract.schema';

@Module({
  controllers: [WeddingContractsController],
  providers: [
    {
      provide: WEDDING_CONTRACTS_REPOSITORY,
      useClass: WeddingContractsRepository,
    },
    WeddingContractsService,
  ],
  imports: [
    MongooseModule.forFeature([
      { name: WeddingContract.name, schema: WeddingContractSchema },
    ]),
  ],
})
export class WeddingContractsModule {}
