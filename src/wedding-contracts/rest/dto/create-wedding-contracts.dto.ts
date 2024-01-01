import { OmitType } from '@nestjs/swagger';
import { WeddingContractDto } from './wedding-contract.dto';

export class CreateWeddingContractsDto extends OmitType(WeddingContractDto, [
  'id',
  'owner',
]) {}
