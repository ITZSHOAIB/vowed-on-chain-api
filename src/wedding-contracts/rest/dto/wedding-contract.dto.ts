import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CONTRACT_STATUS } from 'src/wedding-contracts/database/schemas/wedding-contract.schema';

export class WeddingContractDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  owner: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEnum(CONTRACT_STATUS)
  status: CONTRACT_STATUS;

  @ApiProperty()
  @IsOptional()
  @IsString()
  smartContractAddress: string;
}
