import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { WeddingContractsService } from '../services/wedding-contracts.service';
import { CreateWeddingContractsDto } from './dto/create-wedding-contracts.dto';
import { WeddingContractDto } from './dto/wedding-contract.dto';

@Controller('wedding-contracts')
@ApiTags('wedding-contracts')
export class WeddingContractsController {
  constructor(
    private readonly weddingContractsService: WeddingContractsService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Req() req: any,
    @Body() createWeddingContractsDto: CreateWeddingContractsDto,
  ): Promise<string> {
    const { id: userId } = req?.user;
    return await this.weddingContractsService.createWeddingContract(
      userId,
      createWeddingContractsDto,
    );
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getByOwner(@Req() req: any): Promise<WeddingContractDto[]> {
    const { id: userId } = req?.user;
    return await this.weddingContractsService.getWeddingContractsByOwner(
      userId,
    );
  }
}
